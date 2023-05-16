import { readFileSync, writeFileSync, appendFileSync } from "node:fs"

const readingFile = readFileSync('main-file-data.json', 'utf-8')
const jsonParse = JSON.parse(readingFile)

function sortObject(object){
   return Object.keys(object).sort()
}

writeFileSync('data/key-sorted.json', "[")
jsonParse.forEach(element => {
   const toString = JSON.stringify(element)
   appendFileSync('data/key-sorted.json', toString + ",")
});
appendFileSync('data/key-sorted.json', "]")