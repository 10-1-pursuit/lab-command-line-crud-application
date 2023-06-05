const { nanoid } = require("nanoid");
const fs = require("fs")
const path = "../data"
const fileName = "purchases.json"

const roundUp = num => Math.ceil(num)

const readJSONFile = (path, fileName) => {
    const data = fs.readFileSync( `${path}/${fileName}`, "utf-8" )
    return data ? JSON.parse(data) : []
}

const writeJSONFile = (path, fileName, data) => {
    data = JSON.stringify(data)
    fs.writeFileSync(`${path}/${fileName}`, data, {encoding: "utf-8"})
}

const createPurchase = (name, amount) => {
    const id = nanoid();
    const donation = (roundUp(amount) - amount);
    const purchase = { id, name, amount, donation };
    const purchases = getAllPurchases();
    purchases.push(purchase);
    writeJSONFile("../data", "purchases.json", purchases);
    return purchase;
    
}

const updatePurchase = (id, newName, newAmount) => {
    const purchases = getAllPurchases();
    const index = purchases.findIndex((p) => p.id === id);
    if (index === -1) return null;
    const updatedPurchase = {...purchases[index], name: newName, amount: newAmount, donation: (roundUp(newAmount) - newAmount).toFixed(2)};
    purchases[index] = updatedPurchase;
    return updatedPurchase;
}

const deletePurchase = id => {
    const purchases = getAllPurchases();
    const index = purchases.findIndex((p) => p.id === id);
    if (index === -1) return null;
    const deletedPurchase = purchases[index];
    purchases.splice(index, 1);
    writeJSONFile("../data", "purchases.json", purchases);
    return deletedPurchase
}

const getPurchase = id => {
    const purchases = readJSONFile("../data", "purchases.json");
    return purchases.find((p) => p.id === id)
};

const getAllPurchases = () => readJSONFile("../data", "purchases.json");

module.exports = {
    createPurchase,
    updatePurchase,
    deletePurchase,
    getPurchase,
    getAllPurchases,
    readJSONFile,
    writeJSONFile
}