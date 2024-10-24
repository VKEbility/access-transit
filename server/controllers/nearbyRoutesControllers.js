const { fetchNearbyRoutes } = require('../api-services/fetchNearbyRoutes');

exports.listNearbyRoutes = async (req, res) => {
  try {
    const { lat, lon } = req.body;
    if (!lat || !lon) return res.status(400).send({ msg: 'Missing longitude or latitude' });

    const [routes, err] = await fetchNearbyRoutes(lat, lon);
    if (err) return res.status(503).send({ msg: 'Service unavailable: Unable to retrieve nearby routes' }); //in case MTA api is down
    console.log(`${routes.length} nearby transit routes retrieved`);

    res.send(routes);
  } catch (err) {
    console.error('Error fetching nearby transit routes:', err);
    res.status(500).send({ msg: 'Internal: An unexpected error occurred while fetching nearby transit routes' });
  }
};


// // method to save a user's favorite nearby route
// static async saveFavoriteRoute(req, res) {
//   const userId = req.user.id; // assuming user is authenticated and userId is available
//   const { routeId } = req.body; // get route ID from the request body

//   try {
//     const favorite = await NearbyRoutesService.saveFavoriteRoute(userId, routeId);
//     return res.status(201).json(favorite);
//   } catch (error) {
//     console.error('Error saving favorite route:', error);
//     return res.status(500).json({ error: 'Failed to save favorite route.' });
//   }
// }
