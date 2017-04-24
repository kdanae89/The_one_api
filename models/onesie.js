var mongoose = require('mongoose');
var Image = require('./image.js');

//create schema
var onesieSchema = mongoose.Schema({
  userId:String,
  title:String,
  images: [Image.schema],
  date: Date
});

//create model
var Onesie = mongoose.model('Onesie', onesieSchema);

//export!
module.exports = Onesie;
