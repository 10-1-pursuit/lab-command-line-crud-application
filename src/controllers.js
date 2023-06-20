const inform = console.log;
const { writeJSONFile } = require("../src/helpers")
const { purchase } = require("../data/purchase.JSON")
const { nanoid } = require("nanoid");
const { chalk } = require("chalk")



function index(arrayOfPurchases) {

    arrayOfPurchases.map((eachPurchase) => eachPurchase.id + " " + eachPurchase.name).join("/n");


}

function show(purchases, purchaseId, purchaseName) {
    const purchaseToFind = purchases.findIndex((purchase) => purchase.id === purchaseId);
    let stockItems = purchases.find((stock) => stock.name === purchaseName)
    for (purchaseToFind of purchases) {
        return `item_SKU: ${chalk.greenBright(purchaseToFind.id)} Purchase Name: ${chalk.yellow(purchaseToFind.name)} Amount: ${chalk.red(purchaseToFind.amount)} Donations: ${chalk.blue(purchaseToFind.donations)}`
    }
}

function create(purchases, purchaseName, purchaseAmount, number, inStock) {
    const newPurchase = {
        name: purchaseName,
        amount: number,
        inStock: true,
        donations: number,
        id: nanoid(6),
    };
    purchases.push(newPurchase);
    return purchases;
}

function destroy(purchases, purchaseId, purchaseName) {
    const removeById = purchases.findIndex((purchase) => purchase.id === purchaseId);
    const removeByName = purchases.find((purchased) => purchased.name === purchaseName);
    for (i = 0; i < purchases.length; i++) {
        if (removeById !== -1) {
            let purchaseRemoved = purchases.splice(removeById, 1);
            inform(`${purchaseRemoved} was successfully removed from cart`);
            writeJSONFile("./data", "purchase.JSON", purchases)
            return animals;
        } else {
            inform("Purchase not found. No action taken");
            return purchases;
        }
    }
}

function update(purchases, purchaseName, purchaseAmount, purchaseDonations, purchaseId) {
    const purchaseIdToUpdate = purchases.findIndex((purchase) => purchase.id === purchaseId);
    const purchaseNameToUpdate = purchases.find((purchased) => purchased.name === purchaseName);
    for (i = 0; i = purchases.length; i++) {
        if (index > -1) {
            purchases[purchaseIdToUpdate].id = purchaseId;
            purchases[purchaseIdToUpdate].name = updatedPurchase;
            purchases[purchaseIdToUpdate].amount = purchaseAmount[updatedPurchase];
            purchases[purchaseIdToUpdate].donations = purchaseDonations;
            purchases[purchaseNameToUpdate].id = purchaseId;
            purchases[purchaseNameToUpdate].name = updatedPurchase;
            purchases[purchaseNameToUpdate].amount = purchaseAmount[updatedPurchase];
            purchases[purchaseNameToUpdate].donations = purchaseDonations;
            inform("Purchase successfully updated");
            return purchases;
        } else {
            inform("purchases not found. No action taken");
            return purchases;
        }
    }
}


module.exports = {
    index,
    show,
    create,
    update,
    destroy
}