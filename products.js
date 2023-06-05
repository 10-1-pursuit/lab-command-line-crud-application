
const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");



/*
You will build an application that lets users round up the change for each purchase and set it as a donation.
- A user can create a purchase. The purchased object will have the following:
  - `id` - generated by nanoid
  - `name` - the name of the purchase
  - `amount` - the purchase amount
  - `donation` - the donation amount, rounded to two decimal places
*/



//const fs = require("node:fs")
//const path = "./"

function createPurchase() {

    const purchase = {

        name: faker.person.fullName(),
        id: nanoid(8),
        cost: faker.datatype.boolean(),
        donation: faker.commerce.price({ min: 2, max: 20, dec: 2 })

    };
    return purchase
};

function purchaseFactory(num) {
    const multiPurchase = [];

    for (let i = 0; i < num; i++) {
        multiPurchase.push(createPurchase())
    };
    return multiPurchase
}
//console.log(createPurchase())
//console.log(purchaseFactory(process.argv[2]))


module.exports = {

    createPurchase,
    purchaseFactory
};