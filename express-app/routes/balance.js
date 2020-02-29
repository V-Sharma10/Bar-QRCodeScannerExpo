const express = require('express');
const router = express.Router();
const users = require('../db/users');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/63f56f544f644afeaad7744c534d426a'));
const privateKey = "0x07fae8b4200886cd15a977b60b0633f3e3bf1877f655f3fbbc7f5e6988acc0e5";
const wallet = web3.eth.accounts.wallet.create();
wallet.clear();
wallet.add(privateKey);


router.post('/checkBalance', async(req, res) => {
    try{
        console.log("/checkBalance");
        const { id } = req.body;
        const user = await users.find({id:id});
        const { address } = user[0];
        const balance = await web3.eth.getBalance(address);
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
        const { id, amount } = req.body;
        const user = await users.find({id:id});
        const { address } = user[0];
        console.log(wallet[0].address, address);
        const result = await web3.eth.sendTransaction(
            {
                from: wallet[0].address, to:address, 
                value: web3.utils.toWei(amount),
                gas: 6000000,
                // nonce: Math.floor(Math.random()*1000000)
                nonce: 50000
            });
        console.log(result);
        if(true){
            const balance = await web3.eth.getBalance(wallet[0].address);
            console.log(wallet[0].address, balance);
            res.status(200).json({
                data: balance,
                status: "success"
            });
        }
        else{
            res.status(500).json({
                data: result,
                status: "failure"
            });
        }
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