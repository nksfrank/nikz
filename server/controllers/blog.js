const faker = require('faker');

exports.list = (req, res, next) => {
	res.send({'welcome': 'hello'});
};

exports.post = (req, res, next) => {
    let id = req.params.id;
    res.send({post: id});
}