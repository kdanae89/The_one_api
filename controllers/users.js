//require dependencies
var express = require('express'); //call express
var User = require('../models/user.js');
var Onesie = require('../models/onesie.js');
var passport = require('passport');

// pass in passport package to exported function to configure passport
require('../config/passport')(passport);

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
      res.json({foundUsers});
    }
  });
})

//user register
.post(function(req, res){
  //error for nonexistant user
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'The username or password entered is invalid.'});
  } else {
    //creates the user with credentials
    var user = new User({
      username: req.body.username,
      password: req.body.password
    });
    // save new user
    user.save(function(err) {
      if (err) {
        console.log(err);
        return res.json({success: false, msg: 'This username is taken.'});
      }
      res.json({success: true, msg: 'Created successfully.'});
    });
  }
})

//user login
.post(function(req, res) {
  //finds the user by entered username
  User.findOne({
    username: req.body.username
  }, function(err, foundUser) {
    if (err) {
      console.log(err);
    } if (!foundUser) {
      res.json({success: false, msg: 'This username does not exist.'});
    } else {
      // check for password match
      foundUser.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
          // if user is found & password is correct, create a token!
          var token = jwt.encode(foundUser, config.secret);
          var username = req.body.username;
          var userId = foundUser._id;
          // return token, username, and userId as json for saving in brower localStorage
          res.json({success: true, token: token, username: username, userId: userId});
        } else {
          res.send({success: false, msg: 'Invalid password.'});
        }
      });
    }
  });
});

//routes to /users/:id____________________________________________
router.route('/:id')

//user show
.get(function(req, res){
  User.findById(req.params.id, function(err, foundUser){
    res.json({foundUser});
  });
})

//user update
.put(function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body, function(){
    console.log(req.body);
    res.json({message: 'success'});
  });
});

//user edit______________________________________________________
router.get('/:id/edit', function(req, res){
  User.findById(req.params.id, function(err, foundUser){
    res.json({foundUser});
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
