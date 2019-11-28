const string = 'An archer'

function countChars(str) {
    const letterCount = {};
    str = str.toLowerCase();
    for (let letter of str) {
        if (letterCount[letter]) {
            letterCount[letter]++;
        } else {
            letterCount[letter] = 1;
        }
    }
    return letterCount;
}

console.log(countChars(string));