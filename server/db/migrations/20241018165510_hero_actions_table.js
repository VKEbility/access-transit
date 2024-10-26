/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('heroes', (table) => {
    table.increments();
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE'); //fk to users.id- if user deletes their acc, their hero action records will be deleted as well
    table.integer('hero_count').notNullable().defaultTo(0);
    table.integer('accessibility_status_id').notNullable();
    table.foreign('accessibility_status_id').references('id').inTable('accessibility_status'); //fk to accessibility_status.id
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('heroes');
};
