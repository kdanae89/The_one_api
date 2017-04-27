//require dependencies
var express = require('express');
var app = express();
var Onesie = require('../models/onesie.js');
var Image = require('../models/image.js');

var router = express.Router(); //use router instance

//finds and sends all images
router.get('/', function(req, res){
  Image.find({}, function(err, foundImages){
    res.json({foundImages});
  });
});

module.exports = router;
