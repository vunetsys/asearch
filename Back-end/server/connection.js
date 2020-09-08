const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

//Connection to DATABASE
const connection = mongoose.connect(
    'mongodb+srv://asearchadmin:MDHThesis2020@asearch.b0ro1.gcp.mongodb.net/Asearch'
    ).then(() => {
        console.log('SRV ~ Connection established successfully.');
    }).catch(() => {
        console.log('SRV ~ Connection to the database failed.');
    });


export default connection;

