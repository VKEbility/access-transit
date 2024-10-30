const express = require('express');
const nearbyRoutesControllers = require('./controllers/nearbyRoutesControllers');
const transitRouters = express.Router();

transitRouters.get('/api/ada', adaStationsControllers.listADAStations);
transitRouters.get('/api/transit-routes', nearbyRoutesControllers.listNearbyRoutes);
transitRouters.get('/api/transit-routes/:routeId/accessibility-status', accessibilityControllers.showStatus);
// app.patch('/api/transit-routes/:routeId/accessibility-status', accessibilityControllers.updateStatus);

module.exports = transitRouters;