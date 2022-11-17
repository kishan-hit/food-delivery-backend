const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true,'Order name required'],
    },
    email:{
        type: String,
        required: [true,'Email is required'],
    },
    userid:{
        type: String,
        // required: true,
    },
    orderItems: [],
    shippingAddress: {
        type: Object,
    },
    orderAmount:{
        type: String,
        // required: true
    },
    isDelivered:{
        type: String,
        // required: true
    },
    transactionId:{
        type: String,
        // required: true
    },
},{timestamps:true})

module.exports = mongoose.model('order',orderSchema);