const mongoose = require('mongoose');



// will each hold a reference to a multiple document from the edition collection
var conference_schema = new mongoose.Schema({
    acronym: String,
    fullname: String,
    area: String,
    subarea: String,
    location: String,
    _year: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'editions'
    }
});

var conferences = mongoose.model('conferences', conference_schema);




module.export = conferences;