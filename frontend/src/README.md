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

module.exports = User;

///////////////////////////////
// Herocount Route
///////////////////////////////
app.get('/api/heroes/', checkAuthentication, heroController.updateHeroCount);
app.get('/api/heroes/leaderboard', checkAuthentication, heroController.listHeroLeaderboard);


///change migration to 
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('heroes', (table) => {
    table.increments();
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE'); //fk to users.id- if user deletes their acc, their hero action records will be deleted as well
    table.integer('hero_count').notNullable().defaultTo(0);
    table.integer('accessibility_status_id').notNullable();
    table.foreign('accessibility_status_id').references('id').inTable('accessibility_status'); //fk to accessibility_status.id
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};


//HEROES ADAPTER
import { fetchHandler, getPostOptions } from '../../../shared/fetchingUtils.mjs.js';

const baseUrl = '/api/users/';

export const getHeroCount = async (id) => {
  const [heroCount, err] = await fetchHandler(`${baseUrl}/${id}/hero_count`);
  if (err) {
    console.log(err); // Print the error for simplicity
    return null;
  }
  return heroCount || 0; // Return 0 if no hero count is found
};

export const updateHeroCount = async ({ id, accessibility_status_id }) => {
  const [data, err] = await fetchHandler(`${baseUrl}/${id}`, getPostOptions({ accessibility_status_id }));
  if (err) return [null, err.msg];
  return [data, null];
}

///HEROES CONTROLLER
const HeroControllers.getHeroLeaderboard() { //manipulate the list of heros sorting them all the users by hero count
HeroesController.listAllHeroes = async (req, res) => {
  try {
    const heroes = await User.listHeroes();
    console.log(heroes) //convert to arr or osmehting
    const leaderboard = heroes.sort((a,b) => a-b)
    res.send(users);
  } catch (err) {
    console.error('Error listing users:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while listing all users' });
  }
};

HeroControllers.updateHeroAction = async (req, res) => {
  try {
    const { id } = req.param;
    const { accessibility_status_id } = req.body
    const heroCount = await User.getHeroCount(id); //userid
    const heroAction = Hero.incrementHeroCount(id, hero_count, accesisbility_status)

    res.send(heroAction);
  }
  catch (err) {
    console.error('Error listing favorites:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while listing all hero count' });
  }
}

//the object that the update hero action will create in the database basically
//eileen will create the functionality for event listener that will invoke the increment hero count adapter
update el1
{
  id: 1
  user_id: 8
  herocount: 1
  accessibility_statusId: equip_id of el1 in accesisbilitystatus table
  createdat: time
}

{
  id: 2
  user_id: 8
  herocount: 2
  accessibility_statusId: equip_id of el1 in accesisbilitystatus table
  createdat: time
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('heroes');
};