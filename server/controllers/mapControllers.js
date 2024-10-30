const { fetchSearchCoords } = require('../api-services/fetchMapQuery');

exports.searchLocation = async (req, res) => {
  console.log('--SEARCH CONTROLLER INVOKED @listNearbyRoutes'); //to help debug;
  const { query } = req.body;

  try {
    const [locations, err] = await fetchSearchCoords(query);
    if (err) return res.status(503).send({ msg: 'Service unavailable: Unable to search for location' }); //in case api is down
    if (!locations || locations.length === 0) return res.status(404).send({ msg: 'No results found for that search query' }); //if  api can't find location results for given query
    console.log(`${locations[0].lat}, ${locations[0].lon} search coords retrieved`);

    res.send(locations);
  } catch (err) {
    console.error('Error fetching search query:', err);
    res.status(500).send({ msg: 'Internal: An unexpected error occurred while fetching location query searched' });
  }
};