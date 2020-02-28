const express = require('express');
const router = express.Router();
const items = require('../db/items');

router.post('/', async (req,res) => {
    try{
        console.log("new item");
        let { id, unit_price } = req.body;
        const newItem = await items.create({id, unit_price});
        res.status(201).json({
            data: newItem,
            status: "success"
        })
    }
    catch(e){
        console.log(e);
        res.status(400).json({
            message: "Bad Request",
            status: "failure"
        });
    }
});

router.get('/:id', async(req,res) => {
    try{
        console.log("get item");
        const id = req.params.id;
        const item = await items.find({id});

        res.status(200).json({
            item: item[0]
        });
    }
    catch(e){
        console.log(e);
        res.status(400).json({
            message: "Bad Request",
            status: "failure"
        });
    }
})

module.exports = router;