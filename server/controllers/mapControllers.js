const { fetchSearchLocation } = require('../api-services/fetchMapLocation');

exports.searchLocation = async (req, res) => {
  try {
    const { query } = req.body;

    const [queryCoords, err] = await fetchSearchLocation(query);
    if (err) return res.status(503).send({ msg: 'Service unavailable: Unable to search for location' }); //in case api is down
    console.log(`${queryCoords} location searched`);

    res.send(queryCoords);
  } catch (err) {
    console.error('Error fetching nearby transit routes:', err);
    res.status(500).send({ msg: 'Internal: An unexpected error occurred while fetching location query searched' });
  }
};