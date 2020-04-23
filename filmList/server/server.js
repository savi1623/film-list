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

app.get(
  '/seen/:movieSeen',
  // for each film in the data base get the data for each film
  db.seenMovie
);

app.get('/seenList', db.getSeenList);

app.get('/tsList', db.getTsList);

app.post('/review', (req, res, next) => {
  // post review to new film and add film to seen list
  const { movie, rating, review } = req.body;
  // console.log('hello');
  db.addMovie(movie, rating, review).then(() => {
    // console.log('civl');
    res.status(201).json({
      status: 'success',
      message: 'Inserted film into Seen List',
    });
  });
});

app.post('/tose/:movie', db.addTs);

app.delete(
  '/delete/:movie',
  //delete film from the to see list
  db.deleteMovie
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
