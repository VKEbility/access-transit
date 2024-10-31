const Favorite = require('../models/Favorite');

// note: if you were to console.log() something like `favorites` in line 12, do it before res.send()!! 

exports.addFav = async (req, res) => {
// FavsController.addFav = async (req, res) => {
  try {
    // since we're checking which user this action is being done to 
    // const { userId } = req.params;
    // const { userId } = req.session;
    // need these properties when adding a new favorite train station 
    const { rt_stop_id, stop_name, gtfs_lat, gtfs_lon } = req.body;
    const addFav = await Favorite.addFav(rt_stop_id, stop_name, gtfs_lat, gtfs_lon);
    res.send(addFav);
  }
  catch (err) {
    console.error('Error while adding a favorite:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while adding a favorite train station' });
  }
}

exports.listFavs = async (req, res) => {
  try {
    // since we're checking which user this action is being done to 
    const { userId } = req.session;
    // need userId to know which user wants to see their list of favorite stations 
    const favorites = await Favorite.listFavs(userId);
    res.send(favorites);
  }
  catch (err) {
    console.error('Error listing favorites:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while listing all favorites' });
  }
}

exports.removeFav = async (req, res) => {
  try {
    // since we're checking which user this action is being done to 
    const { userId } = req.session.id;
    // need rt_stop_id as it's a unique indicator of which train station is being removed from the list 
    const { rt_stop_id } = req.body;
    const removeFav = await Favorite.removeFav(userId, rt_stop_id);
    res.send(removeFav);
  }
  catch (err) {
    console.error('Error while removing a favorite:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while removing a favorite:' });
  }
}
