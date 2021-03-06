const Box = require('../model/Box');

// Class which will control the Box model
class BoxController{
	async store(req, res){
		// const box = await Box.create({ title : req.body.title });

		// This line and the above are the same in this case
		const box = await Box.create(req.body);
		return res.json(box);
	}

	async show(req, res){
		// Displays only ids of relationship
		// const box = await Box.findById(req.params.id);

		// Displays all data from relationship
		const box = await Box.findById(req.params.id).populate({
			path: 'files',
			options : {
				sort: { createdAt : -1 }
			}
		});

		return res.json(box);
	}
}

// Exports an instance of BoxController
module.exports = new BoxController();