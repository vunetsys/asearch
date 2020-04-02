const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://api.elsevier.com/content/search/scopus?query=%20CONFNAME(ASE)%20AND%20DOCTYPE(cp)%20AND%20SRCTYPE%20(p)%20AND%20SUBJAREA(COMP)';

const MY_API_KEY = '94a42114d5dbf1f6619d513c00a0578b';



request.onload = function() {
    const articles = request.response;
    populateHeader(articles);
    showArticles(articles);
  }
  {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    }

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['search-results'];
    header.appendChild(myH1); 
  }

function showArticles(jsonObj) {
  const articles = jsonObj['entry'];
      
  for (let i = 0; i < articles.length; i++) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');

    myH2.textContent = articles[i].name;
    myPara1.textContent = 'title: ' + heroes[i].title;
    myPara2.textContent = 'authors: ' + heroes[i].creator;
        
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);

    section.appendChild(myArticle);
  }
}