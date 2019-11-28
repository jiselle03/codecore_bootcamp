// Implement a function called flatten using recursion.

// It should take a multi-depth array meaning that any of its values can be arrays which can also 
// contain arrays and so on. It should return an array where all values of all nested arrays are laid out flat.

function flatten(arr) {
    const flat = [];
    let i = 0;
    function flattenThis(arr) {
        if (arr[i]) {
            if (Array.isArray(arr[i])) {
                flat.push(flatten(arr[i]))
            } else {
                flat.push(arr[i])
            }
        } else {
            return flat;
        }
        i++;
        flattenThis(arr);
    }
    flattenThis(arr);
    return flat;
}


console.log(flatten([1, 2, [3, [4, 5]]])); // returns [ 1, 2, 3, 4, 5 ]
console.log(flatten(['a', ['b', ['c']]])); // returns [ 'a', 'b', 'c' ]
console.log(flatten([[ 2, 3 ], [8, [5, 9], [4, 5]], 10])); // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]