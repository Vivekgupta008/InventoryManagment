const mongoose = require("mongoose")

require("dotenv").config()

function connectWithDb(){
    mongoose.connect(process.env.URL,{
        useNewUrlParser :true,
        useUnifiedTOpology :true
    })
    .then(()=>{console.log("Auth DB connected successfully")})
    .catch((err)=>{console.log(err)
        process.exit(1)})
}

module.exports = connectWithDb
