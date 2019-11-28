// Create a function, matchingSet, that takes two arrays as arguments. 
// It should return an array of all the elements that are shared between the two arrays (without duplicates). 
// Effectively, it should return the intersection of both arrays.

function matchingSet(array1, array2) {
    let newArr = array1.concat(array2).sort();
    let newerArr = [];
    for (let i = 0; i < newArr.length - 1; i++) {
       if (newArr[i] === newArr[i + 1]) {
           if (newArr[i] !== newerArr[newerArr.length - 1]) {
               newerArr.push(newArr[i]);
           }
       }
    }
    return newerArr;
}


console.log(matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7])); // [3, 4]
console.log(matchingSet(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y'])); // ['j', 'n']