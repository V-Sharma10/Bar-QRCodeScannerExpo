const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    password: String,
    privateKey: String,
    address: String
}, 
{strict: false});

const model = mongoose.model("user", user);

module.exports = model;