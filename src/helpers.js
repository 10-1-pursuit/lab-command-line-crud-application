const { readFileSync, writeFileSync } = require("node:fs")

const chalk = require('chalk');

const { nanoid } = require('nanoid');

const id =nanoid();

//const fs = require("node:fs")

//console.log(id)making sure nanoid is working
//console.log(chalk.blue(id))// nanoid working with chalk


//import {chalk} from 'chalk';

function readJSONFile(path, fileName){

    const object = readFileSync(`${path}/${fileName}`, "utf-8")
    return object ? JSON.parse(object) : []
}


function writeJSONFile(path, fileName, data){

    data = JSON.stringify(data)
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" })
}




module.exports = {
    readJSONFile, 
    writeJSONFile,
    chalk,
    id,
    nanoid
}