//Libraries
const mongoose = require("mongoose");
var moment = require("moment");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
const Models = require("../models/conferences");
const IO = require("./Pipelines.js");

//Connection to the database.
const connection = mongoose
  .connect("") // ENTER URI FOR DB HERE 
  .then(() => {
    console.log(
      "ASEARCH-MongoDB -> |Connection established to the asearch database|"
    );
  })
  .catch(() => {
    console.log(
      "ASEARCH-MongoDB -> |Connection failed to the asearch database|"
    );
  });


//-------------------SEARCH FUNCTIONS-------------------//

//retreive data from database --> Get relevant papers based on query.
const getPapersBasedOnUserInput = async (req, res, next) => {
  let query = req.params.query;
  var pipeline = IO.MDH(query);

  try {
    const papers = await Models.Papers.aggregate(pipeline).exec(
      (err, result) => {
        if (result) {
          console.log(result);
          return res.json(result);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const getConferencesBasedOnUserInput = async (req, res, next) => {
  let query = req.params.query;
  if (!query) {
    getConferences(req, res, next);
  } else {
    var pipeline = IO.UserInputConferences(query);

    try {
      const conferences = await Models.Papers.aggregate(pipeline).exec(
        (err, result) => {
          if (result) {
            console.log(result);
            return res.json(result);
          }
          console.log("error");
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
};

//-------------------CONFERENCE FUNCTIONS-------------------//

//retreive data from database --> ALL conferences available.
const getConferences = async (req, res, next) => {
  console.log("entered function to get conferences");
  var query = {};
  try {
    console.log("entered try catch");
    const conferences = await Models.Conference.find(query).exec(
      (err, result) => {
        console.log(
          "ASEARCH-MongoDB -> Currently: |Retreiving List of Conferences|"
        );
        console.log(result);
        if (result) return res.json(result);
      }
    );
  } catch (err) {
    console.log(err);
  }
};

//retreive data from database --> Metadata for a Conference.
const getConferenceMetadata = async (req, res, next) => {
  var name = req.params.conference_id;
  var pipeline = [
    {
      $match: {
        acronym: `${name}`,
      },
    },
  ];

  console.log(
    "ASEARCH-MongoDB ~ Retreiving the metadata for the " + name + " Conference."
  );

  const metadata = await Models.Conference.aggregate(pipeline).exec(
    (err, result) => {
      if (err) throw err;
      console.log(result);
      if (result) return res.json(result);
    }
  );
};

//retreive data from database --> Editions for a given conference.
const EditionBasedSearch = async (req, res, next) => {
  var parsed = req.params.year + "-01-01T00:00:01.289+0000";
  var parsedEnd = req.params.year + "-12-30T00:00:01.289+0000";
  var before2016 = "2015-01-01T00:00:01.289+0000";
  var acronym = req.params.conference_id;
  console.log(acronym);

  if (req.params.year === "404") {
    query = {
      $and: [
        {
          proceeding: acronym,
        },
        {
          publication_date: {
            $lt: moment(before2016).toDate(),
          },
        }
      ],
    };
  } else {
    query = {
      $and: [
        {
          proceeding: acronym,
        },
        {
          publication_date: {
            $gt: moment(parsed).toDate(),
          },
        },
        {
          publication_date: {
            $lt: moment(parsedEnd).toDate(),
          },
        },
      ],
    };
  }
  console.log(query);

  const editions = await Models.Papers.find(query).exec((err, result) => {
    if (err) throw err;
    console.log(result);
    if (result) return res.json(result);
  });
};

//RETREIVE CONFERENCES BASED ON FIELD
const FieldBasedSearch = async (req, res, next) => {
  if(req.params.field === 'Artificial intelligence')  req.params.field = 'AI';
  var query;
  if (req.params.field === "all") {
    query = {};
  } else {
    query = {
      area: req.params.field,
    };
  }

  const Field = await Models.Conference.find(query).exec((err, result) => {
    if (err) throw err;
    console.log(result);
    if (result) return res.json(result);
  });
};


exports.getPapersBasedOnUserInput = getPapersBasedOnUserInput;
exports.getConferencesBasedOnUserInput = getConferencesBasedOnUserInput;
exports.getConferences = getConferences;
exports.getConferenceMetadata = getConferenceMetadata;
exports.EditionBasedSearch = EditionBasedSearch;
exports.FieldBasedSearch = FieldBasedSearch;
