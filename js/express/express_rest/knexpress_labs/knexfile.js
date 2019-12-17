module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "knexpress_labs"
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  }
};