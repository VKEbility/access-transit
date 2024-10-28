const { fetchNearbyRoutes } = require('../api-services/fetchNearbyRoutes');

exports.listNearbyRoutes = async (req, res) => {
  console.log('--ROUTES CONTROLLER INVOKED @listNearbyRoutes'); //to help debug;
  const { lat, lon } = req.body;

  try {
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