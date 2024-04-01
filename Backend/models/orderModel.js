const mongoose = require('mongoose')

const orderModel = new mongoose.Schema({
    customer:{
        name:{
            type: 'string',
            required: true
        },
        address:{
            type: 'string',
            required: true
        },
        phone:{
            type: 'string',
            required: true
        }
    },
    status:{
        type: 'string',
        enum :['Inventory','Ready to Deliver','Delivery','Delivered']
    }
})

module.exports = mongoose.model('order',orderModel);