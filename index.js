'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const petRouter = express.Router();
const PetfulService = require('./service');
const Queue = require('./queue');

const { PORT, CLIENT_ORIGIN } = require('./config');
// const { dbConnect } = require('./db-mongoose');
const {dbConnect} = require('./db-knex');

const app = express();

petRouter
  .route('/api/cat')
  .get((req, res, next) => {
    PetfulService.getCats(req.app.get('db'))
      .then(cats => {
        const catQ = new Queue();
        for (let i = 0; i < cats.length; i++) {
          catQ.enqueue(cats[i]);
        }
        res.json({
          first: catQ.peak(),
          display: catQ.display()
        });
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    PetfulService.getCats(req.app.get('db'))
      .then(cats => {
        const catQ = new Queue();
        for (let i = 0; i < cats.length; i++) {
          catQ.enqueue(cats[i]);
        }
        const dog = catQ.dequeue();
        res.json(204).end();
      })
      .catch(next);

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
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
  dbConnect();
  runServer();
}

module.exports = { app };
