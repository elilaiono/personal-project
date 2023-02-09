
const express = require('express');
const router = express.Router();

router.use('/player_info', require('./player_info'));
router.use('/', require('./swagger'));

module.exports = router;
