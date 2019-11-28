// Benchmarking

// Recursive factorial

function factorial(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function iterativeFactorial(num) {
    let product = 1;
    for (let i = num; i >= 1; i--) {
        product = product * i;
    }
    return product;
}

console.time('recursion');
factorial(5000); // recursive
console.timeEnd('recursion');

console.time('iteration');
iterativeFactorial(5000); 
console.timeEnd('iteration');