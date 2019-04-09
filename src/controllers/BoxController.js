const Box = require('../model/Box');

// Class which will control the Box model
class BoxController{
	store(req, res){
		return res.send('Resource created.');
	}
}