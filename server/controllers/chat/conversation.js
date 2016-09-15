const faker = require('faker');

const threads = 20;
const quantity = 20;
const conversations = [...Array(threads)].map((obj) => {
	obj = [...Array(quantity)].map((entity) => {
		entity = {
			id: faker.random.uuid()
		}
		return entity;
	});
});

exports.get = (req, res, next) => {
	let id = req.params.id;
	if(id === undefined || conversations[id] === undefined)
		return res.status(404).json({status: 404, error: `no conversation with id:${id}`});
	res.json(conversations[id]);
};

exports.post = (req, res, next) => {
	let obj = req.body;

	res.send()
}

exports.delete = (req, res, next) => {

}
