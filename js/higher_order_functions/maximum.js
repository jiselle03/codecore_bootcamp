// Write a method that returns the maximum number in an array in two ways without using Math.max or Array.sort:
    // Using iteration.
    // Using recursion.

// Benchmark your two solutions with console.time and console.timeEnd. Make sure to benchmark with really large arrays.

function maximumIt(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function maximumRe(arr) {
    let i = 1
    let max;

    function reMax(a, b) {
        if (arr[i]) {
            if (a > b) {
                max = a;
            } else {
                max = b;
            }
            i++
            reMax(arr[i], max)
        } else {
            return max;
        }
    }
    reMax(arr[0], arr[i]);
    return max;
}

console.log(maximumIt([213, 12, 66, 999])); // should return 999
console.log(maximumIt([1, 2, 3, 11, 3, 6, 5])); // should return 11

console.log(maximumRe([213, 12, 66, 999])); // should return 999
console.log(maximumRe([1, 2, 3, 11, 3, 6, 5])); // should return 11

console.time('recursion');
maximumRe([213, 12, 66, 999]); // recursive
console.timeEnd('recursion');

console.time('iteration');
maximumIt([213, 12, 66, 999]); 
console.timeEnd('iteration');