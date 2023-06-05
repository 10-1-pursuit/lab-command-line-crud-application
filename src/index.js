const chalk = require("chalk");
const { readJSONFile, writeJSONFile } = require('../data/data.js');
const {
    createPurchaseController,
    listPurchaseController,
    updatePurchaseController,
    removePurchaseController
} = require('./purchaseController.js');
const { createPurchase, listPurchases, parseParams } = require('./helper.js');

// function run() {
//     console.log(chalk.bold.green('Welcome to Purchase Donation App!'));

//     let writeToFile = false;
//     const action = process.argv[2];
//     const name = process.argv[3];
//     const amount = process.argv[4];
//     const path = "data";
//     const fileName = "data.json";
//     let purchases = readJSONFile(path, fileName);

//     switch (action) {
//         case "createPurchase":
//             createPurchaseController(purchases, name, amount);
//             writeToFile = true;
//             break;

//         case "listPurchases":
//             listPurchaseController(purchases);
//             break;

//         case "updatePurchase":
//             const id = process.argv[3];
//             const newName = process.argv[4];
//             updatePurchaseController(purchases, id, newName);
//             writeToFile = true;
//             break;

//         case "removePurchase":
//             const removeId = process.argv[3];
//             removePurchaseController(purchases, removeId);
//             writeToFile = true;
//             break;
//         default:
//             console.log(chalk.red('Invalid action!'));
//             break;

//     }

//     if (writeToFile) {
//         writeJSONFile(path, fileName, purchases);
//     }
// }

// run()

function run() {
    console.log(chalk.bold.green('Welcome to Purchase Donation App!'));

    let writeToFile = false;
    const action = process.argv[2];
    // const name = process.argv[3];
    // const amount = process.argv[4];
    const path = "data";
    const fileName = "data.json";
    let purchases = readJSONFile(path, fileName);

    const params = process.argv.slice(3)

    switch (action) {
        // case "createPurchase":
        //     createPurchaseController(purchases, name, amount);
        //     writeToFile = true;
        //     break;

        case "createPurchase":
            const createParams = parseParams(params)
            const { name, amount } = createParams;
            createPurchaseController(purchases, name, amount);
            writeToFile = true;
            break;

        case "listPurchases":
            listPurchaseController(purchases);
            break;

        case "updatePurchase":
            const id = process.argv[3];
            const newName = process.argv[4];
            updatePurchaseController(purchases, id, newName);
            writeToFile = true;
            break;

        case "removePurchase":
            const removeId = process.argv[3];
            removePurchaseController(purchases, removeId);
            writeToFile = true;
            break;
        default:
            console.log(chalk.red('Invalid action!'));
            break;

    }

    if (writeToFile) {
        writeJSONFile(path, fileName, purchases);
    }
}

run()