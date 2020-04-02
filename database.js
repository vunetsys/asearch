var mongoose = require('mongoose')
  , _ = require('lodash'),
  conferences_json = require('./conferences.json');


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

mongoose.connect('mongodb+srv://mbt:looping@asearch-x3bkp.mongodb.net/test', options);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("Connected correctly to server");

  

  db.close();
});



exports.reset = function( req, res ) {
  console.log("inside populate function");

  // get refs to the models we defined above
  
  //var editions = mongoose.model('editions');
  //var papers = mongoose.model('papers');

  // clear all existing documents from the collections
  conferences.find().remove();
  // editions.find().remove();
  // papers.find().remove();

  for( var i = 0; i < conferences_json.length; i++ ) {
    console.log("%s", i);
    new conferences( conferences_json[ i ] ).save();
    console.log("saved new schema")
  }

  res.redirect("/");
};