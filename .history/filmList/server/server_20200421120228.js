const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// const db = require('./db/controllers.js');
// const url = 'https://superheroapi.com/api/10217002715925793';

const key = 'aef0869af33657707f52cc8979eba633';
//key for api

const port = 5000;
app.use(bodyParser.json());
app.use(cors());

app.get('/tosee/:movieTs', (req, res, next) => {
  // for each in the to see list get each films data
});

app.get('/seen/:movieSeen', (req, res, next) => {
  // for each film in the data base get the data for each film
});

app.get('/seenList', (req, res, next) => {
  //get the seen list, titles, as an array
});

app.get('/tsList', (req, res, next) => {
  //get the to see list, titles, as an array
});

app.post('/review/:movie', (req, res, next) => {
  // post review to new film and add film to seen list
});

app.delete('/:movie', (req, res, next) => {
  //delete film from the to see list
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
