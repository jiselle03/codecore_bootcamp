// Write a function, areValuesArrays, that takes an array, arr. 
// It returns true if all values in arr are of the array type otherwise it returns false.

function areValuesArrays(arr) {
    for (let elem of arr) {
        if (Array.isArray(elem) === false) {
            return false;
        }
    }
    return true;
}

console.log(areValuesArrays([[1], [2], [4, 5]])); // true
console.log(areValuesArrays([1, [2], [6, 7, 8]])); // false
console.log(areValuesArrays([1], 2, [6, 7, 8])); // false
console.log(areValuesArrays(['true', 'false'])); // false