// Write a function, zip, that takes two arrays of the same length, arrA & arrB. 
// If arrA and arrB are not the same length, the function should return undefined. 
// Otherwise, it should combine both arrays together in a two-dimensional array:

function zip(arrA, arrB) {
    let newArr = [];
    if (arrA.length !== arrB.length) {
        return undefined;
    } else {
        for (let i = 0; i < arrA.length; i++) {
                newArr.push([arrA[i], arrB[i]])
            }
        }
    console.log(newArr);
    }

zip(['firstName', 'lastName'], ['Jon', 'Snow']); // [['firstName', 'Jon'], ['lastName', 'Snow']]
zip([1, 2, 3], [4, 5, 6]); // [[1, 4], [2, 5], [3, 6]]
zip([0, 0, 0], []); // undefined
zip(['x', 'y', 'z'], [5, 6, 10]); // [['x', 5], ['y', 6], ['z', 10]]