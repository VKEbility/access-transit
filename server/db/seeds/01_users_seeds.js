const User = require('../../models/User');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Before you have models you can always just do `await knex('table_name').del`
  await knex('users').del();

  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');

  //User.create(username, password, email, language, heroCount)
  await User.create('cool_cat', '123', 'catcool@gmail.com', 'en');
  await User.create('l33t-guy', '123', 'l33t-guy@gmail.com', 'es-419');
  await User.create('anawowow', '123', 'anawowow@yahoo.com', 'en');
  await User.create('yaytransit', '123', 'yaytransit@yahoo.com', 'en');
  await User.create('lolability', '123', 'lolability@outlook.com', 'es-419');
  await User.create('bitmage', '123', 'bitmage@gmail.com', 'en');
  await User.create('accessnerd', '123', 'accessnerd@gmail.com', 'es-419');
  await User.create('techiebob', '123', 'techiebob@outlook.com', 'en');
  await User.create('emilyg', '123', 'emilyg@gmail.com', 'en');
  await User.create('chrisx', '123', 'chrisx@yahoo.com', 'en');
  await User.create('jhoa', '123', 'debugdude@gmail.com', 'zh-cmn');
  await User.create('edwinh', '123', 'edwinh@gmail.com', 'en');
  await User.create('dave_m', '123', 'dave_m@gmail.com', 'en');
  await User.create('marisolz', '123', 'marisolz@gmail.com', 'en');
  await User.create('zanmao', '123', 'samt@gmail.com', 'zh-yue');
  await User.create('mikew', '123', 'mikew@hotmail.com', 'en');
  await User.create('yogali', '123', 'yogali@gmail.com', 'en');
  await User.create('sue-delaney', '123', 'suedelaney@yahoo.com', 'en');
  await User.create('hotwheels', '123', 'hotwheels@yahoo.com', 'es-419');
  await User.create('alohany', '123', 'alohany@gmail.com', 'en');
  await User.create('powerdan', '123', 'powerdan@gmail.com', 'en');
  await User.create('highfives4u', '123', 'highfives4u@gmail.com', 'en');
  await User.create('will_t', '123', 'will_t@gmail.com', 'en');
  await User.create('quantumum', '123', 'quantumum@yahoo.com', 'en');
  await User.create('rythink', '123', 'rythink@outlook.com', 'en');
  await User.create('poeticjess', '123', 'poeticjess@gmail.com', 'en');
  await User.create('bear1', '123', 'bear1@gmail.com', 'en');
  await User.create('uhly8', '123', 'uhly8@gmail.com', 'en');
  await User.create('sallysmiles', '123', 'sallysmiles@yahoo.com', 'en');
  await User.create('mcrfan', '123', 'mcrfan@gmail.com', 'en');
  await User.create('catsndoggos', '123', 'catsndoggos@gmail.com', 'en');
  await User.create('ufc3000', '123', 'ufc3000@gmail.com', 'en');
  await User.create('chasingcars', '123', 'chasingcars@gmail.com', 'en');
  await User.create('dreamingly', '123', 'dreamingly@gmail.com', 'en');
  await User.create('pj191723', '123', 'pj191723@gmail.com', 'en');
};
