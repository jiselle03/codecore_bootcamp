// Write a function, merge, that takes two objects,objA & objB respectively then returns 
// a new object with all keys of objA & objB. objA & objB should not be mutated when calling this function. 
// If objects objA & objB share keys, objB's key should take precedence over objA's.

// You can not use Object.assign.


// function merge(objA, objB) {
//     const newObj = {};
//     for (let keyA of objA) {
//         const key = keyA[0]
//         const value = keyA[1]
//         newObj[key] = value;
//     }
//     for (let keyB of objB) {
//         const key = keyB[0]
//         const value = keyB[1]
//         newObj[key] = value;
//     }
//     return newObj;
// }

function merge(objA, objB) {
    const newObj = {};
    for (let keyA in objA) {
        for (let keyB in objB) {
            if (keyA === keyB) {
                newObj[keyB] = objB[keyB]
            } else {
                newObj[keyA] = objA[keyA]
                newObj[keyB] = objB[keyB]
            }
        }
    }
    return newObj;
}


console.log(merge({a: 1, b: 2}, {c: 3, d: 4})); // return {a: 1, b: 2, c: 3, d: 4}
// with shared keys

console.log(merge(
  {firstName: 'Ron', lastName: 'Weasley', occupation: 'Wizard'},
  {firstName: 'Harry', lastName: 'Potter'}
)); // returns {firstName: 'Harry', lastName: 'Potter', occupation: 'Wizard'}

