// A loud function

function loud(fn) {
    console.log(`Calling ${fn.name}`);
    const fnReturn = fn();
    console.log(`Called: ${fn.name}`);
    return fnReturn;
}

const sayHi = () => 'hi';
loud(sayHi); 
// Calling: sayHi 
// Called: sayHi

function loud(logFn, fn) {
    logFn(`Calling ${fn.name}`);
    const fnReturn = fn();
    logFn(`Called: ${fn.name}`);
    return fnReturn;
};

loud(console.log, sayHi);