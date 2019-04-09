const express = require('express');

const PORT = 3333,
 	  app = express();

// Useful for REST API
app.use(express.json());

// Useful for file uploading
app.use(express.urlencoded({extended:true}));

// Use our routing filfe (./ relative to current file)
app.use(require('./routes'));

// Listen to port 3333
app.listen(PORT);