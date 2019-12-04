// Some NPM Commands:

// To start an NPM project, do npm init.
// To install a package, do npm install <package-name> <package-name> <...>
// When requiring a package, use the name of the package as listed in the dependencies section in package.json file.

const QRCode = require('qrcode');

const fileName = process.argv[2];
const text = process.argv[3];

QRCode.toFile(`${fileName}.png`, text, error => {
    if (error) {
        console.error(error);
    } else {
        console.log(`QRCode saved to ${fileName}.`)
    }
})