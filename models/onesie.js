var mongoose = require('mongoose');
var Image = require('./image.js');

//create schema
var onesieSchema = mongoose.Schema({
  userId:String,
  title:String,
  images: [Image.schema],
  date: Date
});

//export!
module.exports = mongoose.model('Onesie', onesieSchema);
