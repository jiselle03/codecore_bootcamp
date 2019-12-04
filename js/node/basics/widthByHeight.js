const fs = require('fs');

const width = process.argv[2] || 2;
const height = process.argv[3] || 2;

let output = '';

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        output += '* ';
    }
    output += '\n';
}

const fileName = `${width}by${height}.txt`

fs.writeFile(fileName, output, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Wrote ${fileName} to disk`);
})