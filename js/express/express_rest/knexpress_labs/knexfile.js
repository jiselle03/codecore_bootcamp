module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/knexpress_labs",
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  }
};