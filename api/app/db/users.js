const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    password: String,
    private_key: String,
    public_key: String
}, 
{strict: false});

const model = mongoose.model("user", user);

module.exports = model;