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
  await User.create('l33t-guy', '123', 'el33t@domain.com', 'es', 3);
  await User.create('anawowow', '123', 'ana@domain.com', 'en', 1);
  await User.create('yayTransit', '123', 'transit@domain.com', 'es', 0);
  await User.create('lol', '123', 'email@domain.com', 'en');
  await User.create('bitmage', '123', 'bitmage@domain.com', 'zh', 5);
  await User.create('accessnerd', '123', 'traveler@domain.com', 'es', 3);
  await User.create('techiebob', '123', 'bobtech@domain.com', 'en', 4);
  await User.create('nature', '123', 'naturev@domain.com', 'en', 3);
  await User.create('sammy', '123', 'samt@domain.com', 'en', 0);
  await User.create('debugdude', '123', 'debugdude@domain.com', 'en', 5);

};
