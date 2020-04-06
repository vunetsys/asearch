# asearch
An academic venue search engine for academics


## Monday 6th of April - Weekly Update:
I have just added the files i have used so far to populate the database.


### Connection to the DB:
The connection.js file establishes a connection to the mongo db cluster. So far, it only opens a connection to the database once and I have to end the execution of the program that populates it (below). More functionallity has to be added.

### Schema:
conferences.js file contains the schema for my Mongo db database. This seems to be final but can be subject to change in the future.

### Populate: 
The Saving_test.js file loops through the conferences.json file i made containing all of the conferences in the field of Computer science that i found on the CSranking website my supervisor provided me. It then creates for each year [2020-2015]
an array of papers i fetch from the Scopus API from Elsevier. 

#### Current Limitations: 
- Waiting an answer from the  VU IT desk to grant me access to the VU network to have full access to the Scopus API.(Request made on the 2nd of April)

#### What i am working on currently : 
- NLP litterature.
- New functions to individually update a Conference for the current year. 
- Looking at a Tech Stack for the cohesion between the Back-end and Front-end of the project --> Currently leaning towards a End-to-End Javascript Project using the MERN (MongoDB - Express.js - React.js - Node.js) Stack with the use of python for the search algorithm (tokenizing,...).
