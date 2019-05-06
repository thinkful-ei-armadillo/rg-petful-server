'use strict';

const PetfulService = {
  async getCats(db) {
    return db.select('*').from('cats');
  },
  async getDogs(db) {
    return db.select('*').from('dogs');
  },
  async adopt(db, id, type){
    
    return db.into(type).where({id}).del();
  } 
};

module.exports = PetfulService;