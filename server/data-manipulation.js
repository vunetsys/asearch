const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
const Conference = require('../models/conferences')
const Papers = require('../models/conferences')


//Connection to the database.
const connection = mongoose.connect(
    'mongodb+srv://mbt:looping@asearch-x3bkp.mongodb.net/test?retryWrites=true&w=majority'
    ).then(() => {
        console.log('SRV ~ Connection established successfully.');
    }).catch(() => {
        console.log('SRV ~ Connection to the database failed.');
    });


/*Papers*/

//retreive data from database --> ALL papers available.
const getPapers = async (req, res, next) => {
    const papers = await Papers.find().exec();
    if(papers) res.json(papers);
}

//retreive data from database --> Get relevant papers based on query *NLP*.
const getPapersBasedOnUserInput = async (req, res, next) => {
    var query = req.body;

}

//retreive data from database --> Metadata for a Paper.
const PaperMetadata = async (req, res, next) => {
    //get ID from the request.
    //send back to the client metadata
}


/*CONFERENCES*/

//retreive data from database --> ALL conferences available.
const getConferences = async (req, res, next) => {
    const conferences = await Conference.find().exec();
    if (conferences) res.json(conferences);
}

//retreive data from database --> Metadata for a Conference.
const ConferenceMetadata = async (req, res, next) => {

}

//retreive data from database --> Editions for a given conference.
const EditionBasedSearch = async (req, res, next) => {

}


exports.getPapers = getPapers;
exports.getConferences = getConferences;