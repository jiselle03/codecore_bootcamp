const knex = require('./db/client');

knex
.select('*')
.from('countries')
.where('name', 'ilike', 'b%')
    .then((records) => {
        console.log(records);
        });

knex
.countDistinct('name')
.from('countries')
.where('name', 'ilike', '%central%')
    .then((records) => {
        console.log(records);
    });