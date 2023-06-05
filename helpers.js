const fs = require("fs")


function readJSONFile(path, fileName) {
    //  console.log("This is the con:", `${path}/${fileName}`, "this is the path:", path , "this is the fileN:", fileName)
    const object = fs.readFileSync(`${path}/${fileName}`, { encoding: "utf-8" })
    return object ? JSON.parse(object) : [];

}

function writeJSONFile(path, fileName, data) {

    data = JSON.stringify(data, null, 4)
    return fs.writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" })
}


module.exports = {
    readJSONFile,
    writeJSONFile

}