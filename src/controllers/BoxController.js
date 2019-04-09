const Box = require('../model/Box');

// Class which will control the Box model
class BoxController{
	async store(req, res){
		const box = await Box.create({ title : 'Rocketseat'});
		return res.send('Resource created.');
	}
}