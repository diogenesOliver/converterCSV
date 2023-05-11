import { readFileSync, writeFileSync } from 'node:fs'

import { Parser } from "@json2csv/plainjs"
import { flatten } from "@json2csv/transforms"

function converterToCSV() {
    const readingFileJSONSorted = readFileSync('data/key-sorted.json', 'utf-8')
    const jsonParse = JSON.parse(readingFileJSONSorted)

    try {

        const opts = {
            transforms: [
                flatten({ separator: '_' })
            ]
        }
        const parser = new Parser(opts)
        const csv = parser.parse(jsonParse)

        writeFileSync('csv/converted-to-csv.csv', csv)
    } catch (err) {
        throw err
    }
}

converterToCSV()