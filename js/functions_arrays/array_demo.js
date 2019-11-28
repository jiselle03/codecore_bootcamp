// Array
// represents a list of ordered values
// values are often named as elements
// Each value has a numbered position - the index
// values can be any data type

// let fruit1 = 'orange';
// let fruit2 = 'apple';
// let fruit3 = 'banana';

// let fruit = ['orange', 'apple', 'banana'];

// let arr = ['a', 'b', 'c'];
// let newArr = arr.concat([1, 2, 3]);
// console.log(newArr);

// console.log(newArr.slice(1)); // does not mutate
// console.log(newArr);

// console.log(newArr.slice(0, 2)); // inclusive of beginning, exclusive of ending
// console.log(newArr.slice(-2));

// console.log(newArr.join('')); // does not mutate
// console.log(newArr);

// newArr[0] = 5
// console.log(newArr); // mutates

// newArr['fullName'] = 'Jiselle Liu';
// newArr[-1] = 'Jiselle'
// console.log(newArr);
// console.log(newArr[6]); // undefined

// newArr.shift();
// console.log(newArr); // removes first element

// newArr.pop();
// console.log(newArr); // removes last element

// newArr.unshift(3);
// console.log(newArr); // adds to beginning

// newArr.push(4);
// console.log(newArr); // adds to end

// // Method to check if a value is an array
// console.log(Array.isArray(newArr));

// // Method to check if a value is inside an array
// console.log(newArr.includes(5));

// Iterating over arrays

const arr = ['a', 'b', 'c'];

// for (let i = 0; i < arr.length; i++) {
//     console.log("index:", i, 'value:', arr[i])
// }

// Simpler way if index is not needed:
for (let value of arr) {
    console.log('value:', value);
}