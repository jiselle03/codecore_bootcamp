
exports.up = function(knex, Promise) {
    return knex.schema.createTable("notes", table => {
      table.increments("id");
      table.text("content");
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      table.timestamp("updatedAt");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("notes");
  };
