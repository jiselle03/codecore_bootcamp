const knex = require('./db/client');

// select id, title, content from all posts
knex.select('id', 'title', 'content').from('posts')
    .then((records) => {
        console.log(records);
    });

// where 
knex.select('*').from('posts').where({id: '1'})
    .then((records) => {
        console.log(records);
    });

// same query as above just written in a different order
// knex.select('*').where({id: '2'}).from('posts').then((records) => {
//     console.log(records);
// });