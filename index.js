const { writeJSONFile, readJSONFile } = require('./src/helpers');
const { create, index, show } = require('./src/purchasesController');

const inform = console.log;

function run() {
	const action = process.argv[2];
	const purchase = process.argv[3];
	const amount = Number(process.argv[4]);
	const donation = Number(process.argv[5]);
	let purchases = readJSONFile('./data', 'purchases.json');
	let writeToFile = false;
	let updatedPurchases = [];

	inform('Welcome to our Supreme Bread Bakery 🍞🥖🥐🥨🥯\n\n');

	switch (action) {
		case 'index':
			const purchasesView = index(purchases);
			inform(purchasesView);
			break;
		case 'create':
			updatedPurchases = create(purchases, purchase, amount, donation);
			writeToFile = true;
			break;
		case 'show':
			const purchaseView = show(purchases, purchase);
			inform(purchaseView);
			break;
		default:
			inform('There was an error.');
	}
	if (writeToFile) {
		writeJSONFile('data', 'purchases.json', updatedPurchases);
	}
}

run();
