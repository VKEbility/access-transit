const Accessibility = require('../../models/AccessibilityStatus');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('accessibility_status').del();

  //Accessibility.create(user_id, rt_stop_id, equip_type, equip_no, operational_status)
  await Accessibility.create(4, '631/723/901', 'ES', 'ES203', 1);
  await Accessibility.create(4, '631/723/901', 'EL', 'EL206', 1);
  await Accessibility.create(4, '631/723/901', 'EL', 'EL204', 1);
  await Accessibility.create(4, 'L03/R20', 'EL', 'EL218', 1);
  await Accessibility.create(4, '116', 'ES', 'ES103', 1);
  await Accessibility.create(4, 'A15', 'EL', 'EL144', 1);
  await Accessibility.create(5, 'A31/L01', 'EL', 'EL223', 1);
  await Accessibility.create(4, 'A41/R29', 'ES', 'ES317', 1);
  await Accessibility.create(5, 'A41/R29', 'ES', 'ES356', 1);
  await Accessibility.create(5, 'A41/R29', 'EL', 'EL707', 1);
  await Accessibility.create(5, 'A41/R29', 'EL', 'EL706', 1);
  await Accessibility.create(7, 'R30', 'ES', 'ES309', 1);
  await Accessibility.create(5, 'R30', 'ES', 'ES308', 1);
  await Accessibility.create(5, 'R30', 'EL', 'EL370', 1);
  await Accessibility.create(4, 'R30', 'EL', 'EL372', 1);
  await Accessibility.create(null, 'R30', 'EL', 'EL371', 1);
  await Accessibility.create(1, 'L06', 'EL', 'EL293', 1);
  await Accessibility.create(2, 'L06', 'EL', 'EL292', 1);
  await Accessibility.create(3, '116', 'ES', 'ES101', 1);
  await Accessibility.create(5, '116', 'ES', 'ES102', 1);
  await Accessibility.create(7, 'A15', 'EL', 'EL143', 1);
  await Accessibility.create(8, 'A15', 'EL', 'EL142', 0);
  await Accessibility.create(9, '621', 'EL', 'EL126', 1);
  await Accessibility.create(10, '621', 'EL', 'EL125', 1);
  await Accessibility.create(11, '224', 'EL', 'EL181', 1);
  await Accessibility.create(12, '224', 'EL', 'EL180', 1);
  await Accessibility.create(14, 'A31/L01', 'EL', 'EL222', 0);
  await Accessibility.create(30, 'A31/L01', 'EL', 'EL221', 0);
  await Accessibility.create(16, 'D19/L02', 'EL', 'EL611', 1);
  await Accessibility.create(17, 'D19/L02', 'EL', 'EL614', 1);
  await Accessibility.create(18, 'L03/R20', 'EL', 'EL220', 1);
  await Accessibility.create(19, 'L03/R20', 'ES', 'ES258X', 1);
  await Accessibility.create(22, 'L03/R20', 'EL', 'EL217', 1);
  await Accessibility.create(7, '414/D11', 'ES', 'ES114', 0);
  await Accessibility.create(7, '414/D11', 'ES', 'ES113', 0);
  await Accessibility.create(7, '414/D11', 'EL', 'EL135', 1);
  await Accessibility.create(7, '414/D11', 'EL', 'EL133', 1);
  await Accessibility.create(7, '414/D11', 'EL', 'EL132', 1);
  await Accessibility.create(13, '414/D11', 'EL', 'EL131', 1);
  await Accessibility.create(15, 'A12/D13', 'ES', 'ES115', 1);
  await Accessibility.create(15, 'A12/D13', 'ES', 'ES116', 1);
  await Accessibility.create(26, 'L03/R20', 'ES', 'ES219', 1);
  await Accessibility.create(31, 'L03/R20', 'ES', 'ES257X', 1);
  await Accessibility.create(33, '414/D11', 'EL', 'EL134', 1);
};
