const promise = require('bluebird');
const moment = require('moment');
const options = {
  // Initialization Options
  promiseLib: promise,
};

const pgp = require('pg-promise')(options);

const connectionString = 'postgres://postgres:root@localhost:5432/FilmList';
const db = pgp(connectionString);

function getSeenList(req, res, next) {
  db.any(`SELECT title FROM seenlist`)
    .then((data) => {
      res.status(200).json({
        list: data,
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getTsList(req, res, next) {
  db.any(`SELECT title FROM toseelist`)
    .then((data) => {
      res.status(200).json({
        tsList: data,
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addTs(req, res, next) {
  const movie = req.params.movie;
  db.none(`Insert into toseelist(title) Values('${movie}')`).then((data) => {
    res.status(201).json({
      status: 'success',
      message: 'Inserted film into To See List',
    });
  });
}

function addMovie(movie, rating, review) {
  console.log(movie);
  console.log(rating);
  console.log(review);
  console.log('post called');
  const date = moment().format('MMM DD YYYY');
  return db.none(
    `Insert into seenlist(title, rating, review, date) Values('${movie}', '${rating}', '${review}', '${date}')`
  );
}

function seenMovie(req, res, next) {
  const movie = req.params.movieSeen;
  // console.log(movie);
  db.any(`Select * from seenlist where title = '${movie}'`)
    .then((data) => {
      // console.log(data);
      res.status(200).json({
        movie: data,
      });
    })
    .catch((err) => {
      throw err;
    });
}

function deleteMovie(req, res, next) {
  console.log('delete called');
  const movie = req.params.movie;
  db.none(`Delete from toseelist Where title= '${movie}'`).then(() => {
    res.status(204).json({
      status: 'success',
      message: 'Film removed from to see list',
    });
  });
}

module.exports = {
  getSeenList: getSeenList,
  getTsList: getTsList,
  seenMovie: seenMovie,
  addMovie: addMovie,
  deleteMovie: deleteMovie,
  addTs: addTs,
};
