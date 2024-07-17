const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    adress: String,
    password: String,
});
const User = mongoose.model('users', userSchema);
module.exports = User;