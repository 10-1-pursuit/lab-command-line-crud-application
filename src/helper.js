const { nanoid } = require("nanoid");
const { readJSONFile, writeJSONFile } = require('../data/data');

let data = readJSONFile("./data", "data.json");

// This function takes purchase details (name, amount) generate a unique ID and roudn the donation amount to two decimal places, then return the object created
// function createPurchase(name, amount) {
//     const id = nanoid();
//     const roundUpDonation = Math.ceil(amount);
//     const donation = (roundUpDonation - amount).toFixed(2);

function createPurchase(name, amount, id) {
    const purchaseId = id || nanoid();
    const roundUpDonation = Math.ceil(amount);
    const donation = (roundUpDonation - amount).toFixed(2);

    return {
        id,
        name,
        amount,
        donation
    };
};

function listPurchases(purchases) {
    return purchases.map(({ id, name }) => ({ id, name }));
}

function parseParams(params) {
const parsedParams = {}

params.forEach(param => {
    const [key, value] = param.split('=');
    parsedParams[key] = value;
});
return parsedParams;
}



module.exports = {
    createPurchase,
    listPurchases,
    parseParams
}
