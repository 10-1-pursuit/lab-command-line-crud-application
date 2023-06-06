//console.log("hit or miss")

const { readJSONFile, writeJSONFile } = require("./src/helpers")
const { index, show, create, edit} = require("./src/animalsController");
const inform = console.log;
//inform("🎊")

function run() {
    inform("Welcome to our  App 🦁🐱\n\n");

    let '' = readJSONFile("data", "animals.json");
    console.log("the animals from indexJS", animals)

    const action = process.argv[2]; //action user typed in
    const (putSomething) = process.argv[3]; //animal
    let writeToFile = false;

    switch (action) {
        case "index":
            //animals
            const animalsView = index()
            inform(View);
            break;
        case "show":
            const ViewShow = show()
            inform(animalsViewShow);
            break;
        case "update":
            updatedAnimals = edit(animals, animal, process.argv[4]);
             writeToFile = true;
             break;
        case "create":
            updatedAnimals = create(animals, animal);
            writeToFile = true;
            break;
        case "destroy":
            updatedAnimals = destroy(animals, animal);
             writeToFile = true;
            break;

        default: 
        inform("Hey, we can't do that 🫠");
        
    }
//console.log("\nIGNORE THIS\nall the turtles 🐢")

}
run()