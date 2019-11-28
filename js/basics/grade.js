// Write a script grade.js that takes a number as argument that must be between 0 and 100. 
// If the number is smaller or larger, log "Invalid grade". 
// Otherwise, calculate their letter grade from "F" to "A" then log it. 
// Try using BC's letter grading system (it's short).

// Example usage:

// $ node grade.js 22
// F

// $ node grade.js 98
// A

// $ node grade.js 69
// C+

const args = process.argv.slice(2);
const grade = args[0];

if (grade < 0 || grade > 100) {
    console.log('Invalid grade')
} else if (grade >= 86) {
    console.log('A')
} else if (grade >= 73) {
    console.log('B')
} else if (grade >= 67) {
    console.log('C+')
} else if (grade >= 60) {
    console.log('C')
} else if (grade >= 50) {
    console.log('C-')
} else {
    console.log('F')
}