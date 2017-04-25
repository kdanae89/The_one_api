//require dependencies
var mongoose = require('mongoose');

//create schema
var imageSchema = mongoose.Schema({
  img:String
});

//export!
module.exports = mongoose.model('Image', imageSchema);
