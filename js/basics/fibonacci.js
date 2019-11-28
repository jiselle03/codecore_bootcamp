// Create a script named fibonacci.js that takes a number as an argument which logs, in order, numbers 
// from the fibonacci sequence up to the given number argument. You can research the fibonacci sequence on Wikipedia. 
// If no number arguments are given, log "A number argument is required".

const args = process.argv.slice(2);
const num = parseInt(args[0]);
let sequence = [0, 1];

for (let i = 0; i < num - 2; i++) {
    sequence.push(sequence[i] + sequence[i + 1]);
}
console.log(sequence);
