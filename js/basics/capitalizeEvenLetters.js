// Write a script capitalizeEvenLetters.js that takes a word as an argument. 
//Upper case every even letter and lower case every odd letter of the word then log it.

// $ node capitalizeEvenLetters.js fish
// fIsH

// $ node capitalizeEvenLetters.js baratheon
// bArAtHeOn


const word = process.argv[2];
let result = '';

for (i = 0; i < word.length; i++) {
    if (i % 2 !== 0) {
        result += word[i].toUpperCase()
    } else {
        result += word[i].toLowerCase()
    }
}

console.log(result);

// Stretch
// Make the script work with a sentence as an argument.

// const args = process.argv.slice(2);
// const sentence = args.join(' ');
// const words = sentence.toLowerCase();
// let result = '';

// for (i = 0; i < words.length; i++) {
//     if (i % 2 !== 0) {
//         result += words[i].toUpperCase()
//     } else{
//         result += words[i].toLowerCase()
//     }
// }

// console.log(result);
