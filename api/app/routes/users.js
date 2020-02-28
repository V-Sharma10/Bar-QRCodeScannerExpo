const express = require('express');
const router = express.Router();
const users = require('../db/users');

router.post('/', async (req,res) => {
    try{
        console.log("new user");
        let { id, password } = req.body;
        const newUser = await users.create({id, password});
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


module.exports = router;