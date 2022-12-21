const mongoose = require('mongoose');
const itemSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    restaurantId : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required :true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{timestamps:true}
);

const itemModel = mongoose.model('item',itemSchema);
module.exports = itemModel;