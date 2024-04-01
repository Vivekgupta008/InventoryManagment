const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    username:{
        type :String,
        required :true,
        trim :true,
    },
    email:{
        type :String,
        required :true,
        trim :true,
    },
    password:{
        type :String,
        required :true,
    },
    role:{
        type :String,
        enum :["Admin","Delivery","Inventory Manager"]
    },
})

module.exports = mongoose.model("user",userModel)