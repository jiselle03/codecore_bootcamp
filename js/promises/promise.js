// A Promise is a new syntactical way to handle asynchronous actions
// A Promise is a special object built into JavaScript after ECMAscript 2015
// It represents the eventual completion of an asynchronous operation

// Promise constructor

const DELAY = 2000;
const THREE_SECONDS = 3000;

const pinkyPromise = new Promise((resolve, reject) => {
    // Resolve is a function used to return a good value
    // Reject is a function used to return a bad value
    if (DELAY > THREE_SECONDS) {
        reject("You took too long!");
    };
    setTimeout(() => {
        resolve("Thank you for keeping your promise.");
    }, DELAY);
});

pinkyPromise.then(() => console.log(pinkyPromise));