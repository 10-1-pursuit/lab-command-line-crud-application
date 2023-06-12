const { nanoid } = require('nanoid');
const chalk = require('chalk');

const inform = console.log;

function create(purchases, purchaseName, amount, donation) {
	const purchase = {
		id: nanoid(4),
		name: purchaseName,
		amount: Number(amount),
		donation: Number(donation),
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

function edit(
	purchases,
	purchaseId,
	updatedPurchaseName,
	updatedPurchaseAmount,
	updatedPurchaseDonation
) {
	const index = purchases.findIndex((purchase) => purchase.id === purchaseId);

	if (index > -1) {
		purchases[index].id = purchaseId;
		purchases[index].name = updatedPurchaseName
			? updatedPurchaseName
			: purchases[index].name;
		purchases[index].amount = updatedPurchaseAmount
			? Number(updatedPurchaseAmount)
			: purchases[index].amount;
		purchases[index].donation = updatedPurchaseDonation
			? Number(updatedPurchaseDonation)
			: purchases[index].donation;
		inform('Purchase successfully updated.');
		return purchases;
	} else {
		inform('Purchase not found. No action taken.');
		return purchases;
	}
}

function destroy(purchases, purchaseId) {
	const index = purchases.findIndex((purchase) => purchase.id === purchaseId);

	if (index > -1) {
		purchases.splice(index, 1);
		inform('Purchase successfully removed from collection.');
		return purchases;
	} else {
		inform('Purchase not found. No action taken.');
		return purchases;
	}
}

module.exports = {
	create,
	destroy,
	edit,
	index,
	show,
};
