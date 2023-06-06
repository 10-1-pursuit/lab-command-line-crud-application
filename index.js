const {readJSONFile,writeJSONFile} = require("./src/helpers")
let purchases = readJSONFile("./data", "purchases.json")
const inform = console.log


function run(){
    const action = process.argv[2]
    const purchase = process.argv[3]
console.log("Welcome to the Coffee Shop!\n\n")
console.log("We're happy to serve our customers!")

switch(action){
    case "index":
        inform(action, purchases);
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
        inform("Error with Information Provided!")
    }
}
run()