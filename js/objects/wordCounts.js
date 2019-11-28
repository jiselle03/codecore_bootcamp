// Word counts

const string = 'This is this and that is that'
function wordCounts(str) {
    const wordsHash = {}; // arrays and objects are mutable so const can be used (immutable: strings, numbers)
    const words = str.split(' '); // an array of all elements
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        if (wordsHash[word]) {
            wordsHash[word] += 1;
        } else {
            wordsHash[word] = 1;
        }
    }
    return wordsHash;
}

console.log(wordCounts(string));