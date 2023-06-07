const chalk = require("chalk");
const { createPurchase, listPurchases } = require("./helper.js");
const path = "./data";
const fileName = "data.json";
data = [];

// This function controls the formatting and displaying of id and name for each purchase
function indexPurchaseController(purchases) {
  console.log(chalk.green("--- Purchase List ---"));
  purchases.forEach(({ id, name }) => {
    // Start a forEach loop that iterates over purchases and use object destrucuring to grab id and name from each purchase
    console.log(chalk.green(`id: ${id}\tname: ${name}`)); // \t is used to create a tab indentation
  }); // This is the end of the forEach loop
}

// This function controls how the listPurchases is formatted and displayed
function listPurchaseController(purchases) {
  const purchaseData = listPurchases(purchases); // call listPurchases from the helper.js file and pass purchases array. This function returns a new array which has id, name, amount, donation of each purchase object
  console.log(chalk.green("--- Purchase List ---"));
  purchaseData.forEach((purchase) => {
    console.log(
      // (({ id, name, amount, donation}) => { // Iterate over each purchase object in purchaseData array using the forEach method and extract id, name, amount, donation using object destructuring
      chalk.green(
        `id: ${purchase.id}\tname: ${purchase.name}\tamount: ${
          purchase.amount
        }\tdonation: ${chalk.yellow(purchase.donation)}`
      )
    );
  });
}

// function createPurchaseController(purchases, name, amount) {
//     const purchase = createPurchase(name, amount);
//     purchases.push(purchase);
//     console.log(chalk.green('Purchase created successfully!'));

// }

// This function creates a new purchase object and add it to the end of purchases array along with displaying a console.log message
function createPurchaseController(purchases, name, amount, id) {
  const purchase = createPurchase(name, amount, id); // Make purchase = call createPurchase and use purchaseName, amount, id as an argument to the createPurchase function. This function returns a purchase object with the provided properties
  purchases.push(purchase); // Push the returned purchase object from createPurchase into purchases array at the end of the array.
  console.log(chalk.green("Purchase created successfully!"));
}

function updatePurchaseController(purchases, id, newName) {
  const purchase = purchases.findIndex((purchase) => purchase.id === id); // findIndex method searches through purchases for a purchase object matching id to compare to id argument. if a match is found the index of the matchin purchase goes into purchase variable. If theres no match, purchase will be assigned -1

  if (purchase === -1) {
    // Checks if purchase is equal to -1 which means there was no id was found in purchase array to compare ids
    console.log(chalk.red("purchase not found!"));
    return; // After consolelogging the error message the function returns, exiting the function execution
  }

  purchases[purchase].name = newName; // If the if statement is not triggered, use bracket notation to access the purchase object in purchases array and use dot notation to access name and assign it to newName
  console.log(chalk.bold.green("Purchase updated successfully"));
  // return purchases; // Return the updated purchases array
}

function removePurchaseController(purchases, id) {
  const index = purchases.findIndex((purchase) => purchase.id === id);
  if (index === -1) {
    purchases.splice(index, 1); // Splice can modify the array by adding or removing elements. The first argument index specifies the index at which the removal should start(representing the position of the purchase object in the array we wanna remove)
    console.log(chalk.green("Purchase removed successfully"));
  } else {
    console.log(chalk.red("Purchase not found!"));
  }
}

module.exports = {
  indexPurchaseController,
  listPurchaseController,
  createPurchaseController,
  updatePurchaseController,
  removePurchaseController,
};
