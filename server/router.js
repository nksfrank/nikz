const Blogs = require('./controllers/blog');

module.exports = function(app) {
	app.get('/blogs', Blogs.list);
	app.get('/blogs/:id', Blogs.post);
};