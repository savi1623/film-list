const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db.js');
const url = 'http://www.omdbapi.com/?apikey=1352744d&t=';

// const key = '1352744d';
//key for api

const port = 5000;
app.use(bodyParser.json());
app.use(cors());

app.get('/tosee/:movieTs', (req, res, next) => {
  // for each in the to see list get each films data
  const { movieTs } = req.params;
  axios.get(`${url}${movieTs}`).then((data) => {
    // console.log(movieTs);
    res.send(data.data);
  });
});

app.get('/seen/:movieSeen', (req, res, next) => {
  // for each film in the data base get the data for each film
});

app.get('/seenList', db.getSeenList);

app.get('/tsList', db.getTsList);

app.post('/review/:movie', (req, res, next) => {
  // post review to new film and add film to seen list
});

app.post('/tose/:movie', (req, res, next) => {
  //post movie film to db
});

app.delete('/:movie', (req, res, next) => {
  //delete film from the to see list
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
