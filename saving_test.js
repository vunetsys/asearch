//Imports 
const fetch = require('node-fetch');
const rookout = require('rookout');
rookout.start({
    token: 'ddecd8cf42e785309ffbaf59c9b5f7ea75ca5a990fec438f078d04fbaedee062'
})
const assert= require('assert');
const json_conferences = require('../json/conferences.json');
const Conference= require('../models/conferences');


function createURL(conf_name, year) { return 'https://api.elsevier.com/content/search/scopus?query=CONFNAME(' + conf_name + ')%20AND%20PUBYEAR%20%3D%20' + year + '%20AND%20DOCTYPE(cp)%20AND%20SRCTYPE(p)&field=dc:creator,dc:title,affilname,affiliation-city,affiliation-country&apiKey=7f59af901d2d86f78a1fd60c1bf9426a'; }


async function getPapers(url) {
    const temp = new Array();
    try {
        const response = await fetch(url, {
            method: 'GET',
            accept: 'application/json'
        });
        console.log('got response \n');
        const json = await response.json();

        for (let i = 0; i < json['search-results']['entry'].length; i++) {
            temp[i] = {
                title_id: json['search-results']['entry'][i]['dc:title'],
                author: json['search-results']['entry'][i]['dc:creator']
            };
        }

    } catch (error) {
        console.log(error);
    }
    return temp;
}

async function getEdition(conf_name) {
    var years = [2020, 2019, 2018, 2017, 2016, 2015];
    var temp = new Array();

    try {

        for (var i = 0; i < years.length; i++) {
            temp[i] = {
                edition_id: years[i],
                papers: await getPapers(createURL(conf_name, years[i]))
            };
        }

    } catch (error) {
        console.log(error);
    }

    return temp;
}

async function createNewConf(conferences) {
    try {
        var temp = new Conference({
            acronym_id: conferences.acronym,
            fullname: conferences.fullname,
            area: conferences.area,
            subarea: conferences.subarea,
            location: conferences.location,
            editions: await getEdition(conferences.acronym),
        });
    } catch (error) {
        console.log(error);
    }
    return temp;
}

describe('Saving records', function () {
    it('Saved records to the database', async function () {
        var conferences = [];
        try {
            for (var i = 0; i <= json_conferences.length; i++) {
                conferences[i] = await createNewConf(json_conferences[i])
                conferences[i].save().then(function (done) {
                    console.log('Added ! \n');
                    assert(conferences[i].isNew === False);
                    done();
                });
            }
            console.log('finished adding records !');
            mongoose.connection.close();
        } catch (error) {
            console.log(error);
        }
    });
});
