const Conversations = require('./controllers/chat/conversation');

module.exports = function(app) {
	app.get('/messages/:conversationId', Conversations.get);
	app.get('/messages/', Conversations.getAll);
	app.post('/messages/:conversationId', Conversations.post);
	app.post('/messages/:conversationId/:messageId', Conversations.put);
};