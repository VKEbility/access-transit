/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username').notNullable().unique(); //unique username
    table.string('password_hash').notNullable();
    table.string('email').notNullable().unique(); //unique email
    table.string('language').notNullable(); //language codes: es, en
    table.timestamps(true, true); //to keep track of time updated- automatically created when a new field is inserted
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('users');
};
