
const chalk = require("chalk");
const { writeJSONFile, readJSONFile } = require("./src/helpers")
const { index, show, create, destroy, edit } = require("./src/controller")

const inform = console.log



function run() {

    let guest = readJSONFile("data", "customers.json")

    const action = process.argv[2];
    const customer = process.argv[3];

    switch (action) {

        case "index":
            const guestView = index(customer);
            inform(guestView);
            break;

        case "show":
            const guestViewShow = show(guest, customer);
            inform(guestViewShow);
            break;

        case "create":
            updatedGuest = create(guest, customer);
            writeToFile = true
            break;

        case "update":
            updatedGuest = edit(guest, customer, process.argv[4]);
            writeToFile = true;
            break;

        case "destroy":
            updatedGuest = destroy(guest, customer);
            writeToFile = true;
            break;

        case "score":
            const score = guest.reduce((acc, curr) => acc + curr.points, 0);
            inform("current score", score)
            break;

        default:
            inform("Hey There We Found A Error");
    }

    if (writeToFile) {
        writeJSONFile("data", "customers.json", customer);
        inform("Thank you. customers have been updated");
    }
}

run()