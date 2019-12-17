
exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    // When we run a migration, this will tell knex to create a table called tasks 
    // with all of the defined columns and their data type
    table.increments('id');
    table.string('username');
    table.text('name');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};
