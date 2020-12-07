const HttpError = require("../models/ErrorModel");
const mongoose = require("mongoose");
const cities = require('all-the-cities');
const Tours = require("../models/Tours");

exports.citiesGetAll = async (req, res, next) => {
let filteredCities = cities.map(city => city.name);
let allCities;

  try {
    allCities = await Tours.find({location: filteredCities});
  } catch (err) {
    const error = new HttpError("Could not find all Cities", 500);
    next(error);
  }
 
  res.send(
       allCities
  ) 
  
};
