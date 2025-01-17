const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        unique : true,
        required : true 
    },
    password : String,
    phone : String,
    role : String,
},{
    timeStamps : true
})


const userModel = mongoose.model("user",userSchema)

module.exports = userModel