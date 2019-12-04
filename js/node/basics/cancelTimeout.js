// 'setInterval' is like 'setTimeout' except that it will call the callback every interval in milliseconds instead of just once

let count = 5;

const intervalId = setInterval(() => {
    if (count <= 0) {
        console.log('Go');
        clearInterval(intervalId);
    } else {
        console.log(count + '...');
        count--;
    }
}, 1000);

// console.log('intervalID: ', intervalId);