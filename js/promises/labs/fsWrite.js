const fs = require("fs");

function writeFile(path, contents) {
    return new Promise((res, rej) => {
        fs.writeFile(path, contents, function fsCallback(err, data) {
            if (err) {
                rej(err);
            }
            res("File write complete!");
        });
    });
};

writeFile("file.txt", "The contents of my file")
  .then(function () { console.log("File write complete!") })
  .catch(function (error) { console.error(error) });