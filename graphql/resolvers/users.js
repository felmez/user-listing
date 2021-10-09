const bcrypt = require('bcrypt');
const { UserInputError } = require('apollo-server');

const { validateCreateInput } = require('../../util/validators');
const User = require('../../models/User');

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

            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                name,
                email,
                role,
                password,
                createdAt: new Date().toISOString()
            })

            const res = await newUser.save();

            return {
                ...res._doc,
                id: res._id
            }
        }
    }
}