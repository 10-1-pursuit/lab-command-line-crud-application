const { nanoid } = require("nanoid");
const { readJSONFile, writeJSONFile } = require("./helpers");
const {createCoffee} = require("./coffeeCreator");


const inform = console.log

function index(coffee){
   // return coffee.map((eachCup)=> console.log(eachCup));
    return coffee.map((eachCup)=> eachCup.id, eachCup.name, eachCup.amount, eachCup.donation).join("\n")
 }
 
 
function show(coffee, coffeeId){
    const coffeeToFind = coffee.find((coffeeCup) => coffeeCup.id === coffeeId);
    return coffeeToFind.id, coffeeToFind.name, coffeeToFind.amount, coffeeToFind.donation;
 } 

function create(coffee) { 
    coffeeCreated = coffee.push(createCoffee());
    return coffeeCreated;
  }

function destroy(coffee, coffeeId){
    const index = coffee.findIndex((coffee) => coffee.id === coffeeId);
    if (index > -1) {
        coffee.splice(index, 1);
        inform("Coffee has been removed from cart!");
        return coffee;
    }else {
        inform("Coffee has not been found, no action performed.");
    }
  }

function update(coffee, coffeeId, updatedCoffee){
    const index = coffee.findIndex((coffeeCup) => coffeeCup.id === coffeeId);
    if (index > -1){
        coffee[index].id = coffeeId;
        coffee[index].name = updatedCoffee;
        inform("Coffee has been updated successfully!");
        return coffee;
    } else {
        inform("Coffee not found! No action needed or performed.");
    }
  }


  module.exports = {index, show, create, destroy, update}