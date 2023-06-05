const { getAllPurchases } = require("./purchase");

const calculateDonation = () => {
    const purchases = getAllPurchases();
    let totalDonation = 0
    for (const purchase of purchases){
        totalDonation += purchase.donation;
    }
    return totalDonation.toFixed(2);
}
 module.exports = { calculateDonation };