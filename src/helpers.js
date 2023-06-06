//have helpful functions to reference to import 

//const fs = require("node:fs")


const {readFileSync, writeFileSync} = require("node:fs");


function readJSONFile(path,fileName) {
    const object = readFileSync(`${path}/${fileName}`, "utf-8")
    return object ? JSON.parse(object) : []
//readfilesyn logic
}

function writeJSONFile(path, fileName, data) {
    data = JSON.stringify(data)
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" })
    //writefilesyn to add something new to file
    //reassign data to stingified form to be written to json file
    //num += 1 : what happens on the right side comes first and reassign to left
}

module.exports = {
    readJSONFile,
    writeJSONFile
}