const express = require("express");
const pizzas = require("../data/pizza-data");
const router = express.Router();
const pizzaModel = require('../models/pizzaModel');

router.get('/getAllPizzas',async(req,res)=>{
    try{
        const pizzas = await pizzaModel.find({})
        res.send(pizzas)
    }
    catch(error){
        res.json({message:error})
    }
});
module.exports = router;