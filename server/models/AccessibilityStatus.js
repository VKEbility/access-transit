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

  static async findByEquipNo(equip_no) {
    const query = `SELECT * FROM users WHERE email = ?`;
    const result = await knex.raw(query, [email]);
    const rawUserData = result.rows[0];
    return rawUserData ? new User(rawUserData) : null;
  }

  //fetches a single accessibility feature and its status by its equip_no identifier
  static async getAllStatuses(equip_no) {
    const query = `
      SELECT user_id
      FROM accessibility_status
      WHERE equip_no = ?
      ORDER BY updated_at DESC
      LIMIT 1
      `;
    const result = await knex.raw(query, [equip_no]);
    return result.rows.map((rawAccessibilityHero) => new AccessibilityFeature(rawAccessibilityHero));
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

  //fetches a single accessibility feature by id
  static async getOperationalStatus(equip_no) {
    const query = `SELECT operational_status FROM accessibility_status WHERE equip_no=?`;

    const result = await knex.raw(query, [equip_no]);
    return result.rows[0]?.operational_status || null; //returns the status or null if not found
  }

  static async getLastFeatureHero(equip_no) {
    const query = `SELECT user_id FROM accessibility_status WHERE equip_no=?`;
    const result = await knex.raw(query, [equip_no]);
    return result.rows[0]?.user_id || null; //returns the last person that updated status or null if not found
  }

  static async getTimeLastUpdated(equip_no) {
    const query = `SELECT updated_at FROM accessibility_status WHERE equip_no=?`;
    const result = await knex.raw(query, [equip_no]);
    return result.rows[0]?.updated_at || null; //returns the timestamp of when status was updated last or null if not found
  }

  //fetches a single accessibility feature by id
  static async listOperationalStatus(equip_no) {
    const query = `SELECT * FROM accessibility_features WHERE id=?`;
    const result = await knex.raw(query, [id]);
    const rawFeatureData = result.rows[0];
    return rawFeatureData ? new AccessibilityFeature(rawFeatureData) : null;
  }

  static async update(id, user_id = null, rt_stop_id, equip_type, equip_no, operational_status) {
    const fields = [];
    const values = [];

    if (user_id) {
      fields.push("user_id=?");
      values.push(user_id);
    }
    if (rt_stop_id) {
      fields.push("rt_stop_id=?");
      values.push(rt_stop_id);
    }
    if (equip_type) {
      fields.push("equip_type=?");
      values.push(equip_type);
    }
    if (equip_no) {
      fields.push("equip_no=?");
      values.push(equip_no);
    }
    if (operational_status !== null) {
      fields.push("operational_status=?");
      values.push(operational_status);
    }

    if (fields.length === 0) {
      throw new Error("No fields to update");
    }

    values.push(id);
    const query = `
      UPDATE accessibility_features
      SET ${fields.join(", ")}
      WHERE id=?
      RETURNING *
    `;
    const result = await knex.raw(query, values);
    const rawUpdatedFeature = result.rows[0];
    return rawUpdatedFeature ? new AccessibilityFeature(rawUpdatedFeature) : null;
  }
}

module.exports = Accessibility;