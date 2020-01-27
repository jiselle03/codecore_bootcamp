function add(value, arg = 0) {
    return new Promise((res, rej) => {
        if (typeof value !== "number") {
            rej(`${value} is not a valid number`);
        };
        setTimeout(() => {
            res(value + arg);
        }, 0);
    });
};

function mult(value, arg = 0) {
    return new Promise((res, rej) => {
        if (typeof value !== "number") {
            rej(`${value} is not a valid number`);
        };
        setTimeout(() => {
            res(value * arg);
        }, 0);
    });
};

function div(value, arg = 0) {
    return new Promise((res, rej) => {
        if (typeof value !== "number") {
            rej(`${value} is not a valid number`);
        };
        setTimeout(() => {
            res(value / arg);
        }, 0);
    });
};

function sub(value, arg = 0) {
    return new Promise((res, rej) => {
        if (typeof value !== "number") {
            rej(`${value} is not a valid number`);
        };
        setTimeout(() => {
            res(value - arg);
        }, 0);
    });
};

function pow(value, arg = 0) {
    return new Promise((res, rej) => {
        if (typeof value !== "number") {
            rej(`${arg} is not a valid number`);
        };
        setTimeout(() => {
            res(value ** arg);
        }, 0);
    });
};

add(9)
  .then(value => add(9, value)) // value is 9
  .then(value => add(2, value)) // value is 18
  .then(value => mult(5, value)) // value is 20
  .then(value => div(value, 10)) // r is 100
  .then(console.log); // logs 10

pow(2)
  .then(r => pow(2, r)) // r is 2
  .then(r => pow(2, r)) // r is 4
  .then(r => mult("fifty-two", r)) // r is 16, but the mult('fitty-two', ...)
  // should reject
  .then(console.log) // never makes it here
  .catch(console.log); // error logs 'fifty-two is not a valid number'