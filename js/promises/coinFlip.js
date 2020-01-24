function throwCoin() {
    return new Promise((res, rej) => {
        const face = [1,0][Math.floor(Math.random() * 2)];
        const randomTime = [1,2,3,4][Math.floor(Math.random() * 4)] * 1000;
        if (randomTime > 3000) {
            setTimeout(() => {
                rej(new Error("thrown too high!"));
            }, randomTime);
        } else {
            setTimeout(() => {
                if (face) { // If face is 1
                    res("heads");
                } else {
                    res("tails");
                }
            }, randomTime);
        };
    });
};


// Using Promises (our promisified function throwCoin)
// You can use a instance of a promise, it looks like any other javascript object.

// An instance of a promise has two methods: .then() and .catch()
// .then() accepts a callback function with 1 argument. It will invoke that callback function 
// if the promise resolves to a good value.
// .catch() accepts a callback function with 1 argument. It will invoke that callback 
// if the promise resolves to a bad value (rejects).

throwCoin().then(argument => { // argument is determined by what the argument of res within the promise definition
    if (argument === 'heads') {
        console.log("Everybody drinks");
    } else {
        console.log("One person drinks");
    }
}).catch(argument => { // argument is determined by the argument of rej within the promise definition
    console.log("Coin flipper drinks");
});