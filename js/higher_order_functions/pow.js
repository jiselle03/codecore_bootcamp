// Write a function, pow, that takes in a base number and an exponent. 
// It must return the base number to the power of the exponent using recursion. 
// You are not allowed to use the ** operator nor the Math.pow function.

function pow(a, b) {
    let result = a;
    if (b === 1) {
        return result;
    } else {
        result *= pow(a, b - 1);
    }
    return result;
}

console.log(pow(10, 3)) // 1000
console.log(pow(2, 4)) // 16
console.log(pow(0, 100)) // 0
console.log(pow(1, 1000)) // 1