const { nanoid } = require('nanoid');

const inform = console.log
const chalk = require('chalk');






function index(arrayOfProducts){

    return arrayOfProducts.map((eachProduct)=> eachProduct.id+" "+ eachProduct.name).join("/n");

}


function show(arrayOfProducts,productId){
    const productToFind= arrayOfProducts.find((product)=> product.id === productId);

    return chalk.blue(productToFind.id) + " " + chalk.blue(productToFind.name) + " " + chalk.blue(productToFind.amount + " " +chalk.blue(productToFind.donation));

}

function create (products, productName,productAmount,productDonation) {
    const newProduct = {
        id: nanoid(4),
      name: productName,
      amount: productAmount,
      donation: productDonation.toFixed(2),
      
      
    };
    products.push(newProduct);
    return products;
}


function destroy(products, productId) {
    const index = products.findIndex((product) => product.id === productId);
    if (index > -1) {
      products.splice(index, 1);
      inform("Product successfully removed from collection");
      return products;
    } else {
      inform("Product not found. No action taken");
      return products;
    }
}
function edit(products, productId, updatedProduct,updatedAmount,updatedDonation) {
    const index = products.findIndex((product) => product.id === productId);
    if (index > -1) {
        products[index].id = productId;
        products[index].name = updatedProduct;
        products[index].amount = updatedAmount
        products[index].donation = updatedDonation;
        inform("Product successfully updated");
        return products;
    } else {
        inform("Product not found. No action taken");
        return products;
    }
}

module.exports = { index, show, create, destroy, edit }