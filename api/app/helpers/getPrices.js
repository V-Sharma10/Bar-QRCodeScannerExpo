const items = require('../db/items');
const asyncForEach = require('./asyncForEach');

const getPrices = async (item) => {
    let unit_prices = [];

    await asyncForEach(item, async(id) => {
        let document = await items.find({id: id});
        unit_prices.push(document[0].unit_price);
    });
    // console.log(unit_prices);
    return unit_prices;
}

module.exports = getPrices;
