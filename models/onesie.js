var mongoose = require('mongoose');
var Image = require('./image.js');

//create schema
var onesieSchema = mongoose.Schema({
  userId:{type:String, required:[true, 'You must be logged in to create a onesie']},
  title:{type:String, required:true},
  color:{type:String, enum:['Pastel Pink', 'Baby Blue', 'White', 'Neutral Yellow', 'Light Green'], required:[true, 'Please pick a onesie color']},
  size:{type:String, enum:['0-3', '3-6', '6-9', '9-12', 'custom'], required:[true, 'Please pick a onesie size']},
  images: [Image.schema],
  date: Date
});

//export!
module.exports = mongoose.model('Onesie', onesieSchema);
