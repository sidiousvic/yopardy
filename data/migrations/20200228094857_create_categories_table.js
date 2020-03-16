exports.up = function(knex) {
  return knex.schema.createTable("categories", t => {
    t.increments().index();

    // name of category
    t.string("name", 15)
      .unique()
      .notNullable();

    // whether the category is enabled or not
    // set this to false to prevent category from showing up
    t.boolean("is_active")
      .notNullable()
      .default(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("categories");
};
