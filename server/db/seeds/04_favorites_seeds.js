/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('favorites').del();

  await knex('favorites').insert([
    {
      user_id: 1,
      gtfs_complex_id: '636',
      rt_stop_id: 'R29',
      stop_name: 'Jay St-MetroTech',
      gtfs_lon: -73.985942,
      gtfs_lat: 40.69218
    },
    {
      user_id: 1,
      gtfs_complex_id: '407',
      rt_stop_id: '636',
      stop_name: 'Astor Pl',
      gtfs_lon: -73.99107,
      gtfs_lat: 40.730054
    },
    {
      user_id: 2,
      gtfs_complex_id: '1',
      rt_stop_id: 'R01',
      stop_name: 'Astoria-Ditmars Blvd',
      gtfs_lon: -73.912034,
      gtfs_lat: 40.775036
    }
  ]);
};
