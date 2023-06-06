const {readJSONFile, writeJSONFile}= require("./src/helpers")

const{index, show, create, destroy, edit}= require("./src/appController")

const inform= console.log

function run(){
    inform("Welcome to Shakas Product App!")

    let products =readJSONFile("data","data.json")
    console.log("Here is the Data Read", products)

    const action= process.argv[2];
    const product = process.argv[3];

    let writeToFile = false;

    switch (action){
        
        case "index":
            const productsView = index(products);
            inform(productsView);
            break;

        case "show":
            const productViewShow = show(products,product);
            inform(productViewShow);
            break;

        case "create":
            updatedProducts= create(products, product);
            writeToFile = true;
            break;

        case "update":
            updatedProducts= edit(products, product, process.argv[4]);
            writeToFile = true;
            break;

         case "destroy":
            updatedAProducts = destroy(productss, product);
            writeToFile = true;
            break;
            
         case "score":
            const score = products.reduce((acc, curr) => acc + curr.points, 0);
            inform("Current score", score);
            break;
    
        default:
                inform("Hey, we can't do that Fam :(");
        }
    



    }

    
run()