// Function declaration
function bark(str) {
    return `barks ${str}`;
};

// arrow function
const bar = (str) => {
    return `barks ${str}`;
};

// If an arrow function only has one expression int he body, we can omit `{}`
// and the return keyword
const bark2 = (str) => `barks ${str}`;

// If an arrow function only has one argument, we can omit the parentheses `()`
const bark3 = str => `barks ${str}`;

// To Arrow
function add(a, b) {
    return a + b;
};

const add = (a, b) => a + b;


function flip(fn) {
    return function(a, b) {
        return fn(b, a);
    };
};

const flip = fn => (a, b) => fn(b, a);


function V(x) {
    return function(y) {
        return function(z) {
            return z(x)(y);
        };
    };
};

const V = x => y => z => z(x)(y);

