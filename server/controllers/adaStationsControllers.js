const { fetchADAStations } = require('../api-services/fetchADAStations');

exports.listADAStations = async (req, res) => {
  try {
    const [ada, error] = await fetchADAStations();
    if (error) return res.status(503).send({ msg: 'Service unavailable: Unable to retrieve accessible stations' }); //in case MTA api is down

    console.log(`${ada.length} ADA stations retrieved`);
    res.send(ada);
  } catch (err) {
    console.error('Error fetching ADA stations:', err);
    res.status(500).send({ msg: 'Internal: An unexpected error occurred while fetching ADA stations' });
  }
};
