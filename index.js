const inform = console.log;

const { readJSONFile, writeJSONFile } = require("./src/helpers");


function run() {

    let writeToFile = false;
    let updatedPurchase = [];


    inform("Welcome to Our Store App");

    let purchases = readJSONFile("data", "purchase.JSON")
    inform("Here is the data read", purchases)



    const action = process.argv[2];
    const purchaseName = process.argv[3];
    const purchaseAmount = process.argv[4];
    const purchaseDonation = process.argv[5];
    const purchaseId = nanoid(6);


    switch (action) {

        case "index":
            const purchaseView = index(purchases);
            inform(purchaseView);
            break;

        case "show":
            const purchaseViewShow = show(purchases, purchaseName, purchaseAmount, purchaseDonation, purchaseId);
            inform(purchaseViewShow);
            break;

        case "create":
            updatedPurchase = create(purchases, purchaseName, purchaseAmount, purchaseDonation, purchaseId);
            writeToFile = true;
            break;

        case "update":
            updatedPurchase = edit(purchases, purchaseName, purchaseAmount, purchaseDonation, purchaseId);
            writeToFile = true;
            break;

        case "destroy":
            updatedPurchase = destroy(purchases, purchaseName, purchaseAmount, purchaseDonation, purchaseId);
            writeToFile = true;
            break;

        default:
            inform("Well, that's embarrassing!");



            if (writeToFile) {

                writeJSONFile("./data", "purchase.JSON", updatedPurchase);

            }


    }


    run()
































}








