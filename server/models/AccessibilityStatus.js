const knex = require('../db/knex');

class Accessibility {
  constructor({ id, user_id, rt_stop_id, equip_type, equip_no, operational_status }) {
    this.id = id;
    this.user_id = user_id;
    this.rt_stop_id = rt_stop_id;
    this.equip_type = equip_type;
    this.equip_no = equip_no;
    this.operational_status = operational_status;
  }

  //creates a new accessibility feature and returns it
  static async create(user_id = null, rt_stop_id, equip_type, equip_no, operational_status) {
    const query = `
      INSERT INTO accessibility_status (user_id, rt_stop_id, equip_type, equip_no, operational_status)
      VALUES (?, ?, ?, ?, ?) RETURNING *
    `;
    const result = await knex.raw(query, [user_id, rt_stop_id, equip_type, equip_no, operational_status]);
    const rawFeatureData = result.rows[0];
    return new Accessibility(rawFeatureData);
  }

  //fetches a single accessibility feature and its status by its equip_no identifier
  static async findByEquipNo(equip_no) {
    const query = `SELECT * FROM accessibility_status WHERE equip_no=?`;
    const result = await knex.raw(query, [equip_no]);
    const rawFeatureData = result.rows[0];
    return rawFeatureData ? new Accessibility(rawFeatureData) : null;
  }

  //fetches a single accessibility feature's operational status by equip_no
  static async getOperationalStatus(equip_no) {
    const query = `SELECT operational_status FROM accessibility_status WHERE equip_no=?`;

    const result = await knex.raw(query, [equip_no]);
    return result.rows[0]?.operational_status || null; //returns the status or null if not found
  }

  static async getTimeLastUpdated(equip_no) {
    const query = `SELECT updated_at FROM accessibility_status WHERE equip_no=?`;
    const result = await knex.raw(query, [equip_no]);
    return result.rows[0]?.updated_at || null; //returns the timestamp of when status was updated last or null if not found
  }

  //getting the last user who updated an accessibility status by equip_no, ordering results by last updated_at value + limiting results to just 1 record
  static async getLastFeatureHero(equip_no) {
    const query = `
      SELECT user_id 
      FROM accessibility_status 
      WHERE equip_no=? 
      ORDER BY updated_at DESC 
      LIMIT 1
    `;
    const result = await knex.raw(query, [equip_no]);
    return result.rows[0]?.user_id || null; //returns the last person that updated status or null if not found
  }

  //update existing accessibility feature's operational status by equip_no
  static async updateOperationalStatus(equip_no, user_id = null, operational_status) {
    const query = `
      UPDATE accessibility_status 
      SET operational_status=?, user_id=?
      WHERE equip_no =?
      RETURNING *
      `;
    const result = await knex.raw(query, [operational_status, user_id, equip_no]);
    const updatedFeature = result.rows[0];
    return updatedFeature ? new Accessibility(updatedFeature) : null; //returning the record updated
  }
};

module.exports = Accessibility;