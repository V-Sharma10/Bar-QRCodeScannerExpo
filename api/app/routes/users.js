const express = require('express');
const router = express.Router();
const users = require('../db/users');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9545'));

router.post('/', async (req,res) => {
    try{
        console.log("new user");
        let { id, password } = req.body;
        const newAccount = web3.eth.accounts.create();
        const { address, privateKey } = newAccount;
        const newUser = await users.create({id, password, address, privateKey});
        res.status(201).json({
            data: newUser,
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

router.post('/checkBalance', async(req, res) => {
    try{
        console.log("check balance");
        const { id } = req.body;
        const user = await users.find({id:id});
        // console.log(user);
        const { address } = user[0];
        // console.log(address);
        const balance = await web3.eth.getBalance(address);
        // console.log(balance);
        res.status(200).json({
            balance: balance,
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

router.post('/addBalance', async(req, res) => {
    try{
        console.log("/addBalance");
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        const { id, amount } = req.body;
        console.log(id,amount);
        res.status(200).json({
            data: accounts,
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


module.exports = router;