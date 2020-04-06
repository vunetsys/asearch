const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create new schema and model object
const EditionPapersSchema = new Schema({
    title_id: String,
    author: String,
    abstract: String,
    author_keywords: String
});


// will each hold a reference to a multiple document from the papers collection
const ConferenceEditionSchema = new Schema({
    edition_id: Number,
    papers: [EditionPapersSchema]
});

// will each hold a reference to a multiple document from the Edition collection
const ConferenceSchema = new Schema({
    acronym_id : String,
    name : String,
    area : String,
    subarea : String, 
    location : String,  
    editions : [ConferenceEditionSchema]
});

const Conference = mongoose.model('conferences', ConferenceSchema);

module.exports = Conference;  