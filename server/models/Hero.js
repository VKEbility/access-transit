const knex = require('../db/knex');

class Heroes {
  constructor({ id, username, hero_count }) {
    this.id = id;
    this.username = username;
    this.hero_count = hero_count;
  }

  static async listHeroes() { //gets a list of all heroes with their hero count
    const query = `SELECT * FROM hero_actions`;
    const result = await knex.raw(query);
    return result.rows.map((rawUserData) => new User(rawUserData));
  }

  static async getHeroCount(id) { //get each users hero count, so that we can render it next to their username
    const query = `
      SELECT hero_count 
      FROM hero_actions
    `;

    const result = await knex.raw(query, [id]);
    const heroCount = result.rows[0];
    return heroCount ? new User(heroCount) : null;
  }

  static async deleteUser(id) {
    return knex('users').where({ id }).del();
  }

  static async deleteAll() {
    return knex('users').del()
  }
}

module.exports = Heroes;