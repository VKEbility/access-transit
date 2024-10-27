/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username').notNullable().unique();
    table.string('password_hash').notNullable();
    table.string('email').notNullable().unique();
    table.string('language').notNullable();
    table.integer('hero_count').notNullable().defaultTo(0);
    table.timestamps(true, true); //to keep track of time updated
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('users');
};
