//Libraries
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const DATABASE = require("./DatabaseRetreival.js");
const CRUD = require("./CRUD");
const PORT = 5000;

console.log(new Date() + " => Launched Server on the following port: " + PORT);


//FRONT-END 
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


//Body parser and CORS
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.listen(PORT);


//------------API ENDPOINTS------------//
//Search ENDPOINTS
app.get("/searchbe/papers/:query", DATABASE.getPapersBasedOnUserInput);
app.get("/searchbe/conferences/:query", DATABASE.getConferencesBasedOnUserInput);

//Conference Endpoints 
app.get("/conferencesbe", DATABASE.getConferences);
app.get("/conferencesbe/metadata/:conference_id/", DATABASE.getConferenceMetadata);
app.get("/conferencesbe/:conference_id/:year", DATABASE.EditionBasedSearch);
app.get("/conferencesbe/:field", DATABASE.FieldBasedSearch);

//CRUD + Fetch
app.post("/add/conference", CRUD.add);
app.post("/update/conference", CRUD.update);
app.post("/delete/conference", CRUD.delete);
app.post("/get/papers", CRUD.getPapers);

