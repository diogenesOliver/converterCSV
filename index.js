import { readFileSync, writeFileSync } from "node:fs"

const readingFile = readFileSync('main-file-data.json', 'utf-8')
const jsonParse = JSON.parse(readingFile)

function sort(object){
   Object.keys(object).sort().reduce((objectEntries, key) => {
      const sortedValue = typeof object[key] == 'object' ? sort(object[key]) : object[key]
      console.log(sortedValue)
   }, {})
}

sort(jsonParse[0])