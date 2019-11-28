// Write an higher-order function, pickBy, from scratch that takes two arguments:

// the first is an object
// the second is a callback named "picker" that will be called once for every key in the object with 3 arguments:
    // the current key
    // the current paired value to the key
    // the object itself
// Create a new object with all the key-value pairs where the "picker" returns true. This is similar to filter, 
// but for objects.

function pickBy(obj, picker) {
    const newObj = {};
    for (let key in obj) {
        if (picker(key, val, obj) === true) {
            newObj.key = obj.key
        }
    }
    return newObj;
}

const objA = { a: 1, b: 2, c: 3, d: 4, e: 5 };

console.log(pickBy(objA, key => key === "a")) // returns { a: 1 }
console.log(pickBy(objA, key => [ "a", "c", "e"].includes(key))) // returns { a: 1, c: 3, e: 5 }

const objB = { lana: 10, Liam: 4, lyn: 16, derek: 19, diana: 21 };

pickBy(objB, key => key[0].toLowerCase() === "l") // returns { lana: 10, Liam: 4, lyn: 16 }