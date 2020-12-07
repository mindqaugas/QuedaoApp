const express = require('express');
const router = express.Router();

const ToursController = require('../controllers/toursController');

router.post('/all', ToursController.toursGetAll);
router.post('/single-tour', ToursController.toursGetSingle);

module.exports = router;