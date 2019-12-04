// Create a script, thinkingOf.js, that plays the "I'm thinking of a number between X and Y" game with the user. 
// When the user runs the script, it should tell them that it's thinking of a number between a number and another, 
// then the user types a number to attempt a guess. The user should have as many attempts as they need. When they guess 
// it correctly, the script should indicate that the user won and it should also log how many attempts it took.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



const number = Math.ceil(Math.random() * 10);
let count = 1;

const checkAnswer = answer => {
    if (parseInt(answer) === number) {
        console.log(`Guessed ${number} correctly in ${count} attempts!`)
        rl.close();
    } else {
        count++;
        rl.question('Nope. Try again.\n', checkAnswer);
    }
}

rl.question('I\'m thinking of a number between 1 and 10.\n', checkAnswer);