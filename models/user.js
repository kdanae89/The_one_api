//require dependencies
var mongoose = require('mongoose');
var Onesie = require('./onesie.js');

//user schema
var userSchema = mongoose.Schema({
  username: {type:String, required: true, unique:true},
  password: {type:String, required: true},
  onesies: [Onesie.schema]
});

//export!
module.exports = mongoose.model('User', userSchema);
