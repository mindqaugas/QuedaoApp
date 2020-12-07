const HttpError = require("../models/ErrorModel");
const mongoose = require("mongoose");
const Tours = require("../models/Tours");

exports.toursGetAll = async (req, res, next) => {
let allTours;
  try {
    allTours = await Tours.find({});
  } catch (err) {
    const error = new HttpError("Could not find all Tours", 500);
    next(error);
  }
  res.send(
       allTours
  ) 
};

exports.toursGetSingle = async (req, res, next) => {
  const tourID = req.body.data;
  let existingTour;
    try {
      existingTour = await Tours.findOne({ _id : tourID });
    } catch (err) {
      const error = new HttpError("Could not find a Tour", 500);
      next(error);
    }
    res.json({
      _id: existingTour._id,
      name: existingTour.name,
      description: existingTour.description,
      start_date: existingTour.start_date,
      end_date: existingTour.end_date,
      location: existingTour.location,
      likes: existingTour.likes,
      dislikes: existingTour.dislikes,
      foto: existingTour.foto,
      creator: existingTour.creator,
      price: existingTour.price,
      time: existingTour.time


    });
  };