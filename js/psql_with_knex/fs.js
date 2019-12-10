const fs = require('fs');
const fsPromises = require('fs').promises;

fs.readFile('./async.js', {encoding: 'utf8'}, (err, data) => {
    if (err) {
        throw new Error(err);
    }
    console.log(data);
});

// What is the above file doing?
// 1) read ./async.js
// 2) after reading log

fsPromises.readFile('./async.js', {encoding: 'utf8'}).then((data) => {
    console.log(data);
});