const promise = require('bluebird');

const options = {
  // Initialization Options
  promiseLib: promise,
};

const pgp = require('pg-promise')(options);

const connectionString = 'postgres://postgres:root@localhost:5432/FilmList';
const db = pgp(connectionString);

module.exports = {
  seenList: seenList,
  tsList: tsList,
  seenMovie: seenMovie,
  addMovie: addMovie,
  deleteMovie: deleteMovie,
  addTs: addTs,
};
