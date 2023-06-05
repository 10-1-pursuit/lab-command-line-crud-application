const { nanoid } = require("nanoid");

const purchases = [];

const roundUp = num => Math.ceil(num)

const createPurchase = (name, amount) => {
    const id = nanoid();
    const donation = roundUp(amount);
    const purchase = { id, name, amount, donation };
    purchases.push(purchase);
    return purchase
    
}

const updatePurchase = (id, newName, newAmount) => {
    const purchase = purchases.find((p) => p.id === id);
    if (!purchase) return null;
    purchase.name = newName;
    purchase.amount = newAmount;
    purchase.donation = roundUp(newAmount);
    return purchase;
}

const deletePurchase = id => {
    const index = purchases.findIndex((p) => p.id === id);
    if (index === -1) return null;
    return purchases.splice(index, 1)[0];
}

const getPurchase = id => purchases.find((p) => p.id === id);

const getAllPurchases = () => purchases.map((p) => ({ id: p.id, name: p.name }));

module.exports = {
    createPurchase,
    updatePurchase,
    deletePurchase,
    getPurchase,
    getAllPurchases
}