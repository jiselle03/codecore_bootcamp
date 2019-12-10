exports.up = function(knex) {
    return knex.schema.createTable('populations', (t) => {
      t.bigIncrements('id');
      t.integer('year');
      t.integer('quantity');
      t.integer('country_id');
      t.foreign('country_id').references("countries.id");
      t.timestamp('createdAt').defaultTo(knex.fn.now());
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('populations', (t) => {
        t.dropForeign('country_id');
    });
  };