exports.up = (knex) =>
  knex.schema.createTable("rating", (table) => {
    table.increments("id");
    table.integer("rate").notNullable();

    table
      .integer("note_id")
      .references("id")
      .inTable("notes")
      .onDelete("CASCADE");

    table.timestamp("created_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("rating");
