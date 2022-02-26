const express = require('express');
const router = express.Router();
const admin = require('../controllers/Admin')

router.post('/', admin.login);

module.exports = router;
