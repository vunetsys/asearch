const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

//connect to mongo db 
mongoose.connect('mongodb://localhost:27017/asearch');

mongoose.connection.once('open', function(){
    console.log('connection has been established!')
}).on('error', function(){
    console.log('connection error!', error);
});  