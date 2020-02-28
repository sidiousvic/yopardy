exports.seed = function(knex) {
  const data = require("../data.json");

  const categories = data.map(category => ({
    name: category.name,
    is_active: true
  }));

  const questions = data.reduce(
    (accumulator, category, index) =>
      accumulator.concat(
        category.questions.map(question => ({
          ...question,
          category_id: index + 1
        }))
      ),
    []
  );

  return knex
    .raw("TRUNCATE TABLE categories, questions CASCADE")
    .then(() => knex("categories").insert(categories))
    .then(() => knex("questions").insert(questions));
};
