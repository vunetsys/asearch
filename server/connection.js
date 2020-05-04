const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

//connect to mongo db 
const connection = mongoose.connect(
    'mongodb+srv://mbt:looping@asearch-x3bkp.mongodb.net/test?retryWrites=true&w=majority'
    ).then(() => {
        console.log('SRV ~ Connection established successfully.');
    }).catch(() => {
        console.log('SRV ~ Connection to the database failed.');
    });


export default connection;