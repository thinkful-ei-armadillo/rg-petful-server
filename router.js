'use strict';

const express = require('express');
const PetfulService = require('./service');
const petRouter = express.Router();
const Queue = require('./queue');

petRouter
  .route('/api/cat')
  .get((req, res, next) => {
    console.log('getting cats');
    PetfulService.getCats(req.app.get('db'))
      .then(cats => {
        console.log(cats);
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
        const cat = catQ.dequeue();
        res.json(204).end();
      })
      .catch(next);
  });

petRouter
  .route('/api/dog')
  .get((req, res, next) => {
    PetfulService.getDogs(req.app.get('db'))
      .then(dogs => {
        const dogQ = new Queue();
        for (let i = 0; i < dogs.length; i++) {
          dogQ.enqueue(dogs[i]);
        }
        res.json({
          first: dogQ.peak(),
          display: dogQ.display()
        });
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    PetfulService.getDogs(req.app.get('db'))
      .then(dogs => {
        const dogQ = new Queue();
        for (let i = 0; i < dogs.length; i++) {
          dogQ.enqueue(dogs[i]);
        }
        const dog = dogQ.dequeue();
        res.json(204).end();
      })
      .catch(next);
  });

module.exports = petRouter;