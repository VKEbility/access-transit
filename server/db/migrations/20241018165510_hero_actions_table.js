/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('hero_actions', (table) => {
    table.increments();
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users'); //fk to users.id
    table.integer('accessibility_status_id').notNullable();
    table.foreign('accessibility_status_id').references('id').inTable('accessibility_status'); //fk to accessibility_status.id
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('hero_actions');
};
