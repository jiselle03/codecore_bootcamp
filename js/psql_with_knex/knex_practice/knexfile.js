// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_practice_nov_19',
    },
    migrations: {
      tableName: 'migrations',
      directory: 'db/migrations',
    },
  },
  
};
