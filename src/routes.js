const express = require('express'),
	  multer  = require('multer');
	  multerConfig = require('./config/multer');

const routes = express.Router(),
	  BoxController  = require('./controllers/BoxController') ,
	  FileController = require('./controllers/FileController');

// Assigns BoxController's store method to route /boxes
routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

// Assigns FileController's store method to route along with multer middleware
routes.post('/boxes/:id/files',
	multer(multerConfig).single('file') , FileController.store);

// Exports routes to be used as a module for express
module.exports = routes;