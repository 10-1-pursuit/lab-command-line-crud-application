const chalk = require("chalk");
const { readJSONFile, writeJSONFile } = require("../data/data.js");
const {
  indexPurchaseController,
  listPurchaseController,
  createPurchaseController,
  updatePurchaseController,
  removePurchaseController,
} = require("./purchaseController.js");
const { parseParams } = require("./helper.js");

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
  // Run serves as the entry point for executing the Purchase Donation App
  console.log(chalk.bold.green("Welcome to Purchase Donation App!"));

  let writeToFile = false; // writeToFile is set to false inidicating no changes have been made, and the variable is used to determine whether changes has been made to the purchases array and whether it should be written back to the JSONfile.
  const action = process.argv[2]; // Start at index[2], which represents the command-line argument we want the case statements to use
  // Dont need the const below cause of parseParams
  // const name = process.argv[3]; // This is used as an argument and represents the name of the purchase
  // const amount = process.argv[4]; // This is used as an argument and represents the amount of the purchase
  const path = "data";
  const fileName = "data.json";
  let purchases = readJSONFile(path, fileName); // assign purchases to the data.json file
  const params = parseParams(process.argv.slice(3)); // This extracts only the name and amount parameters from the command-line arument, the params array will contain the name and amount values
  const { name, amount, id } = params;

  switch (
    action // Handle different actions based on the value of action
  ) {
    case "index": // This is an action, write this in the terminal when wanting to get indexPurchases
      indexPurchaseController(purchases); // Call indexpurchaseController and pass purchases as an argument
      break; // Exits the switch block once the corresponding case is executed so the other case blocks wont activate.

    case "list":
      listPurchaseController(purchases);
      break;

    case "create":
      createPurchaseController(purchases, name, amount, id); // Call createPurchaseController with three arguments and it creates a new purchase adding it to the purchases array.
      writeToFile = true; // Setting writeToFile to be true indicates changes have been made, and should see it change in the data.json file
      break;

    case "update":
      // const id = process.argv[3]; // For command-line argument use (use the exact unique identifier)
      // const newName = process.argv[4]; // For command-line argument use (create a new name to updatePurchase)
      updatePurchaseController(purchases, id, name); // If a purchase is found using updatePurchaseController, the name property is updated with newName value as shown in the purchaseController.js
      writeToFile = true;
      break;

    case "remove":
      // const removeId = process.argv[3]; // For command-line argument use (use the exact unique identifier)
      removePurchaseController(purchases, id); // If the removeId matches purchases.id
      writeToFile = true; // Delete the array that had that unique identifier from data.json
      break;
    default: // if none of the cases get activted, default to this console.log
      console.log(chalk.red("Invalid action!"));
      break;
  }

  if (writeToFile) {
    // if writeToFile is true
    writeJSONFile(path, fileName, purchases); // write the changes into the data.json
  }
}

run();
