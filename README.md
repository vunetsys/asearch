# asearch
An academic venue search engine for academics

# Instalation

## Npm
Make sure you have npm on your device. if not use 
```
npm install npm@latest -g 
```

## Front-end

1. Navigate to the Front-end directory of your project and ensure it contains a package.json file: 
```
cd /path/asearch/Front-end
```
2. In your project root directory, run the update command: 
```
npm update
```

## Back-end
1. Navigate to the Back-end directory of your project and ensure it contains a package.json file:
```
cd ../Front-end
```
2. In your project root directory, run the update command: 
```
npm update
```
3. Navigate to the CRUD.js FILE of your project:
```
../Back-end/server/CRUD.js
```

Add the SCOPUS API Key and Institutional Token (ln 6):
```
const options = {
  method: "GET",
  headers: {
    "X-ELS-APIKey": "", //ENTER HERE YOUR INSTUTIONAL API KEY.
    "X-ELS-Insttoken": "", //ENTER HERE YOUR INSTUTIONAL TOKEN.
  },
};
```
4. Navigate to the DatabaseRetreival.js FILE of your project:
```
Back-end/server/DatabaseRetreival.js
```

ENTER Database URI (ln 10):

```
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
```
# Running Asearch

To run the app use the following from a new terminal:
```
cd path/Back-end && npm start & cd path/Front-end && npm start & cd path/Admin && npm start
```



```
