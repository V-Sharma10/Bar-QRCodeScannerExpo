const express = require('express');
const Web3 = require('web3');
const users = require('../db/users');
const getPrices = require('../helpers/getPrices');
const contract = require('../contract');

const router = express.Router();
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9545'));

const storeAddress = "0xD9fc93401b9EA78eF7c235Ac05fDE93e74bF0752";

router.post('/makePurchase', async(req,res) => {
    try{
        console.log("/makePurchase");
        const { id, items, qty} = req.body;
        
        var unit_prices = await getPrices(items);
        let total = 0;
        items.forEach((val, idx) => {
            total += unit_prices[idx]*qty[idx];
        });

        const document = await users.find({id:id});
        const { address, privateKey } = document[0];

        const result = await contract.make_purchase(items, unit_prices, qty, total, privateKey);

        res.status(200).json({
            data: result,
            status: "success"
        });
    }
    catch(e){
        console.log(e);
        res.status(400).json({
            message: "Bad Request",
            status: "failure"
        });
    }
});

router.post('/getHistory', async(req,res) => {
    try{
        console.log("/getHistory");
        const { id } = req.body;
        const document = await users.find({id});
        const { address } = document[0];
        const result = await contract.get_logs(address);

        res.status(200).json({
            data: result,
            status: "success"
        });
    }
    catch(e){
        console.log(e);
        res.status(400).json({
            message: "Bad Request",
            status: "failure"
        });
    }
});

module.exports = router;