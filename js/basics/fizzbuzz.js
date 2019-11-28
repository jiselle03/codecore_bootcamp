// Write a script fizzBuzz.js that takes two numbers, then iterates through the numbers from 1 to 100 logging "fizz" 
// if the current number is divisible by the first number, "buzz" if the current number is divisible by the second number, 
// "fizzbuzz" if it's divisible by both, else print the current number.


const args = process.argv.slice(2);
const first = args[0];
const second = args[1];
let result = '';

for (let i = 1; i <= 100; i++) {
    if (i % first === 0 && i % second === 0) {
        result = 'fizzbuzz';
    } else if (i % first === 0) {
        result = 'fizz';
    } else if (i % second === 0) {
        result = 'buzz';
    } else {
        result = i;
    }
    console.log(result);
}