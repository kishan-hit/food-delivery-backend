const mongoose = require('mongoose');
const restaurantSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    items: [],
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address : {
        type : String,
        required : true
    },
    number : {
        type : Number,
        required : true
    }
},{timestamps:true}
);

const restaurantModel = mongoose.model('restaurant',restaurantSchema);
module.exports = restaurantModel;