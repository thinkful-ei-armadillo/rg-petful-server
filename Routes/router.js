'use strict';

const express = require('express');
const PetfulService = require('../Services/service');
const petRouter = express.Router();
const Queue = require('../Data Structure/queue');

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
  });

petRouter
  .route('/api/cat/:catID')
  .delete((req, res, next) => {
    const catId = req.params.catID;
    PetfulService.getCats(req.app.get('db'))
      .then(cats => {
        const catQ = new Queue();
        for (let i = 0; i < cats.length; i++) {
          catQ.enqueue(cats[i]);
        }
        const cat = catQ.dequeue();
        if(cat.id === parseInt(catId)){
          return PetfulService.adopt(req.app.get('db'), cat.id, 'cats')
            .then(() => res.status(204).end());
        }
        return res.status(400).json({ error: 'Sorry Can only adopt cat that came first' });
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
        console.log(dogQ.peak())
        res.json({
          first: dogQ.peak(),
          display: dogQ.display()
        });
      })
      .catch(next);
  });

petRouter
  .route('/api/dog/:dogId')
  .delete((req, res, next) => {
    const dogId = req.params.dogId;
    PetfulService.getDogs(req.app.get('db'))
      .then(dogs => {
        const dogQ = new Queue();
        for (let i = 0; i < dogs.length; i++) {
          dogQ.enqueue(dogs[i]);
        }
        const dog = dogQ.dequeue();
        if(dog.id === parseInt(dogId)){
          return PetfulService.adopt(req.app.get('db'), dog.id, 'dogs')
            .then(() => res.status(204).end());
        }
        return res.status(400).json({ error: 'Sorry can only adopt dog that came first' });
      })
      .catch(next); 
  });

module.exports = petRouter;