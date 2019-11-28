// Write a function called printMulti that takes an array of arrays, such as:
// const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];

// and logs every element to the console as follows:
// > printMulti(myArray)
// 2
// 3
// 4
// Hello CodeCore
// 1
// true

const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];
function printMulti(myArray) {
    for (elem of myArray) {
        for (let i = 0; i < elem.length; i++) { // for (let elem2 of elem)
            console.log(elem[i]); // console.log(elem2)
        }
    }
}

printMulti(myArray);