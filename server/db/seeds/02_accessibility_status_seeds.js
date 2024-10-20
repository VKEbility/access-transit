/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('accessibility_status').del();

  await knex('accessibility_status').insert([
    {
      equip_type: 'EL',
      equip_no: 'EL293',
      gtfs_complex_id: '119',
      accessibility_gtfs_stop_id: 'L06',
      operational_status: 1,
      user_id: 1
    },
    {
      equip_type: 'EL',
      equip_no: 'EL292',
      gtfs_complex_id: '119',
      accessibility_gtfs_stop_id: 'L06',
      operational_status: 1,
      user_id: 3
    },
    {
      equip_type: 'ES',
      equip_no: 'ES103',
      gtfs_complex_id: '306',
      accessibility_gtfs_stop_id: '116',
      operational_status: 0,
      user_id: 2
    },
    {
      equip_type: 'ES',
      equip_no: 'ES101',
      gtfs_complex_id: '306',
      accessibility_gtfs_stop_id: '116',
      operational_status: 0,
      user_id: null
    },
    {
      equip_type: 'ES',
      equip_no: 'ES102',
      gtfs_complex_id: '306',
      accessibility_gtfs_stop_id: '116',
      operational_status: 0,
      user_id: 3
    },
    {
      equip_type: 'EL',
      equip_no: 'EL144',
      gtfs_complex_id: '153',
      accessibility_gtfs_stop_id: 'A15',
      operational_status: 1,
      user_id: null
    },
    {
      equip_type: 'EL',
      equip_no: 'EL143',
      gtfs_complex_id: '153',
      accessibility_gtfs_stop_id: 'A15',
      operational_status: 1,
      user_id: null
    }
  ]);

};
