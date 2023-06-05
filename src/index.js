const { showAllPurchases, showPurchase } = require('./views');
const { calculateDonation } = require('./donation');
const { createPurchase, updatePurchase, deletePurchase, getAllPurchases } = require('./purchase');

//Ex.

createPurchase("coffee", 7.23);
createPurchase("chai tea", 6.87);
updatePurchase(getAllPurchases()[0].id, "iced coffee", 8.94);
deletePurchase(getAllPurchases()[1].id);

console.log(showAllPurchases());
console.log(showPurchase(getAllPurchases()[0].id));
console.log(`Total Donation: $${calculateDonation()}`);