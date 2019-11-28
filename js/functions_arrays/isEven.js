// Write a function, isEven, that takes a number as argument. 
// It returns true if the number is even otherwise it returns false. 
// You are not allowed to use the modulus operator (%) nor the division operator (/).

function isEven(num) {
    if ((Math.floor(num * 0.5)) * 2 === num) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(5));
console.log(isEven(6));
console.log(isEven(123));
console.log(isEven(150));