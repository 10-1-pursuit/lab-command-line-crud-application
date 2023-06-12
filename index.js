// Create Read Update Destroy

const { writeJSONFile, readJSONFile } = require("./src/helpers");

const {
    create,
    index,
    view,
    update,
    remove,
    total
} = require("./src/controllers");

const inform = console.log;

function run() {

    const action = process.argv[2];
    const purchase = process.argv[3];

    let purchases = readJSONFile("data", "purchases.json");
    let writeToFile = false;
    let updatedpurchases = [];

    switch (action) {
        case "index":
            inform(action, purchases);
            break;
        case "create":
            updatedpurchases = create(action, purchase);
            writeToFile = true;
            break;
        case "view":
            inform(action, purchase);
            break;
        case "update":
            inform(action, purchase);
            break;
        case "delete":
            inform(action, purchase);
            break;
        case "total":
            inform(action);
            break;
        default:
            inform("There is an error!")
    }
    if (writeToFile) {
        writeJSONFile("data", "purchases.json", updatedpurchases);
    }
}
run()