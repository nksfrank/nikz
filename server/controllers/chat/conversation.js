const faker = require('faker');

const threads = 20;
const quantity = 20;
const conversations = [...Array(threads)].map((obj) => {
	obj = [...Array(quantity)].map((entity) => {
		entity = {
			id: faker.random.uuid(),
			timeStamp: Date.now(),
			message: "lorem ipsum"
		}
		return entity;
	});

	return {
		id: faker.random.uuid(),
		messages: obj
	}
});

conversations.push({
	id: "1",
	messages: [...Array(quantity)].map((entity) => {
		entity = {
			id: faker.random.uuid(),
			timeStamp: Date.now(),
			message: "lorem ipsum"
		}
		return entity;
	})
});

exports.getAll = (req, res, next) => {
	res.json(conversations.map(entity => {
		return entity.id;
	}));
};

exports.get = (req, res, next) => {
	let conversationId = req.params.conversationId;
	// if(conversationId === undefined)
	let conversation = conversations.find(entity => entity.id === conversationId);
	if(conversation.id === undefined)
		return res.status(404).json({status: 404, error: `no conversation with id:${conversationId}`});
	res.json(conversation);
};

exports.post = (req, res, next) => {
	let conversationId = req.params.conversationId,
			obj = req.body;
	obj["timeStamp"] = Date.now();
	obj["id"] = faker.random.uuid();
	var conversation = conversations.find(entity => entity.id === conversationId);
	conversation.messages.push(obj);
	res.send(obj);
}

exports.delete = (req, res, next) => {

}

exports.put = (req, res, next) => {
	let conversationId = req.params.conversationId,
			messageId = req.params.messageId,
			conversation = conversations.find(entity => entity.id === conversationId),
			msg = conversation.find(entity => entity.id === messageId);
	msg.message = req.body;
}
