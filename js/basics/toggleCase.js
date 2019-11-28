// Write a script toggleCase.js that takes a string as an argument then logs the string with the casing of each letter reversed. 
// Lower case becomes upper case and vice versa.

// Example Usage:
// $ node toggleCase.js "What If Imps Were Real"
// wHAT iF iMPS wERE rEAL

const args = process.argv.slice(2);
const sentence = args.join(' ');
let result = '';

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === sentence[i].toUpperCase()) {
        result += sentence[i].toLowerCase();
    } else if (sentence[i] === sentence[i].toLowerCase()) {
        result += sentence[i].toUpperCase();
    } else {
        result += sentence[i]
    }
}
console.log(result);