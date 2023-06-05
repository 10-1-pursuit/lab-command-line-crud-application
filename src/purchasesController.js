const inform = console.log;
const { nanoid } = require("nanoid");
const chalk = require("chalk");
const inventory = require("../data/inventory.json");

function create(customerPurchases, purchaseItem) {
  // customerPurchases = customerOrder.json array / purchaseItem is inventory.name

  const newPurchase = {
    id: `${nanoid(4)}`,
    name: purchaseItem,
    cost: inventory[purchaseItem].toFixed(2),
    donation: Number(
      (Math.ceil(inventory[purchaseItem]) - inventory[purchaseItem]).toFixed(2)
    ),
  };
  customerPurchases.push(newPurchase);
  return customerPurchases;
}

function index(customerPurchases) {
  return customerPurchases.map(
    (eachPurchase) => eachPurchase.id + " " + eachPurchase.name
  );
}

function view(customerPurchases, purchaseItem) {
  let singlePurchaseInfo = customerPurchases.filter(
    (item) => item.name === purchaseItem)

    return singlePurchaseInfo
}


function update(customerPurchases, purchaseId, updatedPurchase) {
  const index = customerPurchases.findIndex(
    (purchase) => purchase.id === purchaseId
  );
  if (index > -1) {
    customerPurchases[index].id = purchaseId;
    customerPurchases[index].name = updatedPurchase;
    customerPurchases[index].cost = inventory[updatedPurchase];
    customerPurchases[index].donation = Number(
      (
        Math.ceil(inventory[updatedPurchase]) - inventory[updatedPurchase]
      ).toFixed(2)
    );

    inform("Purchase successfully updated");
    return customerPurchases;
  } else {
    inform("Purchase not found. No action taken");
    return customerPurchases;
  }
}

function remove(customerPurchases, purchaseId) {
  const index = customerPurchases.findIndex(
    (purchase) => purchase.id === purchaseId
  );
  if (index) {
    customerPurchases.splice(index, 1);
    inform("Purchase successfully removed from your order!");
    return customerPurchases;
  } else {
    inform("Purchase not found. No action taken");
    return customerPurchases;
  }
}

function total(customerPurchases) {
  let filteredDonations = customerPurchases.map((amounts) => amounts.donation);
  let donationAmount = filteredDonations.reduce((prev, curr) => prev + curr);
  return donationAmount;
}

module.exports = { create, index, view, update, remove, total };
