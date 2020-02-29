const express = require('express');
const router = express.Router();
const users = require('../db/users');
const Web3 = require('web3');
const jwt = require('jsonwebtoken');
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/63f56f544f644afeaad7744c534d426a'));

router.post('/register', async (req,res) => {
    try{
        console.log("/newUser");
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

router.post('/login', async(req, res) => {
    try{
        console.log("/login");
        const { id, password } = req.body;
        const documents = await users.find({id:id});
        if(documents.length === 0){
            res.status(404).json({
                data: "No such user found",
                status: "failure"
            });
        }
        else if(documents[0].password !== password){
            res.status(400).json({
                data: "incorrect password",
                status: "failure"
            });
        }
        else if(documents[0].password === password){
            const token = jwt.sign({
                id: documents[0],
            },
            "admin",
            {
                expiresIn: "1h"
            }
            );
            res.status(200).json({
                message: "Auth successful",
                token: token,
                status: "success"
            });
        }
    }
    catch(e){
        console.log(e);
        res.status(400).json({
            message: "Bad Request",
            status: "failure"
        })
    }
});



module.exports = router;