const mongoose = require ('mongoose');
const {Schema} = mongoose

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {type:String, unique:true },
    phone: Number,
    message: String
}, {timestamps:true})

const User = mongoose.model('users', UserSchema);
module.exports = User