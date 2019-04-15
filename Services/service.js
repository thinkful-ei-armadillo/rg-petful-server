'use strict';

const PetfulService = {
  getCats(db) {
    return db.select('*').from('cats');
  },
  getDogs(db) {
    return db.select('*').from('dogs');
  },
  adopt(db, id, type){
    
    return db.into(type).where({id}).del();
  } 
};

module.exports = PetfulService;