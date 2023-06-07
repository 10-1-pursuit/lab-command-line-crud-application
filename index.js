const chalk = require('chalk');
const { readJSONFile, writeJSONFile } = require("./src/helper")
const { index, show, create, edit} = require("./src/controller");
const inform = console.log;



console.log(chalk.blue('Hello world!'));


function run(){

    inform("Welcome to Our App! \n\n")

    let customers = readJSONFile("data", "customers.json")
       // console.log("Here is the Data Read: ", customers)

    const action = process.argv[2]; // What "action" did the User type in?
    const customer = process.argv[3];

    let writeToFile = false;  // Have we done an Action that will "write" to Our JSON File


    switch (action){

        case "index":
            const custView = index(customers);
            inform(custView);
            break;
        
        case "show":
            const customersViewShow = show(customers, customer);
            inform(customersViewShow);
            break;

        case "create":
            updatedCusts = create(customers, customer);
            writeToFile = true;
            break;

        case "update":
            updatedCusts = edit(customers, customer, process.argv[4]);
            writeToFile = true;
            break;
        
        case "destroy":
            updatedCusts = destroy(customers, customer);
            writeToFile = true;
            break;
        
        case "edit":
        //     const score = customers.reduce((acc, curr) => acc + curr.points, 0);
        //     inform("Current score", score);
        //     break;

        default:
            inform("Hey, we can't do that Fam :(");
    }

    if (writeToFile) {
        writeJSONFile("data", "customers.json", customers);
        inform("Thank you. customers have been updated");
        }
}

run()

