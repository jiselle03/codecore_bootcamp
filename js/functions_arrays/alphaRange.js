// Create a function, alphaRange, that takes two arguments: a start letter as a string and a end letter as a string. 
// It should return an array beginning with the start letter, filled with all letters up to the end letter including end.

// Stretch
// Support supplying arguments in the reverse direction.
// Support an additional argument step as a number which determines how many letters are stepped at a time.

function alphaRange(a, b, n) {
    let numA;
    let numB;
    const output = [];
    for (let i = 97; i <= 122; i++) {
        if (a.toLowerCase() === String.fromCharCode(i)) {
            numA = i;
        } else if (b.toLowerCase() === String.fromCharCode(i)) {
            numB = i;
        }
    }
    if (n) {
        if (numA < numB) {
            for (let j = numA; j <= numB; j += n) {
                output.push(String.fromCharCode(j));
            }
        } else {
            for (let k = numA; k >= numB; k -= n) {
                output.push(String.fromCharCode(k));
            }
        }
    } else {
        if (numA < numB) {
            for (let j = numA; j <= numB; j++) {
                output.push(String.fromCharCode(j));
            }
        } else {
            for (let k = numA; k >= numB; k--) {
                output.push(String.fromCharCode(k));
            }
        }
    }
    return output;
};

console.log(alphaRange('a', 'f')) // returns ['a', 'b', 'c', 'd', 'e', 'f']
console.log(alphaRange('d', 'h')) // returns ['d', 'e', 'f', 'g', 'h']

console.log(alphaRange('f', 'b')) // returns ['f', 'e', 'd', 'c', 'b']

console.log(alphaRange('a', 'k', 3)) // returns ['a', 'd', 'g', 'j']
console.log(alphaRange('z', 't', 2)) // returns ['z', 'x', 'v', 't']