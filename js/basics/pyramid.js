// Write a script pyramid.js that takes a number as an argument then logs a pyramid of # with that many number of rows.

const args = process.argv.slice(2);
const num = args[0];

for (let i = 1; i <= num; i++) {
    console.log(' '.repeat(num - i) + ` ${num}`.repeat(i));
}



