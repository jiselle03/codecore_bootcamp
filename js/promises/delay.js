const ONE_SECOND = 1000;
const TWO_SECONDS = 2000;

function delay(ms, value) {
    return new Promise((res, rej) => {
        if (value === 'green') {
            rej('no greens');
        };
        setTimeout(() => {
            res(value);
        }, ms);
    });
};

// delay(ONE_SECOND, 'blue')
//     .then(val => {
//         console.log(val);
//         return delay(TWO_SECONDS, 'red');
//     })
//     .then(val => {
//         console.log(val);
//         return delay(ONE_SECOND, 'green');
//     })
//     .then(val => {
//         console.log(val);
//         return delay(ONE_SECOND, 'grey');
//       })
//     .then(val => {
//         console.log(val);
//     })
//     .catch(err => {
//         console.log(err);
//     });

module.exports = delay;
