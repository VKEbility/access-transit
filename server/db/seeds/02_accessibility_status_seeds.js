/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('accessibility_status').del();

  await knex('accessibility_status').insert([
    { user_id: null, equip_type: 'EL', equip_no: 'EL371', rt_stop_id: 'R30', operational_status: 1 },
    { user_id: null, equip_type: 'EL', equip_no: 'EL221', rt_stop_id: 'A31/L01', operational_status: 0 },
    { user_id: 1, equip_type: 'EL', equip_no: 'EL204', rt_stop_id: '631/723/901', operational_status: 1 },
    { user_id: 1, equip_type: 'EL', equip_no: 'EL218', rt_stop_id: 'L03/R20', operational_status: 1 },
    { user_id: 2, equip_type: 'ES', equip_no: 'ES317', rt_stop_id: 'A41/R29', operational_status: 1 },
    { user_id: 2, equip_type: 'ES', equip_no: 'ES103', rt_stop_id: '116', operational_status: 1 },
    { user_id: 3, equip_type: 'EL', equip_no: 'EL144', rt_stop_id: 'A15', operational_status: 1 },
    { user_id: 4, equip_type: 'EL', equip_no: 'EL372', rt_stop_id: 'R30', operational_status: 1 },
    { user_id: 4, equip_type: 'ES', equip_no: 'ES219', rt_stop_id: 'L03/R20', operational_status: 1 },
    { user_id: 5, equip_type: 'EL', equip_no: 'EL223', rt_stop_id: 'A31/L01', operational_status: 1 },
    { user_id: 6, equip_type: 'EL', equip_no: 'EL707', rt_stop_id: 'A41/R29', operational_status: 1 },
    { user_id: 6, equip_type: 'EL', equip_no: 'EL706', rt_stop_id: 'A41/R29', operational_status: 1 },
    { user_id: 7, equip_type: 'ES', equip_no: 'ES309', rt_stop_id: 'R30', operational_status: 1 },
    { user_id: 7, equip_type: 'ES', equip_no: 'ES308', rt_stop_id: 'R30', operational_status: 1 },
    { user_id: 7, equip_type: 'EL', equip_no: 'EL370', rt_stop_id: 'R30', operational_status: 1 },
    { user_id: 7, equip_type: 'ES', equip_no: 'ES356', rt_stop_id: 'A41/R29', operational_status: 1 },
    { user_id: 8, equip_type: 'ES', equip_no: 'ES203', rt_stop_id: '631/723/901', operational_status: 1 },
    { user_id: 8, equip_type: 'EL', equip_no: 'EL206', rt_stop_id: '631/723/901', operational_status: 1 },
  ]);

};
