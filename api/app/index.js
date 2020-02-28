const express = require('express');
const mongoose = require('mongoose');
const body_parser = require('body-parser');
const cors = require('cors');

const contract_functions = require('./contract');
const items = require('./routes/items');
const users = require('./routes/users');

const app = express();

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

const uri = "mongodb+srv://omega:paSSword123@supermarket-drtsn.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(con => {
    console.log("connected with db");
});

app.use('/items', items);
app.use('/users', users);

app.listen(3000, () => {
    console.log("express listening on port 3000.");
})









// contract_functions.make_purchase([1,2], [1,1], [1,1], 2, "0xE0dA69259a757eD121fA38c6A883Bca29c2daffe");
// contract_functions.get_logs("0xE0dA69259a757eD121fA38c6A883Bca29c2daffe");

// findbyid
// findbyid&delete
// findbyid&update
// create
// mongo atlas