const { nanoid } = require('nanoid');
const chalk = require('chalk');

const inform = console.log;

function create(purchases, purchaseName, amount, donation) {
	const purchase = {
		id: nanoid(4),
		name: purchaseName,
		amount: amount,
		donation: donation,
	};
	purchases.push(purchase);
	return purchases;
}

function index(purchases) {
	return purchases
		.map((purchase) => purchase.id + ' ' + purchase.name)
		.join('\n');
}

function show(purchases, purchaseId) {
	const purchase = purchases.find((purchase) => purchase.id === purchaseId);
	return `${chalk.magenta('id')} ${purchase.id} ${chalk.yellow('name')} ${
		purchase.name
	} ${chalk.redBright('amount')} ${chalk.green(
		purchase.amount
	)} ${chalk.yellowBright('donation')} ${chalk.green(purchase.donation)}`;
}

module.exports = {
	create,
	index,
	show,
};
