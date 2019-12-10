const knex = require('./db/client');

// knex.insert is a function to write an insert SQL query
// it takes an object of column and values

// knex.insert({
//     title: 'first post',
//     content: 'this is the first post',
// });

// // generates this SQL string
// // `insert into  ("content", "title") values ('this is the first post', 'first post')`

// knex.insert({
//     title: 'first post',
//     content: 'this is the first post',
// }).into('posts');

// generates this SQL string
// `insert into posts ("content", "title") values ('this is the first post', 'first post')`

// The above knex queries don't actually execute the SQL. It just writes them.
// Those queries return a Promise, which we can chain the .then() method to. This will execute the query.

knex.insert({
    title: 'first post',
    content: 'this is the first post',
}).into('posts').then((amount) => {
    console.log('inserted: ' + amount)
    knex.destroy();
});

knex.insert([
    {
        title: 'a',
        content: 'this is another post'
    },
    {
        title: 'b',
        content: 'this is another post'
    },
    {
        title: 'c',
        content: 'this is another post'
    },
]).into('posts').then((records) => {
    console.log(records);
    knex.destroy();
});