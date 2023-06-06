const { showAllPurchases, showPurchase } = require("./views");
const { calculateDonation } = require("./donation");
const { createPurchase, updatePurchase, deletePurchase, getAllPurchases, readJSONFile, writeJSONFile, getPurchase } = require("./purchase");

const inform = console.log

function run() {
    const command = process.argv[2];

  switch (command) {
    case "create":
      const name = process.argv[3];
      const amount = parseFloat(process.argv[4]);
      createPurchase(name, amount);
      break;
    case "getAllPurchases":
      const purchases = getAllPurchases();
      inform(showAllPurchases(purchases));
      break;
    case "show":
      const showId = process.argv[3];
      inform("Purchase Details");
      inform(showPurchase(showId));
      break;
    case "update":
      const updateId = process.argv[3];
      const updatedName = process.argv[4];
      const updatedAmount = parseFloat(process.argv[5]);
      updatePurchase(updateId, updatedName, updatedAmount);
      break;
    case "delete":
      const deleteId = process.argv[3];
      deletePurchase(deleteId);
      break;
    case "totalDonation":
      inform(`Total Donation: $${calculateDonation()}`);
      break;
    default:
      inform("Invalid command");
      return;
  }
  }
  
  run();