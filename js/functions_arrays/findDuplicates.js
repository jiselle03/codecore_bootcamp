// Write a function, findDuplicates, that takes an array of strings and/or integers, values. 
// Return a new array containing all the values that are duplicated in the array.

function findDuplicates(array) {
    let newArr = [];
    for (let i = 0; i < array.length - 1; i++) {
       if (array[i] === array[i + 1]) {
           if (array[i] !== array[newArr.length - 1]) {
               newArr.push(array[i]);
           }
       }
    }
    return newArr;
}


console.log(findDuplicates([1, 1, 3, 4, 5, 6, 7, 8, 9, 9])); // returns [1, 9]
console.log(findDuplicates(['Bob', 'bob', 'Rob', 'Rob', 1, 2, 3, 4, 4])); // returns ['Rob', 4]