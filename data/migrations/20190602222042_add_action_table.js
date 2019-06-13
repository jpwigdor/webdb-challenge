exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl
      .string("description", 255)
      .notNullable()
      .unique();
    tbl.string("notes", 255).notNullable();
    tbl.boolean("completed").defaultTo(false);
    tbl
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
