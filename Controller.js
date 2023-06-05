const { faker } = require("@faker-js/faker");

const inspect = console.log
/* 

CRUD APPLICATION
  /* Create
     Read
     Update
     Destroy
  
  - A user can see an index of all their purchases, showing the `id` and the `name`.
- A user can see a show view with all the purchase details. This view should have additional styling (see below).
- A user can update a purchase.
- A user can delete a purchase.
- A user can see the total amount of money for donation.

id, name , 
*/ 



//- A user can see an index of all their purchases, showing the `id` and the `name`.

function index(arrayOfProducts){
    return  arrayOfProducts.map( (products) => products.id + " " + products.name).join("\n")
   };


//- A user can see a show view with all the purchase details.  !!This view should have additional styling (./assets/show-view.png)!

function show(arrayOfProducts, productId) {
    const products = arrayOfProducts.find((products) => products.id === productId); // could be this of -1?
    const view =  products.id + " " + products.name + " " + products.cost + " dollars" + products.donations + " dollars" ;
     return (view) ? view : "No Product Found"
  };



function updateProduct(productId) {
  let key  = process.argv[4];
  let update = process.argv[6] 
 const productUpdate = arrayOfProducts.findIndex( (products) => ( products.id === arrayOfProducts.id))
 (productUpdate) ? productUpdate.map((product) => ( product[key] = update)) : `Invalid "${key}" `


}



//-- A user can update a purchase.

function create(arrayOfProducts, productName) {
    const product = { name: productName };
  product.push(product);
    return product;
  };


function toDelete(arrayOfProducts, productId){
  return arrayOfProducts.findIndex(productId).splice(0,1)
};

  module.exports = { index, show , create }