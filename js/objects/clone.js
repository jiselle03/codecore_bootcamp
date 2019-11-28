// Try the following in node:

// $ node
// > let objA = {a: 1, b: 2}
// > let objB = objA
// > objA === objB // What does this return?
// You'll note that variable objA refers to the same object as objB. 
// Implement a function, clone, that creates a copy of an object such that objA === objB 
// should return false as in the example below:

// $ node
// > let objA = {a: 1, b: 2}
// > let objB = clone(objA)
// > objB
// {a: 1, b: 2}
// > objA === objB
// false
// In the example above, objA and objB contain the same keys and values, but they are not the same. 
// Variable objA points to a different object than variable objB. 
// You will need to use your trusty for .. in loop to make this happen.


let objA = {a: 1, b: 2};
let objB = {};

function clone(objA) {
    for (elem in objA) {
        objA[elem]:elem = objB[elem]: elem;
    }
    return objB;
};

clone(objA);