const {nanoid} = require("nanoid");
const { readJSONFile, writeJSONFile } = require("./helpers");

function createCoffee(){
    const coffeeMaker = {
    id: nanoid(4),
    name: process.argv[3],
    amount: 2.50,
    donation: 0.50
    }
    return coffeeMaker
}

module.exports = {createCoffee}