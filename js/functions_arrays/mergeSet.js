// Write a function, mergeSet, that merges two arrays and removes all duplicate elements.


function mergeSet(array1, array2) {
    let newArr = array1.concat(array2);
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[i] === newArr[j]) {
                newArr.splice(j, 1);
            }
        }
    }
    return newArr;
}

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
console.log(mergeSet(array1, array2)); // [1, 2, 3, 4, 5]