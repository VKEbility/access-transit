// const express = require('express');
// const userControllers = require('./controllers/userControllers');
// const checkAuthentication = require('../middleware/checkAuthentication');

// const userRouter = express.Router();

// userRouter.post('/api/users', userControllers.createUser);

// // These actions require users to be logged in (authentication)
// // Express lets us pass a piece of middleware to run for a specific endpoint
// userRouter.get('/api/users', checkAuthentication, userControllers.listUsers);
// userRouter.get('/api/users/:id', userControllers.showUser);
// userRouter.patch('/api/users/:id', checkAuthentication, userControllers.updateUser);

// module.exports = userRouter;