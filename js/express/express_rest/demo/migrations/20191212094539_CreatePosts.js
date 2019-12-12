
exports.up = function(knex, Promise) {
    return knex.schema.createTable("posts", table => {
        table.increments('id');
        table.string('title');
        table.text('content');
        table.integer('viewCount');
        table.string('tags');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
