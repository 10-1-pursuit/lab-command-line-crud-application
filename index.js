const { products } =require("./products")
const { nanoid } = require("./node_modules/nanoid/")
//const { chalk } = require("./chalk")
const { createPurchase, purchaseFactory } = require('./products')
const { index, show, create, toDelete } = require("./Controller")
const { readJSONFile , writeJSONFile } = require("./helpers")
const inform = console.log

const action = process.argv[2]
const target = process.argv[3]


inform("Xavier's Cruddy Thing")


function run(){

    let productsData = readJSONFile("./data", "products.JSON")
    productsData.push(createPurchase())
    writeJSONFile("./data", "products.json", productsData)
  

        switch(action){
            case "index":
                const productView = index(productsData)
                inform(productView)
            break;

            case "show":
                const productShow = show(productsData, target)    
            break;

            case "delete":
                const productDelete = toDelete(array, target )

            case "create":
                const createDelete = toDelete(array, target )


 }

}

run()