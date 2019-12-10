const knex = require('./db/client');
const data = require('./allCountries.js');

function getData(item) {   
    let countryInfo = {
    name: item.countryName,
    code: item.countryCode
    };
    return countryInfo;
};

console.log(data.map(getData));

knex.insert(data.map(getData)).into('countries')
    .then((amount) => {
    console.log('inserted: ' + amount)
    knex.destroy();
});