require("dotenv").config();
const express = require("express");
var cors = require("cors");
const config = require("../config");
const knex = require("knex")(require("../knexfile.js"));

// express set up
const app = express();
app.use(cors());

// generate a game
app.get("/yopardy/game", (req, res) => {
  async function generateGame(numberOfCategories, values) {
    const categories = await knex("categories")
      .select("id", "name")
      .orderByRaw("RANDOM()")
      .limit(numberOfCategories);
    for (let i = 0; i < categories.length; i++) {
      categories[i].questions = [];
      for (let j = 0; j < values.length; j++) {
        categories[i].questions.push(
          await knex("questions")
            .select("question", "answer", "value")
            .where("category_id", categories[i].id)
            .where("value", values[j])
            .orderByRaw("RANDOM()")
            .first()
        );
      }
    }
    return categories;
  }

  // hardcoded currently but can pretty easily be changed with user input
  const numberOfCategories = 5;
  const values = [100, 200, 300, 400, 500];

  generateGame(numberOfCategories, values).then(game => res.json(game));
});

// serve static folder
app.use("/yopardy", express.static("build"));

// let's go!
app.listen({ port: config.express.port }, () => {
  console.log(`Happy Yopardy! http://localhost:${config.express.port}/yopardy`);
});
