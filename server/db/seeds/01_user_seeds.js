const User = require('../../models/User');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Before you have models you can always just do `await knex('table_name').del`
  await knex('users').del();

  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');

  // User.create(username, password, email, language, heroCount)
  await User.create('cool_cat', '123', 'catcool@domain.com', 'en', 5);
  await User.create('l33t-guy', '123', 'el33t@gmail.com', 'es', 3);
  await User.create('anawowow', '123', 'ana@example.com', 'en', 1);
  await User.create('yayTransit', '123', 'transit@domain.com', 'es', 0);
  await User.create('lol', '123', 'email@domain.com', 'en');

};
