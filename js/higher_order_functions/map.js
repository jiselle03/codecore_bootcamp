// Write the higher-order function, map, as seen in class using recursion instead. 
// Unlike the iterative version, you are not required to pass the index to the callback.

// map takes 2 arguments in order:
    // An array
    // A callback that will be called once for every element in the array with 1 argument: the current value of the element


function map(arr, callback) {
    const mappedArr = [];
    let i = 0;
    function mapThis(arr){
        if (arr[i]) {
            mappedArr.push(callback(arr[i]))
        } else {
            return mappedArr;
        }
        i++
        mapThis(arr)
    }
    mapThis(arr)
    return mappedArr;
}


const even = n => n % 2 === 0;
const pow2 = n => n ** 2;

const numbers = [1, 2, 3, 4, 5, 6];

console.log(map(numbers, even)); // [false, true, false, true, false, true]
console.log(map(numbers, n => n.toString().repeat(n))); // ['1', '22', '333', '4444', '55555', '666666']
console.log(map(numbers, pow2)); // [1, 4, 9, 16, 25, 36]

const names = ["Daenerys", "Sansa", "Arya"];

console.log(map(names, name => `Hi, ${name}!`)); // ['Hi, Daenerys!', 'Hi, Sansa!', 'Hi, Arya!']