const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9545'));
const artifact = require('./build/contracts/supermarket');
const instance = new web3.eth.Contract(artifact.abi, artifact.networks['5777'].address);

module.exports = {
    make_purchase: async function(items, prices, qty, total, account, callback){
        try{
            const tx = await instance.methods.make_purchase(items, prices, qty, total).send({from: account, value: total});
            console.log(tx);
            return tx;
        }
        catch(e){
            console.error(e);
            return "Error Occured!";
        }
    },
    get_logs: async function(account){
        try{
            let gEvents;
            await instance.getPastEvents('purchase_made', {fromBlock: 0}, (error, events) => { gEvents = events});
            const all_purchases = gEvents.map(event => {
                return {
                    sender: event.returnValues[0],
                    items: event.returnValues[1],
                    unit_prices: event.returnValues[2],
                    qty: event.returnValues[3],
                    total: event.returnValues[4],
                    timeOfPurchase: event.returnValues[5],
                    paid: event.returnValues[6]
                };
            });
            const history = all_purchases.filter( purchase => purchase.sender === account);
            return history;
        }
        catch(e){
            console.error(e);
            return "Error Occured!";
        }
    }
};