var mongoose   = require('mongoose');
mongoose.connect(mongoConnectionString);
var db = mongoose.connection;
db.on('error', function(err){
  console.log('DB connection failed with error:', err);
});
db.once('open', function(){
  console.log('Connected to corpsDB on Localhost.');
});
  
var usersCtrl = require('./users.js');
var storyCtrl = require('./story.js');
var feedsCtrl = require('./feeds.js');

module.exports = function(router) {
  // middleware to use for all requests
	router.use(function(req, res, next) {
		// do logging
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});
  
  //Story Endpoints
  router.route('/feed/:user_id')
		.get(feedsCtrl.getFeeds);
  router.route('/story')
    .post(storyCtrl.add);
};