const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const dbManipulator = require('./data-manipulation.js');

//Body parser for incoming requests.
app.use(BodyParser.json());

app.get('/papers', dbManipulator.getPapers);

app.get('/conferences', dbManipulator.getConferences);

app.listen(5000);
