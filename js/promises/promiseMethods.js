const delay = require('./delay');
// Promise constructor has a couple useful methods you may want to make use of.

// Promise.all
// this method accepts an array of promises and it will resolve them in parallel

// Promise.all([
//   delay(1000, "blue"),
//   delay(2000, "red"),
//   delay(3000, "brown"),
//   // delay(3500, "green"),
//   delay(4000, "grey"),
// ])
//   .then(arrayOfValues => { // Promise.all returns a promise so we can call .then() on it. The arguments providedto the callback is an array of all the resolved values
//     console.log(arrayOfValues);
//   })
//   .catch(err => { // if any of the promises passed to Promise.all() are rejected the whole thing rejects
//     console.log(err);
//   })

// Promise.race
// this method accepts an array of promises and it will resolve the very first promise that resolves

Promise.race([
  delay(1000, "blue"),
  delay(1000, "red"),
  delay(1000, "brown"),
  delay(3500, "green"),
  delay(4000, "grey"),
])
  .then(winner => {
    console.log(winner);
  })
  .catch(err => {
    console.log(err);
  })