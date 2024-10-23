const { fetchServiceAlerts } = require('../api-services/fetchServiceAlerts');

exports.listAllAlerts = async (req, res) => {
  console.log('--ALERTS CONTROLLER INVOKED @listAllAlerts'); //to help debug;
  try {
    const [alerts, err] = await fetchAlerts();
    if (err) return res.status(503).send({ msg: 'Service unavailable: Unable to retrieve service alerts' }); //in case MTA api is down

    console.log(`${alerts.alerts.length} service alerts retrieved`);
    res.send(alerts);
  } catch (err) {
    console.error('Error fetching service alerts:', err);
    res.status(500).send({ msg: 'Internal: An unexpected error occurred while fetching service alerts' });
  }
};

exports.showRouteAlerts = async (req, res) => {
  console.log('--ALERTS CONTROLLER INVOKED @showRouteAlerts'); //to help debug;
  const { rt_stop_id } = req.params;

  try {
    if (!rt_stop_id) return res.status(400).send({ msg: 'Missing route stop id' });

    const [alerts, error] = await fetchAlerts(rt_stop_id);
    if (error) return res.status(503).send({ msg: 'Service unavailable: Unable to retrieve route alerts' }); //in case MTA api is down

    console.log(`${alerts.alerts.length} alerts retrieved for stop ${rt_stop_id}`);
    res.send(alerts);
  } catch (err) {
    console.error('Error fetching ADA stations:', err);
    res.status(500).send({ msg: `Internal: An unexpected error occurred while fetching route ${rt_stop_id} service alerts` });
  }
};
