// Update with your config settings.

module.exports = {

  development: {
    client: 'pg', // Tell knex that our client is postgres
    connection: {
      database: 'todo_list_development' // Tell knex to use this database
    },
    migrations: {
      directory: 'db/migrations' // Tell knex that our migration files are here
    }
  }

};
