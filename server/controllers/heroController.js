const User = require('../models/User');

// note: if you were to console.log() something like `favorites` in line 10, do it before res.send()!! 

exports.updateHeroCount = async (req, res) => {
  try {
    // since we're checking which user this action is being done to 
    const { userId } = req.session;
    // need userId to know which user wants to see their list of favorite stations 
    const heroCount = await User.getHeroCount(userId);
    res.send(heroCount);
  }
  catch(err) {
    console.error('Error listing favorites:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while listing all hero count' });
  }
}
