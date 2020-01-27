const fs = require("fs");

function readFile(path, options) {
    return new Promise((res, rej) => {
        fs.readFile(path, options, function fsCallback(err, data) {
            if (err) {
                rej(err);
            }
            res(data);
        });
    });
};

readFile("../asyncAwait.js", {encoding: "utf8"})
    .then(data => {
        console.log(data);
        return readFile("../asyncReview.js", {encoding: "utf8"});
    })
    .then(data => {
        console.log(data);
        return "Done reading files!!!";
    })
    .then(string => {
        console.log(string);
    })
    .catch(err => console.log(err));