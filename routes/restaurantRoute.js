const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurantModel")

router.get('/getRestaurant',async(req,res)=>{
    try{
        const restaurants = await Restaurant.find({})
        res.send(restaurants)
    }
    catch(error){
        res.json({message:error})
    }
});
router.get('/getRestaurantById',async(req,res)=>{
    try{
        const restaurant = await Restaurant.findOne({_id : req.body._id})
        res.send(restaurant)
    }
    catch(error){
        res.json({message:error})
    }
});
router.post('/upload-restaurant',async(req,res)=>{
    try {
        let newRestaurant = {
            name : req.body.name,
            items : [],
            category : req.body.category,
            image : req.body.image,
            description : req.body.description,
            number : req.body.number,
            address : req.body.address
        }
        let restaurant = new Restaurant(newRestaurant);
        restaurant = await restaurant.save();
        res.send(restaurant)
    } catch (error) {
        res.json({message:error})
    }
})
module.exports = router;