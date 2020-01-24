const TWO_SECONDS = 2000;

const callback = () => {
    console.log("No... now it ends"); // 3
    setTimeout(() => {
        console.log("Do something...");
        setTimeout(() => {
            console.log("Do something else!");
        }, 2000);
    }, 3000);
};

console.log("I wish you a good fortune in the wars to come... and now it begins."); // 1

setTimeout(callback, TWO_SECONDS);

console.log("script ended?"); // 2
