const fs = require('fs');

const fileName = process.argv[2];
const newFile = process.argv[3];

fs.readFile(fileName, (err, data) => {
    const fileContents = data.toString();
    const lineArray = fileContents.split('\n');
    let output = '';

    lineArray.forEach((line) => {
        if (line[line.length - 1] !== 's') {
            output += line + '\n';
        }
        return output;
    });

    fs.writeFile(newFile, output, function(err) {
        if (err) {
            console.log('Could not write to file');
            console.log(err);
            return;
        }
        console.log('File saved!');
    })

});


