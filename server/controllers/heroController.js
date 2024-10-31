const Hero = require('../models/Hero');

// Controller to list all heroes with their hero counts
exports.listAllHeroes = async (res) => {
  try {
    const heroes = await Hero.listHeroes();
    console.log(heroes);
    res.send(heroes);
    if (!heroes || heroes.length === 0) {
      return res.status(404).send({ msg: "No heroes found" });
    }

  } catch (err) {
    console.error('Error listing heroes:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while listing all heroes' });
  }
};

exports.getHeroUsername = async (res) => {
  try {
    const username = await Hero.getHeroUsername();
    console.log(username);
    res.send(username);
    if (!username || username.length === 0) {
      return res.status(404).send({ msg: "No username found" });
    }

  } catch (err) {
    console.error('Error listing usernames:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while listing all usernames' });
  }
};