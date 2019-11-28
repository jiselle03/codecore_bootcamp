// function declaration/statement
function add(a, b) {
    return a + b;
};

// function expression
const add = function(a, b) {
    return a + b;
}

// To invoke a function you append parentheses '()'
add(5, 5); // 10;

// If you are to reference this function without invoking you get the function definition
add; // [function: add]

// Functions are first-class citizens
// This means they have the same behavior as the rest of the base types in the language
// Functions behave like strings, numbers, arrays, objects
// This means you can pass the function definition into other functions as an argument

// Normal function that returns 'hi'
function sayHi() {
    return 'Hi';
};

// Accepts a parameter 'fn' which we expect to be a function definition
function fnAccepter(fn) {
    console.log(fn());
};

fnAccepter(sayHi); // Hi
fnAccepter(sayHi()); // Error; tries to invoke 'Hi'()

// fnReturner
function fnReturner() {
    return add;
};

fnReturner(); // [Function: add];
const adder = fnReturner();
adder(5, 5) // 10;