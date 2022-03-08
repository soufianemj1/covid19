const express = require('express');
const router = express.Router();
const rdv = require('../controllers/Appointment')

router.post('/makeAppointment', rdv.create);
router.get('/getAppointement', rdv.findAll);

module.exports = router;
