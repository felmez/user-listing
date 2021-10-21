const bcrypt = require('bcrypt');
const { UserInputError } = require('apollo-server');

const { validateCreateInput } = require('../../util/validators');
const User = require('../../models/User');

let reqRate = 2;
let reqLimit = 10;
let reqWait = 90000;
let reqSeconds = reqWait / 1000;

module.exports = {
    Query: {
        async getUsers() {
            try {
                const users = await User.find().sort({ createdAt: -1 });
                return users;
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async createUser(_, {
            createInput: {
                name,
                email,
                role,
                password,
                confirmPassword
            }
        }) {

            const { valid, errors } = validateCreateInput(name, email, role, password, confirmPassword);

            if (!valid) {
                throw new UserInputError('Errors', { errors })
            }

            const duplicateEmail = await User.findOne({ email });

            if (duplicateEmail) {
                throw new UserInputError('Email daha önce kullanılmıştır', {
                    errors: {
                        email: 'Email daha önce kullanılmıştır'
                    }
                })
            }

            if (reqRate < 1) {
                throw new UserInputError('10 saniye içerisinde en fazla 2 kayıt yapabilirsiniz, ' + reqSeconds + ' saniye bekleyiniz', {
                    errors: {
                        limitError: '10 saniye içerisinde en fazla 2 kayıt yapabilirsiniz, ' + reqSeconds + ' saniye bekleyiniz'
                    }
                })
            }

            function resetReqLimit() {
                reqLimit = 10;
            }

            function resetReqRate() {
                reqRate = 2;
            }

            function startWaiting() {
                setTimeout(function () {
                    // reset rate and limit after waiting is done
                    resetReqLimit()
                    resetReqRate();
                }, reqWait);
            }

            // counting waiting seconds just for error display and better UX
            const secondsCounting = function () {
                let interval;
                interval = setInterval(function () {
                    if (isZero(reqSeconds)) {
                        clearInterval(interval)
                    } else {
                        reqSeconds--;
                    }
                }, 1000);
            }

            function isZero(field) {
                if (field == 0) {
                    return true;
                } else {
                    return false;
                }
            }

            const startCounting = function () {
                let interval;
                interval = setInterval(function () {
                    // while waiting did not started because only one rate has been used in the same 10 seconds therefore reset rate and limit
                    if (isZero(reqLimit) && reqRate == 1) {
                        resetReqLimit();
                        resetReqRate();
                        clearInterval(interval);
                        // while waiting started and all rates has been used in the same 10 seconds
                    } else if (isZero(reqLimit)) {
                        clearInterval(interval);
                    } else {
                        reqLimit--;
                    }
                }, 1000);
            };

            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                name,
                email,
                role,
                password,
                createdAt: new Date().toISOString()
            })

            const res = await newUser.save();

            if (res) {
                if (reqRate == 2) {
                    // start timer when is the first request is successful
                    reqRate--;
                    startCounting()
                } else if (reqRate == 1 && reqLimit < 10) {
                    // start the waiting when the second request is successful in the same 10 seconds
                    reqRate--;
                    startWaiting()
                    secondsCounting()
                }
            }

            return {
                ...res._doc,
                id: res._id
            }
        },
        async deleteUser(_, { userID }) {
            try {
                const user = await User.findById(userID);
                await user.delete();
                return 'User deleted successfully';
            } catch (err) {
                throw new Error(err);
            }
        }
    }
}