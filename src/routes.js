const express = require('express');

const routes = express.Router();

// Testing route
routes.get('/teste', (req, res) => {
	return res.send('Hello world!');
});