const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Paper schema
const PaperSchema = new Schema({
    title: String,
    author: String,
    publication_date: Date,
    doi: String,
    abstract: String,
    author_keywords: String,
    affiliation: String,
    proceeding: String
});

//Conference schema
const ConferenceSchema = new Schema({
    acronym : String,
    name : String,
    area : String,
    subarea : String, 
    location : String,  
    url : String,
    description : String
});

const Papers = mongoose.model('Papers', PaperSchema);
const Conference = mongoose.model('Conferences', ConferenceSchema);

exports.Conference = Conference;  
exports.Papers = Papers;