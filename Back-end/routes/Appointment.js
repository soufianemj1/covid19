const express = require('express');
const router = express.Router();
const rdv = require('../controllers/Appointment')

router.post('/make_appointment', rdv.create);
router.get('/', rdv.findAll);

module.exports = router;
