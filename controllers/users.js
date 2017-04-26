//require dependencies
var express = require('express'); //call express
var User = require('../models/user.js');
var Onesie = require('../models/onesie.js');

    //ROUTE FOR API HOME _________________________________________
    //an instance of the express Router
    var router = express.Router();

    //routes to /users____________________________________________
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

    //routes to /users/:id____________________________________________
    router.route('/:id')

    //user show
    .get(function(req, res){
      User.findById(req.params.id, function(err, foundUser){
        res.send(foundUser)
      });
    })

    //user update
    .put(function(req, res){
      User.findByIdAndUpdate(req.params.id, req.body, function(){
        console.log(req.body);
      });
    });

    //user edit______________________________________________________
    router.get('/:id/edit', function(req, res){
      User.findById(req.params.id, function(err, foundUser){
        res.send(foundUser)
      });
    });

    //user delete_____________________________________________________
    router.delete('/:userId', function(req, res){
      User.findByIdAndRemove(req.params.userId, function(err, foundUser){
        console.log(foundUser);
      });
    });



    //all of the routes are prefixed with /api
    // app.use('/api', router);


module.exports = router;
