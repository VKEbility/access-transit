const knex = require('../db/knex');

class Hero {
  constructor({ id, username, hero_count }) {
    this.id = id;
    this.username = username;
    this.hero_count = hero_count;
  }

  static async listHeroes() { //gets a list of all heroes with their hero count
    const query = `SELECT * FROM hero_actions`;
    const result = await knex.raw(query);
    console.log(result.rows);
    return result.rows;
  }

  static async getHeroUsername(userId) { 

    // const query = `
    //   SELECT username
    //   FROM users
    //   JOIN hero_actions ON users.id = hero_actions.user_id
    //   WHERE hero_actions.user_id = ?
    // `;

    // const query = `
    // SELECT users.username, 
    // hero_actions.action_type, 
    // hero_actions.timestamp
    // FROM hero_actions
    // JOIN users ON hero_actions.user_id = users.id
    // `;

    // const query = `
    // SELECT users.id, users.username, hero_action, hero_actions.timestamp
    // FROM user
    // JOIN hero_actions ON user.id = hero_actions.user_id;
    // `

    const query = 
    `SELECT COUNT(*) AS hero_count 
    FROM hero_actions 
    WHERE user_id = $1`

    const result = await knex.raw(query);
    console.log(result.rows);
    return result.rows;
}

}

module.exports = Hero;