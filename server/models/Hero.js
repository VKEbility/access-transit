const knex = require('../db/knex');
const authUtils = require('../utils/auth-utils');

class Heroes {
  constructor({ id, username, hero_count }) {
    this.id = id;
    this.username = username;
    this.hero_count = hero_count;
  }

  static async listHeroes(id) { //gets a list of all heroes with their hero count
    const query = `SELECT * FROM heroes where id=?`;
    const result = await knex.raw(query);
    return result.rows.map((rawUserData) => new User(rawUserData));
  }


  static async getHeroCount(id) { //get each users hero count, so that we can render it next to their username
    const query = `
      SELECT * FROM users
      hero_count
      WHERE id=?
    `;

    const result = await knex.raw(query, [id]);
    const heroCount = result.rows[0];
    return heroCount ? new User(heroCount) : null;
  }

  static async incrementHeroCount(id, hero_count, accessibility_status_id) { //increments the user count
    const query = `
      UPDATE heroes
      SET hero_count=?
      SET accessibility_status_id=? //something like this
      WHERE id=?
      RETURNING *
    `;

    const result = await knex.raw(query, [id]);
    const updatedUser = result.rows[0];
    return updatedUser ? new User(updatedUser) : null;
  }

  static async deleteUser(id) {
    return knex('users').where({ id }).del();
  }

  static async deleteAll() {
    return knex('users').del()
  }
}

module.exports = Heroes;