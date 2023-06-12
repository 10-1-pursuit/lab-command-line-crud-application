const { writeJSONFile, readJSONFile } = require('./src/helpers');
const {
	create,
	destroy,
	edit,
	index,
	show,
} = require('./src/purchasesController');

const chalk = require('chalk');

const inform = console.log;

function run() {
	const action = process.argv[2];
	const purchase = process.argv[3];
	const amount = process.argv[4];
	const donation = process.argv[5];
	let purchases = readJSONFile('./data', 'purchases.json');
	let writeToFile = false;
	let updatedPurchases = [];

	inform('Welcome to our Supreme Bread Bakery 🍞🥖🥐🥨🥯\n\n');

	switch (action) {
		case 'index':
			const purchasesView = index(purchases);
			inform(`${purchasesView}\n`);
			break;
		case 'create':
			updatedPurchases = create(purchases, purchase, amount, donation);
			writeToFile = true;
			break;
		case 'show':
			const purchaseView = show(purchases, purchase);
			inform(purchaseView);
			break;
		case 'update':
			updatedPurchases = edit(
				purchases,
				purchase,
				process.argv[4],
				process.argv[5],
				process.argv[6]
			);
			writeToFile = true;
			break;
		case 'destroy':
			updatedPurchases = destroy(purchases, purchase);
			writeToFile = true;
			break;
		case 'total':
			const total = purchases.reduce(
				(acc, curr) => acc + Number(curr.donation),
				0
			);
			inform(
				`${chalk.yellow('Total donation amount:')} ${chalk.green(
					'$'
				)}${chalk.green(total.toFixed(2))}`
			);
			break;
		default:
			inform('There was an error.');
	}
	if (writeToFile) {
		writeJSONFile('data', 'purchases.json', updatedPurchases);
	}
}

run();
