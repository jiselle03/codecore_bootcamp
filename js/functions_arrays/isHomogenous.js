// Write a function, isHomogenous, that takes an array and returns true only if all its values 
// are of the same type (e.g. all the values are strings or all the values are numbers, etc).

function isHomogenous(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[0] !== typeof arr[i]) {
            return false;
        } else if (typeof arr[0] === typeof arr[i] && typeof arr[0] === 'object' && Array.isArray(arr[0]) !== Array.isArray(arr[i])) {
            return false;
        }
    }
    return true;
}


console.log(isHomogenous([1, 2, 3])); // true
console.log(isHomogenous(['a', 'b', 'c'])); // true
console.log(isHomogenous([[2], 'Xavier'])); // false
console.log(isHomogenous([[2], {colour: 'blue'}])); // false
console.log(isHomogenous([1, '2', 3])); // false
console.log(isHomogenous([{age: 29}, {colour: 'blue'}])); // true
console.log(isHomogenous([1, 2, 3], [1, 2])); // true