const inform = console.log
const { readJSONFile } = require("./helpers");

function create (style, purchases) {
  purchases = [];
    const newPurchases = {
      name: style,
      id: 'nanoid(4)',
      amount: '',
      donations: 00
    };
purchases.push(newPurchases);
    return purchases;
}


function index(arrayOfStyles) {
    return arrayOfStyles.map((eachStyle) => eachStyle.id + " " + eachStyle.name).join("\n");
}


function show(styleId){
    const styles = readJSONFile("data", "styles.json")
    const styleToFind = styles.find((style) => style.id === styleId);
    
    if (styleToFind) {
    return styleToFind.id + " " + styleToFind.name + " " + styleToFind.amount + donations;
} else {
    return "style not found";
  }
}


function destroy(styles, styleId) {
    const index = styles.findIndex((style) => style.id === styleId);
    if (index > -1) {
      styles.splice(index, 1);
      inform("style successfully removed from collection");
      //return styles;
    } else {
      inform("style not found. No action taken");
      //return styles;
    }
}
  

function edit(styles, styleId, updatedName) {
    const styleToEdit = styles.find((style) => style.id === styleId);
    if (styleToEdit) {
        styleToEdit.name = updatedName
        inform("successfully updated");
        //return ;
    } else {
        inform("Style not found. No action taken");
        //return ;
    }
}



module.exports = {index, show, create, edit, destroy}