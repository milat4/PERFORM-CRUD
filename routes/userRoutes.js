const express = require('express');
const { index, home, testing } = require('../controllers/userControllers');

const router = express.Router();

router.get('/', index);
router.post('/', home);
router.get('/tester', testing);

module.exports = router;


