const express = require('express');

const router = express.Router();

const eventController = require('../controllers/eventController')


router.post('/eventSchedular' ,eventController.scheduledEvent)

module.exports = router;