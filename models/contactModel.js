const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    name:{
        type:String,
        required:[true,"please add contact name"]
    },
    email:{
        type:String,
        required:[true,"please add contact email"]
    },
    ph:{
        type:Number,
        required:[true,"please add contact ph"]
    },
}, {
    timestamps:true
})

module.exports = mongoose.model("contact", contactSchema)