const express = require("express");
const router = express.Router();
const Item = require("../models/itemModel")

router.get('/getItemByRes/:id',async(req,res)=>{
    try{
        const id = req.params['id']
        const items = await Item.find({restaurantId :id})
        res.send(items)
    }
    catch(error){
        res.json({message:error})
    }
});
router.get('/getItemById',async(req,res)=>{
    try{
        const items = await Item.find({_id : req.body._id})
        res.send(items)
    }
    catch(error){
        res.json({message:error})
    }
});
router.post('/upload-item',async(req,res)=>{ 
    try {
        let newItem = {
            name : req.body.name,
            restaurantId : req.body.rid,
            price : req.body.price,
            image : req.body.image,
            description : req.body.description
        }
        let item = new Item(newItem);
        item = await item.save();
        res.send(item)
    } catch (error) {
        res.json({message:error})
    }
})
module.exports = router;