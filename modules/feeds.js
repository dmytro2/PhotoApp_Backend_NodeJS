var express = require('express');
var ObjectId = require('mongodb').ObjectID;

var Story = require('./models/story.js');
var StoryModel = Story.modelName;
var Users = require('./models/user.js');

var user_fields = '_id name lastname';

/**
 * get feed list by userID
 * Request Param: {userid} 
**/
exports.getFeeds = function(req, res) {
  var user_id = req.params.user_id;
  
	StoryModel.find( { user_id: { $ne: user_id } } )
  .exec(function(err, docs) {
		if(err) {
			console.log(err);
			res.json({message: "error", Status:"Error while finding story"});
			return;
		}
		res.json({message: "success", items: docs});
	})
}