// process is a variable that gives us information about the the currently running thing

console.log(process.argv[2]);
const firstArgument = process.argv[2];
const secondArgument = process.argv[3];
console.log(`Our first argument is ${firstArgument}.`)
console.log(`Our second argument is ${secondArgument}.`)