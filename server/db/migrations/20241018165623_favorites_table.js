/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('favorites', (table) => {
    table.increments();
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE'); //fk to users.id- if a user deletes their account, their favorites records should be deleted too
    table.string('rt_stop_id').notNullable(); //route id
    table.string('stop_name').notNullable();
    table.decimal('gtfs_lon', 12, 8).notNullable();
    table.decimal('gtfs_lat', 12, 8).notNullable();
    table.timestamps(true, true); //timestamps are automatically created when a new record is inserted

    table.unique(['user_id', 'rt_stop_id']); //ensures a user can only favorite a specific route once; this is enforced in the controller during route favoritism
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('favorites');
};
