// const fs = require("node:fs") // to be able to read and write

const {readFileSync, writeFileSync} = require("node:fs")

function readJSONFile(path,fileName){

    // readFileSync - anticipating that we're going to get back some type of object or collection
    const object = readFileSync(`${path}/${fileName}`, "utf-8") //utf-8 reads the binary that we can't read //JSON.parse will decode it
    return object ? JSON.parse(object): []

}

function writeJSONFile(path, fileName, data){

    //writeFileSync - when writing we want to add something new into the file that's there but we have to stringify first
    // add the first parameter of readJSONFile as the first parameter, data as the second, and {encoding :"utf-8"} as the third
    data = JSON.stringify(data)
     return writeFileSync(`${path}/${fileName}`, data, {encoding: "utf-8"}) 
    
}

module.exports ={
    readJSONFile,
    writeJSONFile,
}