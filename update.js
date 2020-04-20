//Imports 
const rookout = require('rookout');
rookout.start({
    token: 'ddecd8cf42e785309ffbaf59c9b5f7ea75ca5a990fec438f078d04fbaedee062'
})
const assert= require('assert');
const Conference= require('../models/conferences');



function FindConf(){
        var editions = '2020';
        try {
            Conference.findOne(
                //query
                { acronym_id: 'AAAI', edition_id : editions, papers: [] },
                // callback function
                (err, conference) => {
                    if (err) return res.status(200).send(err);
                    return res.status(200).send(conference);
                },
            );
            done();
        }catch(err){
            console.log(error);
        }
}

