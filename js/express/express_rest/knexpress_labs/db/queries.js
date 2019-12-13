const knex = require('./client');

module.exports = {

    getAll() {
        return knex('notes')
            .select('*');
    },

    getOne(id) {
        return knex('notes')
            .where('id', id)
            .first();
    },

    create(note) {
        return knex('notes')
            .insert(note, '*');
    },

    update(id, note) {
        return knex('notes')
            .where('id', id)
            .update(note, '*');
    },

    delete(id) {
        return knex('notes')
            .where('id', id)
            .del();
    }
};