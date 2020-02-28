const config = require("./config");
const databaseConfig = {
  client: "pg",
  connection: config.db.connection,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./data/migrations"
  },
  seeds: {
    directory: "./data/seeds"
  }
};

module.exports = {
  development: databaseConfig,
  staging: databaseConfig,
  production: databaseConfig
};
