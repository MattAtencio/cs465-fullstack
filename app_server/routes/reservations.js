var express = require('express');
var router = express.Router();
const controller = require('../controllers/reservations');

/* GET home page. */
router.get('/', controller.reservationsList);

module.exports = router;