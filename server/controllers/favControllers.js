const Favorite = require('../models/Favorite');

exports.listFavs = async (req, res) => {
  try {
    const { userId } = req.session;
    // console.log(userId);
    const favorites = await Favorite.listFavs(userId);
    // console.log("FAVS:",favorites);
    res.send(favorites);
  }
  catch(err) {
    console.error('Error listing favorites:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while listing all favorites' });
  }
}

exports.addFav = async (req, res) => {
  try {
    const { userId } = req.session;
    const {gtfs_complex_id, rt_stop_id, stop_name, gtfs_lon, gtfs_lat} = req.body;
    const addFav = await Favorite.addFav(userId, gtfs_complex_id, rt_stop_id, stop_name, gtfs_lon, gtfs_lat);
    console.log("FAVS ADDED:",addFav);
    res.send(addFav);
  }
  catch(err) {
    console.error('Error while adding a favorite:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while adding a favorite train station' });
  }
}

exports.removeFav = async (req, res) => {
  try {
    const { userId } = req.session;
    const {gtfs_complex_id} = req.body;
    const removeFav = await Favorite.removeFav(userId, gtfs_complex_id);
    // console.log("DELETE:", removeFav);
    res.send(removeFav);
  }
  catch(err) {
    console.error('Error while deleting a favorite:', err);
    res.status(500).send({ msg: 'Internal: Error occurred while deleting a favorite:' });
  }
}
