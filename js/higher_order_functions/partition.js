// Write an higher-order function, partition, from scratch that takes two arguments:

// the first is an array
// the second is a callback named "partitioner" that must return true or false which 
// will be called once for every value in the array with 3 arguments:
    // the current value
    // the current index
    // the array itself
// Create a new array containing two arrays where the first is an array containing all elements 
// from the input array where the "paritioner" returns true and the last is array containing all elements where 
// the "partitioner" returns false

function partition(arr, partitioner) {
    let newArr = [];
    let trueArr = [];
    let falseArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (partitioner(arr[i], i, arr) === true) {
            trueArr.push(arr[i])
        } else {
            falseArr.push(arr[i])
        }
    }
    newArr.push(trueArr, falseArr);
    return newArr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8 ];

console.log(partition(arr, val => val > 4)); // returns [ [ 5, 6, 7, 8 ], [ 1, 2, 3, 4 ] ]
console.log(partition(arr, val => val % 2 === 0)); // returns [ [ 2, 4, 6, 8 ], [ 1, 3, 5, 7 ] ]