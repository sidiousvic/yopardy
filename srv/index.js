require("dotenv").config();
const express = require("express");
const config = require("../config");
const knex = require("knex")(require("../knexfile.js"));

// express set up
const app = express();
app.use("/yopardy", express.static("build"));

// let's go!
app.listen({ port: config.express.port }, () => {
  console.log(`Happy Yopardy! http://localhost:${config.express.port}/yopardy`);
});
