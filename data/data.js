const { readFileSync, writeFileSync } = require("node:fs");

const path = "./data";
const fileName = "data.json";

function readJSONFile(path, fileName) {
    const object = readFileSync(`${path}/${fileName}`, "utf-8"); // Used to read hte file and store its content into the object variable 
    return object ? JSON.parse(object) : []; // If object excists (truthy), it is parsed as JSON using JSON.parse and returned, otherwise, an empty array is returned
}

function writeJSONFile(path, fileName, data) {
    data = JSON.stringify(data, null, 2); // data is converted to a JSON string using JSON.stringify with optional parameters for indentation( null, 2 )
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" }); // It then writes the JSON string to the specified file path and name with the encoding utf-9 to read it
} // null is a placeholder and is used to indication no special transformation or filtering is required, the 2 indents the JSON string with two spaces

module.exports = {
    readJSONFile,
    writeJSONFile
}