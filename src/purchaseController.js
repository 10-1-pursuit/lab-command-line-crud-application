const chalk = require("chalk");
const { createPurchase, listPurchases, parseParams } = require('./helper.js');
const { readJSONFile, writeJSONFile } = require('../data/data.js');
const path = "./data";
const fileName = "data.json";
data = [];

// function createPurchaseController(purchases, name, amount) {
//     const purchase = createPurchase(name, amount);
//     purchases.push(purchase);
//     console.log(chalk.green('Purchase created successfully!'));

// }

function createPurchaseController(purchases, purchaseName, amount) {
    const { name, id } = parseParams;
    const purchase = createPurchase(purchaseName, amount, id);
    purchases.push(purchase);
    console.log(chalk.green('Purchase created successfully!'));

}

function listPurchaseController(purchaseData) {
    const purchases = listPurchases(purchaseData);
    console.log(chalk.green('--- Purchase List ---'));
    purchases.forEach(({ id, name}) => {
        console.log(chalk.green(`ID: ${id}\tName: ${name}`));
    });
};

function updatePurchaseController(purchases, id, newName) {
    const purchase = purchases.findIndex((purchase) => purchase.id === id);

    if (purchase === -1) {
        console.log(chalk.red('purchase not found!'));
        return;
    }

    purchases[purchase].name = newName;
    console.log(chalk.bold.green('Purchase updated successfully'));
    return purchases;
}


function removePurchaseController(purchases, id) {
    const index = purchases.findIndex((purchase) => purchase.id === id);
    if (index === -1) {
        console.log(chalk.red('Purchase not found!'));
        return;
    }
    purchases.splice(index, 1);
    writeJSONFile(path, fileName, purchases);
    console.log(chalk.green('Purchase removed successfully'));
}

module.exports = {
    createPurchaseController,
    listPurchaseController,
    updatePurchaseController,
    removePurchaseController
}