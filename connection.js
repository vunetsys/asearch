const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

//connect to mongo db 
mongoose.connect('mongodb+srv://mbt:looping@asearch-gmzcu.gcp.mongodb.net/asearch');

mongoose.connection.once('open', function(){
    console.log('connection has been established!')
}).on('error', function(){
    console.log('connection error!', error);
});  