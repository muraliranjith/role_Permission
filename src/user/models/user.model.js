const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: {
        type: String,
        enum: ["buyer", "admin", "seller", "agent"]
    }
}, { timestamps: true });
var User = mongoose.model('User', UserSchema)
module.exports = {
    User
}