/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('accessibility_status', (table) => {
    table.increments();
    table.integer('user_id').nullable(); //if null, status was last updated by the mta, not a user
    table.foreign('user_id').references('id').inTable('users').onDelete('SET NULL'); //fk to users.id- when a user deletes their account, set related user_id field to null
    table.string('rt_stop_id').notNullable(); //route id
    table.string('equip_type').notNullable(); //el or esc
    table.string('equip_no').notNullable().unique(); //specific el or esc identifier- unique to ensure no duplicate entries for a single el/esc at the same station + stop, only the most recent update wil be applied
    table.integer('operational_status').notNullable().defaultTo(2); //constraint ensuring that range is 0-2: 1 for operational, 0 for not, and 2 for info reliability unknown (last updated over an hour ago)
    table.timestamps(true, true); //to keep track of time updated
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('accessibility_status');
};
