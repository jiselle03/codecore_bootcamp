// Write an higher-order function, filter, from scratch that takes two arguments:

// the first is an array
// the second is a callback that will be called once for every element in the array with 3 arguments:
// the current value of the element
// the current index of the element
// the array itself
// filter returns a new array that only contains elements of provided array where the callback function returns true.

const even = function (n) { return n % 2 === 0 };
const odd = function (n) { return !even(n) };
const above = function (min) {
  return function (n) {
    return n > min;
  }
}
const repeatedValue = function(value, index, arr) {
  return index !== arr.indexOf(value);
};

const filter = (arr, callback) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        returnValue = callback(arr[i], i, arr)
        if (returnValue) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let arr = [1,2,3,4,5,6];

console.log(filter(arr, even)) // returns 2,4,6
console.log(filter(arr, odd)) // returns 1,3,5
console.log(filter(arr, above(3))) // returns 4,5,6
console.log(filter([1, 2, 3, 2, 3, 4, 5], repeatedValue)); // returns 2,3