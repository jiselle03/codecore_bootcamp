// Write a function called largestNumber that returns the largest number from an array of numbers.

function largestNumber(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;
}

console.log(largestNumber([3, 64, 99, 56, 35, 120,'A', 1, 0]));



//     for (i=0; i<array.length; i++) {
//     if (array[i]>largest) {
//         console.log(largest + " " + array[i]);
//         largest = array[i];
//     }
// }
// console.log(largest);