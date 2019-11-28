// Recursive function to add all elements of an array;

const numbers = [1, 2, 3, 4, 5];

function sum(arr) {
    // Termination case: when arr.length is 0
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sum(arr.slice(1))
    }
};
console.log(sum(numbers));

// Recursive factorial

function factorial(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(4)); // 24

function iterativeFactorial(num) {
    let product = 1;
    for (let i = num; i >= 1; i--) {
        product = product * i;
    }
    return product
}

// Reverse string

function reverse(str) {
    if (str.length === 0) {
        return '';
    } else {
        return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
    }
}
console.log(reverse('Hello'));