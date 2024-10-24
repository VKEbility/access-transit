const Favorite = require('../models/Favorite');

// note: if you were to console.log() something like `favorites` in line 10, do it before res.send()!! 

exports.listFavs = async (req, res) => {
  try {
    // since we're checking which user this action is being done to 
    const { userId } = req.session;
    // need userId to know which user wants to see their list of favorite stations 
    const favorites = await Favorite.listFavs(userId);
    res.send(favorites);
  }
  catch(err) {
    console.error('Error listing favorites:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while listing all favorites' });
  }
}

exports.addFav = async (req, res) => {
  try {
    // since we're checking which user this action is being done to 
    const { userId } = req.session;
    // need these properties when adding a new favorite train station 
    const {gtfs_complex_id, rt_stop_id, stop_name, gtfs_lon, gtfs_lat} = req.body;
    const addFav = await Favorite.addFav(userId, gtfs_complex_id, rt_stop_id, stop_name, gtfs_lon, gtfs_lat);
    res.send(addFav);
  }
  catch(err) {
    console.error('Error while adding a favorite:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while adding a favorite train station' });
  }
}

exports.removeFav = async (req, res) => {
  try {
    // since we're checking which user this action is being done to 
    const { userId } = req.session;
    // need gtfs_complex_id as it's a unique indicator of which train station is being removed from the list 
    const {gtfs_complex_id} = req.body;
    const removeFav = await Favorite.removeFav(userId, gtfs_complex_id);
    res.send(removeFav);
  }
  catch(err) {
    console.error('Error while removing a favorite:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while removing a favorite:' });
  }
}
