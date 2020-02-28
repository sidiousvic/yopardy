exports.up = function(knex) {
  return knex.schema.createTable("questions", t => {
    t.increments().index();

    // category that the question belongs to
    t.integer("category_id")
      .notNullable()
      .references("categories.id");

    // question
    t.string("question", 500).notNullable();

    // answer
    t.string("answer", 500).notNullable();

    // points
    t.integer("points").notNullable();

    // whether the question is enabled or not
    // set this to false to prevent question from showing up
    t.boolean("is_active")
      .notNullable()
      .default(true);

    t.index(["category_id", "points"]);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("questions");
};
