const Hero = require('../models/Hero');

// Controller to update hero count for a user
exports.getHeroCount = async (req, res) => {
  try {
    const { userId } = req.session;
    if (!userId) {
      return res.status(401).send({ msg: 'Unauthorized: User not logged in' });
    }

    const heroCount = await Hero.getHeroCount(userId);
    console.log(`Hero count for user ${userId}:`, heroCount);
    
    if (!heroCount) {
      return res.status(404).send({ msg: "Hero count not found for the user" });
    }

    res.send({ heroCount });
  } catch (err) {
    console.error('Error updating hero count:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while updating hero count' });
  }
};

// Controller to list all heroes with their hero counts
exports.listAllHeroes = async (req, res) => {
  try {
    const heroes = await Hero.listHeroes();
    res.send(heroes);
    if (!heroes || heroes.length === 0) {
      return res.status(404).send({ msg: "No heroes found" });
    }

    // Sort heroes by hero_count in descending order
    // const leaderboard = heroes.sort((a, b) => b.hero_count - a.hero_count);
    console.log('Sorted leaderboard:', leaderboard);

    res.send({ leaderboard });
  } catch (err) {
    console.error('Error listing heroes:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while listing all heroes' });
  }
};