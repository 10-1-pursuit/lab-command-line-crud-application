const chalk = require("chalk")
const { getPurchase, getAllPurchases } = require("./purchase")

const showPurchase = id => {
    const purchase = getPurchase(id);
    if (!purchase) return chalk.redBright.bold("Purchase not found!");
    return `
    ${chalk.green.bold('Purchase Details')}
    ${chalk.green.bold('ID:')} ${purchase.id}
    ${chalk.green.bold('Name:')} ${purchase.name}
    ${chalk.green.bold('Amount:')} $${purchase.amount}
    ${chalk.green.bold('Donation:')} $${purchase.donation}`;
}

const showAllPurchases = () => {
    const purchases = getAllPurchases();
    if (purchases.length === 0) return chalk.yellowBright.bold("No purchases found!");
    const columns = `${chalk.bold("ID")} | ${chalk.bold("Name")}`;
    const purchaseRows = purchases.map((p) => `${p.id} | ${p.name}`).join('\n');
    return `
    ${chalk.bold('All Purchases\n')}
    ${columns}
    ${purchaseRows}`
}

module.exports = {
    showPurchase,
    showAllPurchases
}