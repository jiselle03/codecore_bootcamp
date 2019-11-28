// Array.forEach
// Executes a function on every element of an array

// Parameters:
// 1) Callback
    // a) The current element being operated on
    // b) The index of the current element
    // c) The original array .forEach was called on

const arr = [1, 2, 3, 4, 5];

arr.forEach((element, index, originalArr) => {
    console.log(element, index, originalArr);
});

// 1 0 [1, 2, 3, 4, 5]
// 2 1 [1, 2, 3, 4, 5]
// 3 2 [1, 2, 3, 4, 5]
// 4 3 [1, 2, 3, 4, 5]
// 5 4 [1, 2, 3, 4, 5]

// De-construct .forEach
// Write a function .forEach that accepts 2 parameters
// 1) Array being operated on
// 2) The callback

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

forEach(arr, (element, index, arr) => {
    console.log(element, index, arr)
})

// Array.map
// Will execute a callback on every element of the array.
// It will return a new array with the results of executing the callback.

const numbers = ['a', 'b', 'c', 'd', 'e'];
const newArr = numbers.map((element, index, arr) => {
    return element.repeat(index)
});
console.log(newArr);

// Re-create the .map method
function map(arr, callback) {
    const returnArr = [];
    for (let i = 0; i < arr.length; i++) {
        returnArr.push(callback(arr[i], i, arr));
    }
    return returnArr;
};

const r = map(numbers, (element, index, arr) => {
    return element.repeat(index);
});
console.log(r);