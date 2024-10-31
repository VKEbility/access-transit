///////////////////////////////
// Imports
///////////////////////////////
require('dotenv').config();
const path = require('path');
const express = require('express');

// middleware imports
const handleCookieSessions = require('./middleware/handleCookieSessions');
const logRoutes = require('./middleware/logRoutes');
const checkAuthentication = require('./middleware/checkAuthentication');

// controller imports
const authControllers = require('./controllers/authControllers');
const userControllers = require('./controllers/userControllers');
const favControllers = require('./controllers/favControllers');
const heroController = require('./controllers/heroController');
const adaStationsControllers = require('./controllers/adaStationsControllers');
const accessibilityControllers = require('./controllers/accessibilityControllers');
const serviceAlertsController = require('./controllers/serviceAlertsController');
const nearbyRoutesControllers = require('./controllers/nearbyRoutesControllers');
const mapControllers = require('./controllers/mapControllers');

const app = express();

// middleware
app.use(handleCookieSessions); // adds a session property to each request representing the cookie
app.use(logRoutes); // print information about each incoming request
app.use(express.json()); // parse incoming request bodies as JSON
app.use(express.static(path.join(__dirname, '../frontend/dist'))); // Serve static assets from the dist folder of the frontend


///////////////////////////////
// Auth Routes
///////////////////////////////

app.get('/api/me', authControllers.showMe);
app.post('/api/login', authControllers.loginUser);
app.delete('/api/logout', authControllers.logoutUser);


///////////////////////////////
// User Routes
///////////////////////////////

app.post('/api/users', userControllers.createUser);

// These actions require users to be logged in (authentication)
// Express lets us pass a piece of middleware to run for a specific endpoint
app.get('/api/users', checkAuthentication, userControllers.listUsers);
app.get('/api/users/:id', checkAuthentication, userControllers.showUser);
app.patch('/api/users/:id', checkAuthentication, userControllers.updateUser);


///////////////////////////////
// Route Services
///////////////////////////////
app.get('/api/ada', adaStationsControllers.listADAStations);
app.get('/api/service-alerts', serviceAlertsController.listAllAlerts);
app.get('/api/service-alerts/:rt_stop_id', serviceAlertsController.showRouteAlerts);

///////////////////////////////
// Map Routes
///////////////////////////////
app.post('/api/map-search', mapControllers.searchLocation);


///////////////////////////////
// Transit Routes
///////////////////////////////
app.post('/api/transit-routes', nearbyRoutesControllers.listNearbyRoutes);
app.get('/api/transit-routes/:rt_stop_id/accessibility', accessibilityControllers.showStatus);

///////////////////////////////
// Favorites Routes
///////////////////////////////

// must check which user want to do an action first! 
// then do the action (list, add, or remove)! 
app.post('/api/users/:id/favorites', checkAuthentication, favControllers.addFav);
app.get('/api/users/:id/favorites', checkAuthentication, favControllers.listFavs);
app.delete('/api/users/:id/favorites/:rt_stop_id', checkAuthentication, favControllers.removeFav); 


///////////////////////////////
// Herocount Route
///////////////////////////////
app.get('/api/users/hero_count', checkAuthentication, heroController.updateHeroCount);


///////////////////////////////
// Fallback Route
///////////////////////////////

// Requests meant for the API will be sent along to the router.
// For all other requests, send back the index.html file in the dist folder.
app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) return next();
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});


///////////////////////////////
// Start Listening
///////////////////////////////

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
