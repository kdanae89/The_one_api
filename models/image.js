//require dependencies
var mongoose = require('mongoose');

//create schema
var imageSchema = mongoose.Schema({
  img:String
});

//create model
var Image = mongoose.model('Image', imageSchema);

//export!
module.exports = Image;
