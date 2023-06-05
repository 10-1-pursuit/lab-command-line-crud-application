const { showAllPurchases, showPurchase } = require("./views");
const { calculateDonation } = require("./donation");
const { createPurchase, updatePurchase, deletePurchase, getAllPurchases, readJSONFile, writeJSONFile } = require("./purchase");

function run() {
    createPurchase("latte", 5.79);
    const purchases = readJSONFile("../data", "purchases.json");
  
    writeJSONFile("../data", "purchases.json", purchases);
  
    console.log("\nAll Purchases");
    console.log(showAllPurchases());
  
    if (purchases.length > 0) {
    console.log("\nPurchase Details");
        for (const purchase of purchases){
        const purchaseId = purchase.id;
        console.log(showPurchase(purchaseId))
        };
    }
  
    console.log(`\nTotal Donation: $${calculateDonation()}`);
  }
  
  run();