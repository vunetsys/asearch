//SEARCH PIPELINE FOR PAPER SEARCH
const MultiDimensionalHierarchy = (query) => {
  console.log(
    "ASEARCH-MongoDB ~ Retreiving List of papers based on input = " +
      query +
      "."
  );

  var pipeline = [
    {
      $search: {
        compound: {
          must: [
            {
              text: {
                query: `"\"${query}"\"`,
                path: "title",
                fuzzy: {
                  maxEdits: 1,
                  maxExpansions: 100,
                }
              },
            },
          ],
          should: [
            {
              text: {
                'query': `"\"${query}\""`,
                path: "abstract",
                fuzzy : {},
                "score": { "boost": { "value": 5 } }
              },
            },
            {
              text: {
                'query': `"\"${query}\""`,
                path: "author_keywords",
                fuzzy : {},
                "score": { "boost": { "value": 10 } }
              },
            },
          ],
          minimumShouldMatch: 1,
        },
      },
    },{
      '$limit': 2500
    },
    {
      $project: {
        title: 1,
        abstract: 1,
        author_keywords: 1,
        author: 1,
        publication_date: 1,
        doi :1,
        proceeding: 1,
        score: {
          $meta: "searchScore",
        },
      },
    },
  ];
  console.log("Built Pipeline!");
  return pipeline;
};


const UserInputConferences = (query) => {
  console.log(
    "ASEARCH-MongoDB ~ Retreiving List of Conferences based on input = " +
      query +
      "."
  );

  var pipeline = [
    {
      '$search': {
        'text': {
          'query': `"\"${query}\""`,
          'path': ["abstract","author_keywords","title","proceeding"],
        },
      },
    }, {
      '$project': {
        'title': 1, 
        'abstract': 1, 
        'author_keywords': 1, 
        'author': 1, 
        'publication_date': 1, 
        'proceeding': 1, 
        'score': {
          '$meta': 'searchScore'
        }
      }
    }, {
      '$limit': 2500
    }, {
      '$group': {
        '_id': '$proceeding', 
        'Relevancy': {
          '$sum': '$score'
        }
      }
    }, {
      '$sort': {
        'Relevancy': 1
      }
    }, {
      '$lookup': {
        'from': 'conferences', 
        'localField': '_id', 
        'foreignField': 'acronym', 
        'as': 'parent'
      }
    }, {
      '$project': {
        '_id': 0,
      }
    }
  ];

  console.log("Built Pipeline!");
  return pipeline;
};


exports.UserInputConferences = UserInputConferences;
exports.MDH = MultiDimensionalHierarchy;

