const fs = require('fs').promises;
const path = process.argv[2];

// BUG WARNING: Make sure the directory being passed in as "path" does not contain a directory or else you'll recieve a { [Error: EISDIR: illegal operation on a directory, read] errno: -21, code: 'EISDIR', syscall: 'read' }
let source = path;

fs.readdir(source) // read source directory
  .then(files => fs.mkdir(`${path}/copies/`, {recursive: true}) // make a directory to hold copies of files
    .then(() => files) // then return files
  )
  .then(files => {
    return Promise.all(files.map(filename => { // loop through each file found inisde directory...
      return fs.readFile(`${path}/${filename}`, {encoding: 'utf8'}).then(data => { // ...and read each file
        return [filename, data];
      })
    }));
  })
  .then((files) => {
    return Promise.all(files.map(([filename, data]) => { // copy contents of read file to new file
      return fs.writeFile(`${path}/copies/${filename}_copy`, data)
    }))
  })
  .catch(err => console.log(err)); // check for errors