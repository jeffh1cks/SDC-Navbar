const mongoose = require('mongoose');
const db = require('./index.js');
const faker = require('faker');
faker.locale = 'en_US';

// This is just a seed file for the nav bar search database.
// Only run once to populate a locations and camps collection in a MongoDB database called 'timcamp'.

let locationsGenerator = function() {
  locations = [];
  for (var i = 0; i < 150; i++) {
    let locationCity = faker.address.city();
    let locationState = faker.address.state();
    let location = {
      city: locationCity,
      state: locationState
    };
    locations.push(location);
  }
  db.Location.insertMany(locations, function (err, results) {
    if (err) {
      console.error(err);
    } else {
      db.connection.close();
      console.log('Locations Seed successful!');
    }
  });
};

let campsGenerator = function() {
  let camps = [];
  for (var j = 0; j < 200; j++) {
    let campNameSuffixes = ['', ' State Park', '', ' Lake', ' Farm', ' National Forest', ' Recreation Area', '', ' Preserve', ' State Forest', ' Glen', ' Hollow', '', ' Canyon', ' Oasis', ' Cove', ' Camp'];
    let campNameSuffix = campNameSuffixes[Math.floor(Math.random() * Math.floor(campNameSuffixes.length))];
    let campName = faker.address.county() + campNameSuffix;
    let campType = 'Property';
    if (campName.slice(-10) === 'State Park' || campName.slice(-15) === 'National Forest' || campName.slice(-15) === 'Recreation Area' || campName.slice(-8) === 'Preserve' || campName.slice(-12) === 'State Forest') {
      campType = 'Public Park';
    }
    let campState = faker.address.state();
    let campPhotoSuffix = faker.random.number({min: 1, max: 132});
    let campPhoto = `https://timcamp-image-storage.s3-us-west-1.amazonaws.com/camp-images/timcamp_camp_${campPhotoSuffix}.jpg`;
    let camp = {
      name: campName,
      type: campType,
      state: campState,
      photo: campPhoto
    };
  }
  db.Camp.insertMany(camps, function (err, results) {
    if (err) {
      console.error(err);
    } else {
      db.connection.close();
      console.log('Camps Seed successful!');
    }
  });
};

locationsGenerator();
campsGenerator();