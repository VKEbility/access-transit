const { fetchAccessibilityStatus } = require('../api-services/fetchAccessibilityStatus');

exports.showStatus = async (req, res) => {
  console.log('--ACCESSIBILITY CONTROLLER INVOKED @showStatus'); //to help debug;
  const { rt_stop_id } = req.params;

  try {
    const [routeStatus, error] = await fetchAccessibilityStatus(rt_stop_id); //getting a specific route card's accessibility features + base status set by the MTA
    if (error) return res.status(503).send({ msg: "Service unavailable: Unable to retrieve route's accessibility status" }); //in case MTA api is down

    console.log(`${routeStatus.length} accessibility equipment statuses retrieved`);
    res.send(routeStatus);
  } catch (err) {
    console.error('Error fetching route accessibility status:', err);
    res.status(500).send({ msg: 'Internal: An unexpected error occurred while fetching route accessibility status' });
  }
};
