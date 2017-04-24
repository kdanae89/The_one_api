//require dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var app = express();
var port = process.env.PORT || 1337;
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/The_One';

    //middleware
    app.use(methodOverride('_method'));
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(express.static('public'));

    //index path
    app.get('/', function(req, res){
      res.json('hello');
    });

    mongoose.connect(mongoDBURI);

    mongoose.connection.once('open', function(){
      console.log('up and running');
    });

    //listening
    app.listen(port, function(){
      console.log('listening on port ' + port);
    });
