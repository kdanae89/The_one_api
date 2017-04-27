//require dependencies
var express = require('express');
var User = require('../models/user.js');
var Onesie = require('../models/onesie.js');
var Image = require('../models/image.js');

var router = express.Router(); //use router instance

//routes to onesies_____________________________________
router.route('/')

//onesie index
.get(function(req, res){
  Onesie.find({}, function(err, foundOnesies){
    if (err) {
      res.send(err)
    } else {
      res.json({foundOnesies});
    }
  });
})

.post(function(req, res){
  Onesie.create(req.body, function(err, createdOnesie){
    res.json({createdOnesie});
  });
});

//routes to /onesies/:id____________________________________________
router.route('/:id')

//onesie show
.get(function(req, res){
  Onesie.findById(req.params.id, function(err, foundOnesie){
    res.json({foundOnesie});
  });
})

//onesie update
.put(function(req, res){
  Onesie.findByIdAndUpdate(req.params.id, req.body, function(){
    console.log(req.body);
    res.json({message: 'success'});
  });
});

//onesie edit______________________________________________________
router.get('/:id/edit', function(req, res){
  Onesie.findById(req.params.id, function(err, foundOnesie){
    res.json({foundOnesie});
  });
});

//onesie delete_____________________________________________________
router.delete('/:onesieId', function(req, res){
  Onesie.findByIdAndRemove(req.params.onesieId, function(err, foundOnesie){
    console.log(foundOnesie);
  });
});

module.exports = router;
