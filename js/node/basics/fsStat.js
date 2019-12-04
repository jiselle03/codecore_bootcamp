const fs = require('fs');

fs.stat("fsDemo.js", (err, stat) => {
    if (err) {
        console.error(err);
    }

    console.log(stat);
});