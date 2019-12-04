const fs = require('fs');

const fileName = process.argv[2]; // will try to read dirList.txt on node

fs.readFile(fileName, (err, data) => {
    const fileContents = data.toString();
    const lineArray = fileContents.split('\n');
    lineArray.forEach((line, index) => {
        console.log(`${index + 1} | ${line}`);
    });
});