// Write a script largestOfThree.js that takes three numbers as arguments then logs the 
// largest of the three numbers as "The largest number is X".

// Example usage:

// $ node largestOfThree.js 5 789 234
// The largest number is 789

// let largestOfThree = function(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(`The largest number is ${num1}.`);
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(`The largest number is ${num2}.`);
//     } else {
//         console.log(`The largest number is ${num3}.`);
//     }
// }


const args = process.argv.slice(2);
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);
const num3 = parseFloat(args[2]);
let x;

if (num1 > num2 && num1 > num3) {
    x = num1;
} else if (num2 > num1 && num2 > num3) {
    x = num2;
} else if (num3 > num1 && num3 > num2) {
    x = num3;
} else {
    console.log('Enter 3 numbers.');
}
console.log(`The largest number is ${x}.`)



// if (num1 > num2) {
//     x = num1;
// } else if (num2 > num3) {
//     x = num2;
// } else if (num3 > num1) {
//     x = num3;
// } else {
//     console.log('Enter 3 numbers.')
// }
// console.log(`The largest number is ${x}.`)