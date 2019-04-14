'use strict';

const knex = require('knex');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const PetfulRouter = require('./Routes/router');

const { PORT, DB_URL, CLIENT_ORIGIN } = require('./config');
// const { dbConnect } = require('./db-mongoose');
const {dbConnect} = require('./db-knex');

const app = express();

const db = knex({
  client: 'pg',
  connection: DB_URL
});

app.set('db', db);

app.use(helmet());

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);


app.use('/', PetfulRouter);


app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  // dbConnect();
  runServer();
}

module.exports = app;