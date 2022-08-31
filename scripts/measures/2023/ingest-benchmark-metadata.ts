import fs from 'fs';
import parse from 'csv-parse/lib/sync';
import path from 'path';

import mergeBenchmarkMetadata from '../lib/merge-benchmark-metadata';

const performanceYear = process.argv[2];

const measuresPath = `../../../measures/${performanceYear}/measures-data.json`;
const benchmarkMetaDataPath = `../../../util/measures/${performanceYear}/benchmark-metadata.csv`

const measuresJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, measuresPath), 'utf8')
);
const benchmarkMetaData = parse(
    fs.readFileSync(path.join(__dirname, benchmarkMetaDataPath), 'utf8'),
    { columns: true, skip_empty_lines: true }
);

mergeBenchmarkMetadata(measuresJson, benchmarkMetaData, true);

fs.writeFile(path.join(__dirname, measuresPath), JSON.stringify(measuresJson, null, 2), function writeJSON(err) {
    if (err) return console.log(err);
});