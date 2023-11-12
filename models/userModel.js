const mongoose = require('mongoose')

const userSchema = ({
    username:{
        type:String,
        required:[true, "Please enter username"],
    },
    email:{
        type:String,
        required:[true, "Please enter email"],
        unique:[true, "email address already registered"]
    },
    password:{
        type:String,
        required:[true,"please enter the password"]
    }
})

module.exports = mongoose.model("User", userSchema)