//require dependencies
var express = require('express'); //call express
var User = require('../models/user.js');
var Onesie = require('../models/onesie.js');

    //ROUTE FOR API HOME _________________________________________
    //an instance of the express Router
    var router = express.Router();

    //routes to /users
    router.route('/')

    //user index
    .get(function(req, res){
      User.find({}, function(err, foundUsers){
        if (err) {
          res.send(err)
        } else {
          res.send('goog');
        }
      });
    })

    //user create
    .post(function(req, res){
      User.create(req.body, function(err, createdUser){
        console.log(createdUser);
      });
    });



    //all of the routes are prefixed with /api
    // app.use('/api', router);


module.exports = router;
