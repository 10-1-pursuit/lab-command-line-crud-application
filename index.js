const inform = console.log;

const { nanoid } = require("nanoid")

const { readJSONFile, writeJSONFile } = require("./src/helpers");

const { create, show, index, destroy, edit } = require("./src/controllers")



inform("Welcome to Our Store App");

function run() {
    let writeToFile = false;
    let updatedPurchase = [];

    let purchases = readJSONFile("data", "purchase.json")
    inform("Here is the data read", purchases)

    const action = process.argv[2];
    const purchaseName = process.argv[3];
    const purchaseAmount = process.argv[4];
    const purchaseQuantity = process.argv[5];
    const purchaseTotal = process.argv[6];
    const purchaseDonation = process.argv[7];
    const purchaseId = nanoid(6);


    switch (action) {

        case "index":
            const purchaseView = index(purchases);
            inform(purchaseView);
            break;

        case "show":
            const purchaseViewShow = show(purchases, purchaseName, purchaseAmount, purchaseQuantity, purchaseTotal, purchaseDonation, purchaseId);
            inform(purchaseViewShow);
            break;

        case "create":
            updatedPurchase = create(purchases, purchaseName, purchaseAmount, purchaseQuantity, purchaseTotal, purchaseDonation, purchaseId);
            writeToFile = true;
            break;

        case "update":
            updatedPurchase = edit(purchases, purchaseName, purchaseAmount, purchaseQuantity, purchaseTotal, purchaseDonation, purchaseId);
            writeToFile = true;
            break;

        case "destroy":
            updatedPurchase = destroy(purchases, purchaseName, purchaseAmount, purchaseQuantity, purchaseTotal, purchaseDonation, purchaseId);
            writeToFile = true;
            break;

        default:
            inform("Well, that's embarrassing!");

    }

    if (writeToFile) {

        writeJSONFile("./data", "purchase.json", updatedPurchase);

    }

}

run()




module.exports = {
    index,
    create,
    show,
    edit,
    destroy



}




































