const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    name: String,
    email: String,
    role: String,
    password: String,
    createdAt: String
})

module.exports = model('User', userSchema);