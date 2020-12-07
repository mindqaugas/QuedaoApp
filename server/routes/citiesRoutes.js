const express = require('express');
const router = express.Router();

const CitiesController = require('../controllers/citiesController');

router.post('/all', CitiesController.citiesGetAll);


module.exports = router;