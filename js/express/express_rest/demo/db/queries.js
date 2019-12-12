const knex = require('./client');

// Helper module for querying our db
module.exports = {
    // Get all posts
    getAll() {
        return knex('posts')
            .select('*');
    },
    // Get one post
    getOne(id) {
        return knex('posts')
            .where('id', id)
            .first();
    },
    // Create a post
    create(post) {
        return knex('posts')
            .insert(post, '*');
    },
    // Update a post
    update(id, post) {
        return knex('posts')
            .where('id', id)
            .update(post, '*');
    },
    // Delete a post
    delete(id) {
        return knex('posts')
            .where('id', id)
            .del();
    }
};