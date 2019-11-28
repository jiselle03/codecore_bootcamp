// Write a script rollingDice.js that takes two numbers as arguments. 
// The first one represents a quantity of dice and the second one represents a number of faces on the dice. 
// Simulate rolling the dice. Log the result of each dice, the sum and the average of all rolls.

const args = process.argv.slice(2);
const num1 = args[0];
const num2 = args[1];
let rolled = [];

for (let i = 1; i <= num1; i++) {
    //rolled = Math.ceil(Math.random() * num2);
    rolled.push(getRandomInteger(1, num2));
}

let sum = 0;
let average = 0;
for (let i = 0; i < rolled.length; i++) {
    sum += rolled[i];
    average = sum / rolled.length;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(`Rolled ${num1} dice: ${rolled}`);
console.log(`Total: ${sum}`);
console.log(`Average: ${average}`);