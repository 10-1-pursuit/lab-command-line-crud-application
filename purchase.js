const { faker } = require("@faker-js/faker")

function generateProduct() {


    const newProducts = {

        id: faker.datatype.uuid(),
        productName: `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${faker.commerce.product()}`,
        price: parseFloat(faker.commerce.price()),
        donation: parseFloat(faker.commerce.price()),

    }

    return newProducts;

}

generateProduct()


module.exports = {
    generateProduct
}