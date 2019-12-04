const readline = require('readline');
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let width = 2;
let height = 2;
let fileName = '2by2.txt'

rl.question("Enter the fileName \n>", f => {
    fileName = `${f}.txt`
    rl.question("Enter Width \n> ", w => {
        width = w;
        rl.question("Enter Height \n> ", h => {
            height = h;

            rl.close();
        });
    });
});

function createFileWithStars(width, height, fileName) {
    let output = "";
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            output += "* ";
        }
        output += "\n";
    }

    fs.writeFile(fileName, output, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Wrote "${fileName}" to disk`);
    });
};