const express = require('express');

const routes = express.Router(),
	  BoxController = require('./controllers/BoxController');

// Assigns BoxController's method store to route /boxes
routes.post('/boxes', BoxController.store);

// Exports routes to be used as a module for express
module.exports = routes;