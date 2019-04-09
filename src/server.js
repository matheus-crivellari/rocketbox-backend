const express = require('express');

const app = express();

// Middleware for controlling the route /test
app.get('/test', (req, res) => {
	return res.send('Hello world');
});

// Listen to port 3333
app.listen(3333);