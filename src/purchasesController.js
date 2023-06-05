const inform = console.log
const {nanoid} = require("nanoid")
const {chalk} = require("chalk")
const inventory = require("../data/inventory.json")



function create(customerPurchases, purchaseItem){ // customerPurchases = customerOrder.json array / purchaseItem is inventory.name 
  
    const newPurchase = {
        id: `${nanoid(4)}`,
        name: purchaseItem,
        cost: inventory[purchaseItem].toFixed(2),
        donation: Number(((Math.ceil(inventory[purchaseItem])) - inventory[purchaseItem]).toFixed(2))
    }
        customerPurchases.push(newPurchase)
        return customerPurchases
}


function index(customerPurchases){
    return customerPurchases.map((eachPurchase) => eachPurchase.id + " " + eachPurchase.name)
}

function view(customerPurchases, purchaseItem){
   let singlePurchaseInfo = create(customerPurchases, purchaseItem)
  let greenKeys = chalk.green(Object.keys(singlePurchaseInfo))
  let mixedKeys = chalk.yellow(greenKeys.donation)
return mixedKeys
}

function update(customerPurchases, purchaseItem, updatedPurchase){

        const index = customerPurchases.findIndex((purchase) => purchase.name === purchaseItem);
        if (index > -1) {
            customerPurchases[index].id = customerPurchases[id];
            customerPurchases[index].name = updatedPurchase;
            customerPurchases[index].cost = purchases[updatedPurchase];
            customerPurchases[index].donation = purchases[updatedPurchase];

            inform("Purchase successfully updated");
            return customerPurchases;
        } else {
            inform("Purchase not found. No action taken");
            return customerPurchases;
        }
    }

function remove(customerPurchases, purchaseId){
    const index = customerPurchases.findIndex((purchase) => purchase.id === purchaseId);
    if (index > -1) {
      customerPurchases.splice(index, 1);
      inform("Purchase successfully removed from collection");
      return customerPurchases;
    } else {
      inform("Purchase not found. No action taken");
      return customerPurchases;
    }
}


function total(customerPurchase){
 return customerPurchase.reduce((prev, curr)=>prev.donation + curr.donation)

}


module.exports = {create, index, view, update, remove, total}