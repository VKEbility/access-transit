/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('favorites', (table) => {
    table.increments();
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users'); //fk to users.id
    table.string('gtfs_complex_id');
    table.string('rt_stop_id');
    table.string('stop_name');
    table.decimal('gtfs_lon', 12, 8)
    table.decimal('gtfs_lat', 12, 8);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('favorites');
};
