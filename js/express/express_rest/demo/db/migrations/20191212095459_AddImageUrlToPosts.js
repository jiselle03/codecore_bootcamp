
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', table => {
      table.string('imageUrl'); // Add column 'imageUrl" VARCHAR(255)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts', table => {
      // Alter table 'posts'
      table.dropColumn('imageUrl');
  })
};
