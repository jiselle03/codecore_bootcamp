// Write a script named staircaseSentence.js that takes a sentence-like string as an argument. 
// Then, it logs each word on their own line according to their word position in the sentence times 2.

// const args = process.argv.slice(2);
// const sentenceStr = args.join(' ');
// const sentenceArr = sentenceStr.split(' ');

// for (let i = 0; i < sentenceArr.length; i++) {
//     console.log('  '.repeat(i) + `${sentenceArr[i]}`);
// }


// Have it reset the word indentation when a . appears.

// const args = process.argv.slice(2);
// const sentenceStr = args.join(' ');
// const sentenceArr = sentenceStr.split(' ');
// let position = 0

// for (let i = 0; i < sentenceArr.length; i++) {
//     if (sentenceArr[i].slice(-1) === '.') {
//         console.log('  '.repeat(position) + `${sentenceArr[i]}`);
//         position = 0;
//     } else {
//         console.log('  '.repeat(position) + `${sentenceArr[i]}`);
//         position ++;
//     }
// }


// Accept an optional number as a second argument to specify the multiple of spaces words are indented by.

// const args = process.argv.slice(2, 3);
// const sentenceStr = args.join(' ');
// const sentenceArr = sentenceStr.split(' ');
// let position = 0;
// let indentNum = parseInt(process.argv.slice(3));

// for (let i = 0; i < sentenceArr.length; i++) {
//     if (sentenceArr[i].slice(-1) === '.') {
//         console.log(' '.repeat(position) + `${sentenceArr[i]}`);
//         position = 0;
//     } else {
//         console.log(' '.repeat(position) + `${sentenceArr[i]}`);
//         position += indentNum;
//     }

// }


// At the beginning of every indentation level except for the first one, show a | character.


const args = process.argv.slice(2, 3);
const sentenceStr = args.join(' ');
const sentenceArr = sentenceStr.split(' ');
let position = 0;
let indentNum = parseInt(process.argv.slice(3));
let count = 0;

for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i].slice(-1) === '.' && count > 1) {
        console.log(' '.repeat(indentNum) + ('|' + ' '.repeat(indentNum)).repeat(count - 1) + `${sentenceArr[i]}`);
        position = 0;
        count = 0;
    } else if (sentenceArr[i].slice(-1) === '.' && count <= 1) {
        console.log(' '.repeat(position) + `${sentenceArr[i]}`);
        position = 0;
        count = 0;
    } else if (count > 1) {
        console.log(' '.repeat(indentNum) + ('|' + ' '.repeat(indentNum)).repeat(count - 1) + `${sentenceArr[i]}`);
        position += indentNum;
        count++;
    } else {
        console.log(' '.repeat(position) + `${sentenceArr[i]}`);
        position += indentNum;
        count++;
    }
}
