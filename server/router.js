const Conversations = require('./controllers/chat/conversation');

module.exports = function(app) {
	app.get('/messages/:id', Conversations.get);
	app.post('/messages/:id', Conversations.post);
};