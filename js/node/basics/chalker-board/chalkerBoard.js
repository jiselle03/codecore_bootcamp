const chalk = require('chalk');

const color = process.argv[2];
const width = process.argv[3];
const height = process.argv[4];

for (let j = 1; j <= height; j++) {
    let line = '';
    if (j % 2 !== 0) {
        for (let i = 1; i <= width; i++) {
            if (i % 2 !== 0) {
                line += chalk.bgKeyword(color)(' ');
            } else {
                line += ' ';
            }
        }

    } else {
        for (let k = 1; k <= width; k++) {
            if (k % 2 === 0) {
                line += chalk.bgKeyword(color)(' ');
            } else {
                line += ' ';
            }
        }
    }
    console.log(line)
};
