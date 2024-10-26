const User = require('../models/User');

// note: if you were to console.log() something like `favorites` in line 10, do it before res.send()!! 

exports.updateHeroCount = async (req, res, hero_count) => {
  try {
    // since we're checking which user this action is being done to 
    const { userId } = req.session;
    const { accessibility_status_id } = req.body
    const heroCount = await User.getHeroCount(userId); //userid
    const heroAction = User.incrementHeroCount(id, hero_count, accesisbility_status)
    console.log(heroCount)
    console.log(heroAction)
  }
  catch(err) {
    console.error('Error listing favorites:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while listing all hero count' });
  }
}

exports.listAllHeroes = async (req, res) => {
    try {
      // since we're checking which user this action is being done to 
      const { userId } = req.session;
      const heroes = await User.listHeroes();
      console.log(heroes) //convert to arr or something
      // Sort heroes by hero_count in descending order
      const leaderboard = heroes.sort((a, b) => b.hero_count - a.hero_count);
      res.send(users);
    } catch (err) {
      console.error('Error listing users:', err);
      res.status(500).send({ msg: 'Internal: Error occurred while listing all users' });
    }
  };
  // HeroControllers.updateHeroAction = async (req, res) => {
  //   try {
  //     const { id } = req.param;
  //     const { accessibility_status_id } = req.body
  //     const heroCount = await User.getHeroCount(userId); //userid
  //     const heroAction = Hero.incrementHeroCount(id, hero_count, accesisbility_status)
  
  //     res.send(heroAction);
  //   }
  //   catch (err) {
  //     console.error('Error listing favorites:', err);
  //     res.status(500).send({ msg: 'Internal: Error occurred while listing all hero count' });
  //   }
  // }