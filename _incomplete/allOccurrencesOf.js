// see slide 55

// function allOccurrencesOf(char, arr) {
//     let count = 0
//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr[i].length; j++) {
//             if (arr[i] === char) {
//                 count++;
//             }
//         }
//     }
// }

function allOccurrencesOf(char, arr) {
    let count = 0;
    let result = [];
    for (elem of arr) {
        for (let i = 0; i < elem.length; i++) {
            if (elem[i] === char) {
                count++;
            }
        }
        result.push(count);
    }
}

console.log(allOccurrencesOf('l', ['hello', 'world']));
console.log(allOccurrencesOf('o', ['bob', 'likes', 'tea']));