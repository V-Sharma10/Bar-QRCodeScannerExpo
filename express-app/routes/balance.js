const express = require('express');
const router = express.Router();
const users = require('../db/users');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/63f56f544f644afeaad7744c534d426a'));
const privateKey = "0x07fae8b4200886cd15a977b60b0633f3e3bf1877f655f3fbbc7f5e6988acc0e5";
const myAccount = web3.eth.accounts.privateKeyToAccount(privateKey);


router.post('/checkBalance', async(req, res) => {
    try{
        console.log("/checkBalance");
        const { id } = req.body;
        const user = await users.find({id:id});
        const { address } = user[0];
        const balance = await web3.eth.getBalance(address);
        const balanceHumanReadable = web3.utils.fromWei(balance)*1000;
        res.status(200).json({
            balance: balanceHumanReadable,
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
        const tx = {
            from: myAccount.address,
            value: web3.utils.toWei((amount/1000).toString()),
            to: address,
            gas: 6000000
        };
        const signedTx = await myAccount.signTransaction(tx);
        const result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        console.log(result);
        web3.eth.getBalance("0xC9F877150c704724646c8EEedb30A04c0FbB84FD").then(console.log);
        if(true){
            const balance = await web3.eth.getBalance(address);
            const balanceHumanReadable = web3.utils.fromWei(balance)*1000;
            res.status(200).json({
                newBalance: balanceHumanReadable,
                result,
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