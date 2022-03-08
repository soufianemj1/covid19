const express = require('express');
const router = express.Router();
const mngr = require('../controllers/Manager')

router.post('/addManager', mngr.create);
router.get('/Managers', mngr.findAll);
router.delete('/deleteManager/:_id', mngr.delete);
router.post('/', mngr.login);

module.exports = router;
