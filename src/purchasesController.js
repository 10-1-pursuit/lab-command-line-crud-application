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

module.exports = {
	create,
	index,
};
