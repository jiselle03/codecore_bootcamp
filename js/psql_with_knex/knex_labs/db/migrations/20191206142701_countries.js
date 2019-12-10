
exports.up = function(knex) {
    return knex.schema.createTable('countries', (t) => {
      t.bigIncrements('id');
      t.string('name');
      t.string('code');
      t.timestamp('createdAt').defaultTo(knex.fn.now());
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('countries');
  };