'use strict';

const PetfulService = {
  getCats(knex) {
    return knex.select('*').from('cats');
  },
  getDogs(knex) {
    return knex.select('*').from('cats');
  },

};

module.exports = PetfulService;