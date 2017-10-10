var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Users        = require('./user.js');
var Q            = require('q');

var storySchema = new Schema({
	user_id:  { type: String, ref: 'Users' },
	photo:    { type: String, default: '' },
	video:    { type: String, default: '' },
	is_delete:  { type: Boolean, default: 0 },
	created_at: { type: Date }
}, {collection: 'story'});

var Story = mongoose.model('Story', storySchema);

var self = module.exports = {
	modelName: Story,
	getByID: function(id) {
		var deferred = Q.defer();
		Story.findById(id, function(err, feeds) {
			if (err) {
				deferred.reject('Error while getting Story');
			}
			else {
				if (feeds) {
					deferred.resolve(feeds);
				} else {
					deferred.reject('No existing Story');
				}
			}
		});
		return deferred.promise;
	}
};