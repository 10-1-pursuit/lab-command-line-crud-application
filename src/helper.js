const { nanoid } = require("nanoid");
const { readJSONFile, writeJSONFile } = require("../data/data");

let data = readJSONFile("./data", "data.json");

// This function takes purchase details (name, amount) generate a unique ID and round the donation amount to two decimal places, then return the object created
// function createPurchase(name, amount) {
//     const id = nanoid();
//     const roundUpDonation = Math.ceil(amount);
//     const donation = (roundUpDonation - amount).toFixed(2);

// This function compared to the previous one gives more flexibility with a manually specified ID
function createPurchase(name, amount, id) {
  const purchaseId = id || nanoid();
  const roundUpDonation = Math.ceil(amount);
  const donation = (roundUpDonation - amount).toFixed(2);

  return {
    id,
    name,
    amount,
    donation,
  };
}

//
function listPurchases(purchases) {
  return purchases.map(({ id, name, amount, donation }) => ({
    id,
    name,
    amount,
    donation,
  }));
} // This function takes purchases array and map executes a callback function that destructures id,name,amount,donation from purchases
// The new object that was created is added to the resulting array. Basically this function takes an array of purchase objects and creates a new array of objects containing id, name, amount, and donation properties in each object

function parseParams(params) {
  const parsedParams = {}; // Initiatlize empty object parsedParams that will store parsed parameters.

  params.forEach((param) => {
    // Iterates over each element in the array
    const [key, value] = param.split("="); // Splits the param string into two parts using = as a delimiter, basically saying key=value i.e(name=SandyCheeks) will return (name, SandyCheeks), and also uses destructuring with key, value. This means first element of the array is assigned key, and the second element is assigned to the value variable
    parsedParams[key] = value; // Assigns value to the parseParams object using key as property name. This creates a new property in parsedPArams object, where key becomes property naem and the value becomes its corresponding value
  }); // This process is repeated for each param in the param array, basically adding all the parsed parameters to the parsedParams object
  return parsedParams; // returns the parsed Params object which contains all the parsed parameters as key-value pairs.
}

module.exports = {
  createPurchase,
  listPurchases,
  parseParams,
};
