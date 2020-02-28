const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const item = new Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    unit_price:{
        type: Number
    }
}, {strict: true});
const model = mongoose.model("item", item);

module.exports = model;