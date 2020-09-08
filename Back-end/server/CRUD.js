//Libraries
const Models = require("../models/conferences");
const fetch = require("node-fetch");

//SCOPUS API PARAMETERS
const options = {
  method: "GET",
  headers: {
    "X-ELS-APIKey": "cf6978ad79cc59d054a52b4ef51a8c55", //ENTER HERE YOUR INSTUTIONAL API KEY.
    "X-ELS-Insttoken": "7f2dfa84bf0fdd4d1c4aef88e3fe2fce", //ENTER HERE YOUR INSTUTIONAL TOKEN.
  },
};

//SCOPUS API CURSOR URL
const url = (conf_name) => {
  return (
    "https://api.elsevier.com/content/search/scopus?view=COMPLETE&cursor=*&query=CONFNAME(" +
    conf_name +
    ")%20AND%20DOCTYPE(cp)%20AND%20SRCTYPE(p)&field=dc:creator,dc:title,dc:description,affilname,affiliation-city,affiliation-country,authkeywords,prism:doi,prism:doi,prism:coverDate"
  );
};


//CREATE A NEW CONFERENCE
const Create = async (req, res, next) => {
  var fullname = req.body.fullname;
  var acronym = req.body.acronym;
  var area = req.body.area;
  var subarea = req.body.subarea;
  var location = "worldwide";
  var url = req.body.url;
  var description = req.body.desc;
  console.log(fullname, acronym);

  try {
    const final = new Models.Conference({
      acronym: acronym,
      fullname: fullname,
      area: area,
      subarea: subarea,
      location: location,
      url: url,
      description: description,
    });
    console.log(final);
    final.save();
  } catch (err) {
    console.log(err);
  }
};


//UPDATE AN EXISTING CONFERENCE
const Update = async (req, res, next) => {
  var id = req.body.id;
  var fullname = req.body.fullname;
  var acronym = req.body.acronym;
  var area = req.body.area;
  var subarea = req.body.subarea;
  var location = "worldwide";
  var url = req.body.url;
  var description = req.body.desc;

  console.log(req, id);
  try {
    Models.Conference.findByIdAndUpdate(id, {
      acronym: acronym,
      name: fullname,
      area: area,
      subarea: subarea,
      location: location,
      url: url,
      description: description,
    });
  } catch (error) {
    console.log(error);
  }
};

//DELETE AN EXISTING CONFERENCE
const Delete = async (req, res, next) => {
  var id = req.body.id;

  console.log(req, id);
  try {
    Models.Conference.findByIdAndDelete(id, function (err) {
      if (err) throw newError(error);
      console.log("Successful deletion");
    });
  } catch (error) {
    console.log(error);
  }
};


//FETCH AND SAVE PAPERS FOR AN EXISTING CONFERENCE
const Fetch = async (req, res, next) => {
  var acronym = req.body.id;
  let final = new Array();
  console.log(new Date(), " ~ Creating new conference document. >>", acronym);
  try {
    var conf_papers = await getPapers(final, url(acronym), acronym);
    for (var i = 0; i <= conf_papers.length; i++) {
      conf_papers[i].save();
      console.log("done with papers");
    }
  } catch (err) {
    console.log(err);
  }
};

function savePapers(json, conf_name) {
  let temp = new Array();
  for (let i = 0; i < json["search-results"]["entry"].length; i++) {
    temp[i] = new Models.Papers({
      title: json["search-results"]["entry"][i]["dc:title"],
      author: json["search-results"]["entry"][i]["dc:creator"],
      publication_date: json["search-results"]["entry"][i]["prism:coverDate"],
      doi: json["search-results"]["entry"][i]["prism:doi"],
      abstract: json["search-results"]["entry"][i]["dc:description"],
      author_keywords: json["search-results"]["entry"][i]["authkeywords"],
      proceeding: conf_name,
    });
  }
  return temp;
}

async function getPapers(final, url, conf_name) {
  let papers = new Array();
  let total_amount_of_papers;
  let next;
  let position = 2;

  try {
    let response = await fetch(url, options);
    let json = await response.json();
    total_amount_of_papers = json["search-results"]["opensearch:totalResults"];

    if (
      json["search-results"]["cursor"]["@current"] ===
      json["search-results"]["cursor"]["@next"]
    ) {
      return final;
    } else {
      if (json["search-results"]["link"][position]["@ref"] == "prev") {
        next = json["search-results"]["link"][position + 1]["@href"];
      } else next = json["search-results"]["link"][position]["@href"];

      papers = savePapers(json, conf_name);
      if (papers) final = final.concat(papers);

      console.log(
        ">>",
        final.length / 25,
        "/",
        Math.round(total_amount_of_papers / 25)
      );
      if (final.length === total_amount_of_papers) {
        return final;
      } else return await getPapers(final, next, conf_name);
    }
  } catch (error) {
    console.log(error);
  }
}



exports.add = Create;
exports.delete = Delete;
exports.update = Update;
exports.getPapers = Fetch;
