/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('hero_actions', (table) => {
    table.increments();
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE'); //fk to users.id- if user deletes their acc, their hero action records will be deleted as well
    table.integer('hero_count').notNullable().defaultTo(0); //to keep track of users' hero status- increments with every status update a user contributes 
    table.integer('accessibility_status_id').notNullable();
    table.foreign('accessibility_status_id').references('id').inTable('accessibility_status'); //fk to accessibility_status.id
    table.timestamp('created_at').defaultTo(knex.fn.now()); //timestamp of when each hero action was made
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('hero_actions');
};