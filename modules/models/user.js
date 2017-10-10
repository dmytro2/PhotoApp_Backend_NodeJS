var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var userSchema = new Schema({
  name:       String,
  lastname:   String,
  photo:      String,
  email:      String, 
  password:   String,
  birthday:   Date,
  phone:      String,
  country:    String,
  postcode:   String,
  verified:   { type: Number, default: -1 },
  created_at: { type: Date }
}, {collection: 'users' });

module.exports = mongoose.model('Users', userSchema);