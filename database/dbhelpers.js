const mongoose = require('mongoose');
const db = require('./index.js');

module.exports = {

  searchLocations: (searchTerm, callback) => {
    db.Location.find({'city': { '$regex': searchTerm, '$options': 'i' }}, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }

};