// function reverseString(str) {
//     let newStr = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i]
//     }
//     return newStr;
// }

function reverseString(str) {
    if (str.length === 0) {
        return '';
    }
    return reverseString(str.slice(1)) + str.charAt(0); // First in, last out
}

console.log(reverseString('hello'))