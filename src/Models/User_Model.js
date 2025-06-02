const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+\@.+\..+/, "Please enter a valid email address"]
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: String
})

const User = mongoose.model("User", UserSchema)
module.exports = User
