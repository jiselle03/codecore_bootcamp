// Require connection to database
const knex = require('./client');

const queries = {
    getAll() {
        return knex('tasks').select('*');
    },
    new(taskObj) {
        return knex('tasks').insert(taskObj, '*');
    },
    
};

module.exports = queries