/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('accessibility_status', (table) => {
    table.increments();
    table.string('equip_type').notNullable(); //el or esc
    table.string('equip_no').notNullable();
    table.string('gtfs_complex_id');
    table.string('accessibility_gtfs_stop_id');
    table.integer('operational_status').notNullable().defaultTo(2); //1 for operational, 0 for not, and 2 for info out of date
    table.integer('user_id').nullable(); //nullable user_ids were updated by the mta, not a user
    table.foreign('user_id').references('id').inTable('users'); //fk to users.id
    table.timestamps(true, true); //to keep track of time updated
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('accessibility_status');
};
