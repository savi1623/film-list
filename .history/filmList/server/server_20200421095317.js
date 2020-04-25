const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// const db = require('./db/controllers.js');
// const url = 'https://superheroapi.com/api/10217002715925793';

const port = 5000;
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
