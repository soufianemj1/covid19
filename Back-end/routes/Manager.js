const express = require('express');
const router = express.Router();
const mngr = require('../controllers/Manager')

router.post('/add_Manager', mngr.create);
router.get('/Managers', mngr.findAll);
router.delete('/delete_Manager/:_id', mngr.delete);
router.post('/', mngr.login);

module.exports = router;
