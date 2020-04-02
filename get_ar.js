const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URI
const uri = "mongodb+srv://mbt:looping@asearch-x3bkp.mongodb.net/test";
// Database Name
const dbName = "Conferences";
const MY_API_KEY = "cf6978ad79cc59d054a52b4ef51a8c55";


// Use connect method to connect to the server
MongoClient.connect(uri, function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);

    get_api_data(db, function() {
        client.close();
    });

});

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('names_conferences');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
}

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

const get_api_data = function(){
    resp = requests.get("https://api.elsevier.com/content/search/scopus?query=%20CONFNAME(ASE)%20AND%20DOCTYPE(cp)%20AND%20SRCTYPE%20(p)%20AND%20SUBJAREA(COMP)",
    headers={'Accept':'application/json',
             'X-ELS-APIKey': MY_API_KEY});

    var results = resp.json();
    str_results = JSON.stringify(results['dc:title']);
    console.log(str_results);
}
