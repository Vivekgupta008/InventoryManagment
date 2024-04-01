// auth, isStudent and isAdmin
const jwt = require("jsonwebtoken")
require("dotenv").config();

exports.auth = (req,res,next)=>{
    try{
        const token = req.body.token || req.cookie.token 
        
        if(!token){
            return res.status(401).json({
                success :false,
                message :"token missing"
            })
        }

        try{
            const payload = jwt.verify(token,process.env.JWT_secret)

            req.user = payload;
        }
        catch(err){
            return res.send(401).json({
                success :false,
                message:"token is invalid"
            })
        }
        next();
    }
    catch(err){
        return res.send(500).json({
            success :false,
            message:"internal error"
        })
    }
}

exports.isAdmin= (req,res,next)=>{
    try{
        if(req.user.role !== "Admin"){
            return res.send(401).json({
                success :false,
                message:"protected route"
            })
        }
        next();
    }
    catch(err){
        return res.send(500).json({
            success :false,
            message:"internal error"
        })
    }
}