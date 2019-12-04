const countries = require('./countries.js');

console.log('Jiselle wants to visit: ');

for (let country of countries) {
    console.log(` - ${country}`)
}