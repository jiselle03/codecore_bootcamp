function occurrencesOf(char, str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
        // return `Occurrences of ${char} in ${str}: ${count}`; will break after first and give a count of 0
        // console.log(`Occurrences of ${char} in ${str}: ${count}`); will log per iteration
    }
    return `Occurrences of ${char} in ${str}: ${count}`;
}

console.log(occurrencesOf('l', 'hello world'));
console.log(occurrencesOf(' ', 'bob likes tea'));
console.log(occurrencesOf('c', 'this is this'));