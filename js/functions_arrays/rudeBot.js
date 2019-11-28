function insult(name) {
    const randNum = Math.ceil(Math.random() * 3)
    if (randNum === 1){
        return `${name}, you doofus!`;
    } else if (randNum === 2) {
        return `${name}, you suck!`;
    } else {
        return `${name}, you dumbass!`;
    }
}

console.log(insult('Bob'));
console.log(insult('John'));
console.log(insult('Steve'));