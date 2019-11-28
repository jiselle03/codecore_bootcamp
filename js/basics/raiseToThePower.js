// Write a script raiseToThePower.js that takes two numbers as arguments, 
// then calculate the first number raised to the power of the second number and log it to the screen.

// Example usage:

// $ node raiseToThePower.js 4 2
// 16

// $ node raiseToThePower.js 3 4
// 81

const args = process.argv.slice(2);
const num1 = args[0];
const num2 = args[1];

let x = num1 ** num2;
// let x = Math.pow(a, b);
console.log(x);