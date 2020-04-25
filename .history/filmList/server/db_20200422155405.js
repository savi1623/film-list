const promise = require('bluebird');

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

function addTs(title) {
  return db.none(`Insert into toseelist(title) Values (title)`);
}

module.exports = {
  getSeenList: getSeenList,
  getTsList: getTsList,
  // seenMovie: seenMovie,
  // addMovie: addMovie,
  // deleteMovie: deleteMovie,
  // addTs: addTs,
};
