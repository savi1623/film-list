const promise = require('bluebird');

const options = {
  // Initialization Options
  promiseLib: promise,
};

const pgp = require('pg-promise')(options);

const connectionString = 'postgres://postgres:root@localhost:5432/FilmList';
const db = pgp(connectionString);

function getTsList(req, res, next) {
  db.any(`SELECT * FROM toseelist`)
    .then((data) => {
      res.status(200).json({
        tsList: data,
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  // getSeenList: getSeenList,
  getTsList: getTsList,
  // seenMovie: seenMovie,
  // addMovie: addMovie,
  // deleteMovie: deleteMovie,
  // addTs: addTs,
};
