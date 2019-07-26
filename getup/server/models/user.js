const mongoose = require('../config/mongoose');
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, minlength: 2},
    password: { type: String, default: ''},
}, {timestamps: true });
mongoose.model('User', UserSchema);
const User = mongoose.model('User');
module.exports = User;