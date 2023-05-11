import { readFileSync, writeFileSync } from "node:fs"

const readingFile = readFileSync('main-file-data.json', 'utf-8')
const jsonParse = JSON.parse(readingFile)

function sort(object: Object){
   console.log(Object.keys(object).sort())
}

sort(jsonParse[0])