const express = require('express');

const routes = express.Router();

// Testing route
routes.get('/teste', (req, res) => {
	return res.send('Hello world!');
});

// Exports routes to be used as a module for express
module.exports = routes;