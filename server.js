//require dependencies
var express = require('express'); //call express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/user.js');
var Onesie = require('./models/onesie.js');
var Image = require('./models/image.js');
var morgan = require('morgan');
var passport = require('passport');
var jwt = require('jwt-simple');
var app = express(); //define app using express
var port = process.env.PORT || 1337; //define port
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/The_One'; //port connection var

    //MIDDLEWARE ________________________________________________
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    app.use(express.static('public'));
    app.use(morgan('dev'));
    app.use(passport.initialize());

    // // pass in passport package to exported function to configure passport
    // require('./config/passport')(passport);

    //CONNECT TO DB ____________________________________________
    mongoose.connect(mongoDBURI);

    mongoose.connection.once('open', function(){
      console.log('db is connected');
    });


    // grab the controllers for individual routes
    var userController = require('./controllers/users.js');
    app.use('/users', userController);
    var onesieController = require('./controllers/onesies.js');
    app.use('/onesies', onesieController);
    var imagesController = require('./controllers/images.js');
    app.use('/images', imagesController);


    // //test route
    app.get('/', function(req, res){
      res.json({message:'this is the api home'});
    });


    //START SERVER _____________________________________________
    app.listen(port, function(){
      console.log('listening on port ' + port);
    });
