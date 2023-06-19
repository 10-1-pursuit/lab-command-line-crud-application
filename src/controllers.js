const inform = console.log;
const { writeJSONFile } = require("../src/helpers")
const { nanoid } = require("nanoid");




function index(arrayOfPurchases) {

    arrayOfPurchases.map((eachPurchase) => eachPurchase.id + " " + eachPurchase.name).join("/n");


}

function show(arrayOfPurchases, purchaseId) {
    const purchaseToFind = purchases.find((purchase) => purchase.id === purchaseId);

    return purchaseToFind.id + " " + purchaseToFind.name + " " + purchaseToFind.amount + " " + purchaseToFind.donations;

}

function create(purchases, purchaseName, purchaseAmount, inStock, purchaseDonations,) {
    const newPurchase = {
        name: purchaseName,
        amount: purchaseAmount,
        inStock: true,
        donations: purchaseDonations,
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
    const index = purchases.findIndex((purchase) => purchase.id === purchaseId);
    const index2 = purchases.find((purchased) => purchased.name === purchaseName);
    if (index > -1) {
        purchases[index].id = purchaseId;
        purchases[index].name = updatedPurchase;
        purchases[index].amount = purchaseAmount[updatedPurchase];
        purchases[index].donations = purchaseDonations;
        inform("Purchase successfully updated");
        return purchases;
    } else {
        inform("purchases not found. No action taken");
        return purchases;
    }
}


module.exports = { index, show, create, update, destroy }