// use 'setTimeout' function to execute a callback after a delay in milliseconds. The arguments are in order:
// - A callback function
// - A delay in milliseconds

console.log('Started to wait...');

// Because 'setTimeout' is asynchronous, JavaScript will not pause at the function call until the delay is over.
// It will continue executing the lines that follow this function and finally come back and execute the callback.
// By then, the entire script might have finished running.

setTimeout(() => {
    console.log('wait 2 seconds');
}, 2000);

// This code does not wait for the 'setTimeout' to complete its delay.
(console.log('Done waiting')); // will print before 'wait 2 seconds'

let greeting = 'Good morning!';
console.log('Before setTimeout: ', greeting);

setTimeout(function() {
    greeting = 'Hellloooooooooo!';
    console.log('In the callback: ', greeting);
}, 1000);

console.log('After setTimeOut: ', greeting);