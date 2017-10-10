var express = require('express');
var ObjectId = require('mongodb').ObjectID;

var Story = require('./models/story.js');
var StoryModel = Story.modelName;
var Users = require('./models/user.js');

var user_fields = '_id name lastname';

/**
 * Add new story
 * Request body: {name, owner, corps, is_private}
**/
exports.add = function(req, res) {
  var created_at = new Date();
  
  var story1 = {
    user_id: 11,
    photo: "http://www.theoi.com/image/T17.1Helios_sm.jpg",
    video: "",
    is_delete:  0,
    created_at: created_at
  };
  var story2 = {
    user_id: 12,
    photo: "http://www.theoi.com/image/T17.1BHelios.jpg",
    video: "",
    is_delete:  0,
    created_at: created_at
  };
  
  var newStory = new StoryModel(story2);
  newStory.save(function(err, response) {
    if(err) {
      res.json({Status: false, Message: "Error while adding new story"});
      return;
    }
    try {
      res.json({Status: true, Data: response});
    } catch (err) {
      console.log(err);
      res.json({Status: false, Message: 'Error while creating response'});
    }
  });
}