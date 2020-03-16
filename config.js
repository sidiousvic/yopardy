require("dotenv").config();
module.exports = {
  db: {
    connection: process.env.DATABASE_URL || {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD
    }
  },

  express: {
    port: process.env.EXPRESS_PORT
  },

  logger: {
    format: "dddd MMMM Do YYYY, h:mm:ss a"
  }
};
