const { getAllPurchases } = require("./purchase");

const calculateDonation = () => {
    const purchases = getAllPurchases();
    let totalDonation = 0
    for (const purchase of purchases){
        totalDonation += parseFloat(purchase.donation);
    }
    return totalDonation;
}
 module.exports = { calculateDonation };