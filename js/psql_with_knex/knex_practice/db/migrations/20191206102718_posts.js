
exports.up = function(knex) {
    // create a table posts
    return knex.schema.createTable('posts', (t) => {
        // create a column called id with type of big int
        t.bigIncrements('id');
        // create a column called title with type of string
        t.string('title');
        t.text('content');
        // create a column createdAt with type of timestamp which will default ot the current time
        t.timestamp('createdAt').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
