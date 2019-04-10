const express   = require('express'),
	  path  	= require('path'),
 	  mongoose  = require('mongoose');

const PORT = 3333,
	   app = express();

// Connect to database
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-fqd3x.mongodb.net/omnistack?retryWrites=true',
{
	useNewUrlParser : true
});

// Useful for REST API
app.use(express.json());

// Useful for file uploading
app.use(express.urlencoded({extended:true}));

// Add static routing for files
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

// Use our routing filfe (./ relative to current file)
app.use(require('./routes'));


// Listen to port 3333
app.listen(PORT);