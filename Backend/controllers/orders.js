
const orderModel = require('../models/orderModel')

exports.orders = async (req,res) =>{
    try{
        const response = await orderModel.find();
        return res.status(200).json({
            success: true,
            body: response
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message: err
        })
    }
}

exports.order = async (req,res) =>{
    try{
        const response = await orderModel.findById(req.params.id);
        return res.status(200).json({
            success: true,
            body: response
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message: err
        })
    }
}

exports.updateOrder = async(req,res) =>{
    try{
        const check = await orderModel.findById(req.body.id);
        if(check == null){
            return res.status(200).json({
                success: false,
                body: "Order does not exist"
            })  
        }
        const response = await orderModel.findByIdAndUpdate(req.body.id,{status:req.body.status})
        return res.status(200).json({
            success: true,
            body: "Order Staus Updated"
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message: err
        })
    }
}
