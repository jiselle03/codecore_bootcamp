const fs = require('fs')
const path = process.argv[2];

throw new Error();

let source = path;
fs.readdir(source, (err, files) => { // read a source directory
  let filename = 'filename'
  if (err) { // check for errors
    console.log(`Error finding files: ${err}`);
  } else {
    fs.mkdir(`${path}/copies/`, {recursive: true}, (err) => { // make a directory to hold copies of files
      if(err) { // check for errors
        console.log(`Error making copy directory: ${err}`)
      }
      files.forEach((filename, index) => { // loop through each file found inisde directory...
        fs.readFile(`${path}/${filename}`, {encoding: 'utf8'}, (err, data) => { // ...and read each file
          if (err) { // check for errors
            console.log(`Error reading files: ${err}`)
          }
          fs.writeFile(`${path}/copies/${filename}_copy`, data, {recursive: true}, (err, data) => { // copy contents of read file to new file
            if (err) { // check for errors
              console.log(`Error writing file: ${err}`)
            } else {
              console.log(`successfully written files`);
            }
          });
        });
      });
    });
  }
});