const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/63f56f544f644afeaad7744c534d426a'));
const artifact = require('./build/contracts/supermarket');

web3.eth.getBalance("0xC9F877150c704724646c8EEedb30A04c0FbB84FD").then(console.log);

module.exports = {
    make_purchase: async function(items, prices, qty, total, privateKey, callback){
        try{
            const networkId = await web3.eth.net.getId();
            const instance = new web3.eth.Contract(artifact.abi, artifact.networks[networkId].address);

            let wallet = web3.eth.accounts.wallet.create();
            wallet.clear();
            wallet.add(privateKey);
            console.log(wallet['0'].address);
            
            const tx = await instance.methods.make_purchase(items, prices, qty, total).send({from: wallet['0'].address, value: total, gas: 6000000});
            wallet.clear();
            console.log(tx);
            
            return tx;
        }
        catch(e){
            console.error(e);
            return "Error Occured!";
        }
    },
    get_store: async function(){
        try{
            const networkId = await web3.eth.net.getId();
            const instance = new web3.eth.Contract(artifact.abi, artifact.networks[networkId].address);

            const result = await instance.methods.store().call();
            console.log(result);
        }
        catch(e){
            console.log(e);
            return "Error Occured!";
        }
    },
    get_logs: async function(account){
        try{
            const networkId = await web3.eth.net.getId();
            const instance = new web3.eth.Contract(artifact.abi, artifact.networks[networkId].address);
            
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