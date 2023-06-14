const {readJSONFile, writeJSONFile} = require("./src/helpers.js");

const {index, show, create, destroy, update} = require("./src/coffeeController.js");

const {createCoffe} = require("./src/coffeeCreator.js");

const inform = console.log;

function run(){
    let coffee = readJSONFile("./data", "coffee.json")
    let updatedCoffee = [];
    let coffeeCreated = [];
    const action = process.argv[2];
    const coffeeCup = process.argv[3];

switch (action){
    case "index":
        const coffeeView = index(coffee)
        inform(coffeeView);
        break;
    case "show":
        const coffeeViewShow = show(coffee, coffeeCup)
        inform(coffeeViewShow);
        break;
    case "create":
        coffeeCreated = create(coffee, coffeeCup)
        writeJSONFile("./data", "coffee.json", coffee);
        break;
    case "update":
        updatedCoffee = edit(coffee, coffeeCup, process.argv[4])
        writeJSONFile("./data", "coffee.json", coffee);
        break;
    case "destroy":
        updatedcoffee = destroy(coffee, coffeeCup)
        writeJSONFile("./data", "coffee.json", coffee);
        break;
    default:
            inform("Does it work?")
    }
}

run()