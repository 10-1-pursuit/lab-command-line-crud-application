const inform = console.log
const {readJSONFile}  = require("./helper")
const {nanoid} = require("nanoid")
//// CRUD Application
/*

    C reate
    R ead
    U pdate
    D estroy

*/



// READing (All of the data in a Collection)
function index (arrayOfCustomers){
    return arrayOfCustomers.map((eachCust) => eachCust.id + " " + eachCust.name).join("\n");
}

function create (cust, customer) {
    customer = [];
      const newCustomer = {
        name: cust,
        id: nanoid(),
        amount : 00,
        donation: 00
      };
      customer.push(newCustomer);
      console.log(customer );
  }
  create()



function show ( customer){
    const customers = readJSONFile("data", "customers.json")
    const custToFind = customers.find((cust) => cust.id === customer);
   if(custToFind){
    return custToFind.id + " " + custToFind.name + " " + custToFind.amount + custToFind.donation
   
}else{
    inform( "style not found");
}
}


function destroy(customers, customer) {
    const index = customers.findIndex((cust) => cust.id === customer);
    if (index > -1) {
      customers.splice(index, 1);
      inform(" successfully removed from collection");
      return customers;
    } else {
      inform("Cust not found. No action taken");
      return customers;
    }
}
  

function edit(customers, customer, updatedCusts) {
    const custIndex = customers.find((cust) => cust.id === customer);
    if (custIndex ) {
        custIndex.name = updatedCusts
        inform("successfully updated");
        return customers;
    } else {
        inform("Animal not found. No action taken");
        return customers;
    }
}


module.exports = { index, show, create, destroy, edit }