//require dependencies
var express = require('express');
var app = express();
var User = ('./models/user.js');
var Onesie = ('./models/onesie.js');
var Image = ('./models/image.js');

var router = express.Router(); //use router instance

module.exports = router;
