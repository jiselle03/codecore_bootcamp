// Write the higher-order function, reduce, from scratch. It takes 3 arguments in order:

// An array
// A callback that will be called with 2 arguments:
    // The result of the previous callback call (or the initial value for the first one)
    // The current value of the array
// An initial value

// function reduce(arr, callback, initialValue) {
//     let result;
//     for (let i = 0; i < arr.length; i++) {
//         if (i === 0) {
//             result = callback(initialValue, arr[0]) // 1
//         } else {
//             result = callback(result, arr[i])
//         }
//     }
//     return result;
// }


function reduce(arr, callback, initialValue) {
    let result = initialValue;
    for (let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i])
    }
    return result;
}

const plus = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];
const multiply = (a, b) => a * b;

console.log(reduce(numbers, plus, 0)); // 15
console.log(reduce(numbers, multiply, 1)); // 120

// plus(0, 1)
//   plus(1, 2) // first arg. is the result of last call, 1
//     plus(3, 3) // first arg. is the result of last call, 3
//       plus(6, 4) // first arg. is the result of last call, 6
//         plus(10, 5) // first arg., result of last call, 10
//                15 //Done! Returns 15