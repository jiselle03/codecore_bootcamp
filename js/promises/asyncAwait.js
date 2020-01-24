// Async Await is new syntax for handling promises.

const delay = require('./delay');

async function doSomething() {
    const blue = await delay(1000, "blue");
    console.log(blue);
    const brown = await delay(1000, "brown");
    console.log(brown);
};

doSomething();