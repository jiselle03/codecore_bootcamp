const fs = require("fs");

function readFile(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, "utf8", (err, data) => {
            if (err) rej(err);
            res(data);
        });
    });
};

function readdir(path) {
    return new Promise((res, rej) => {
        fs.readdir(path, (err, files) => {
            if (err) rej(err);
            res(files);
        });
    });
};

function writeFile(fileName, contents) {
    return new Promise((res, rej) => {
        fs.writeFile(fileName, contents, err => {
            if (err) rej(err);
            res("Contents of directory written to file");
        });
    });
};

readdir("./samples")
    .then(files => {
        return Promise.all(files.map(fileName => {
            return readFile(`./samples/${fileName}`);
        }));
    })
    .then(contents => {
        writeFile("./newFile.txt", contents.join("\n"));
    })
    .then(() => console.log("Successfully wrote to newFile.txt!"))
    .catch(err => console.error(err));