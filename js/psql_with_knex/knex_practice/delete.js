const knex = require('./db/client');

knex.delete().where({id: 1}).from('posts')
    .then((n) => {
        console.log(n);
    });