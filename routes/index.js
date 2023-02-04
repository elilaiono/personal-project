
const express = require('express');
const router = express.Router();

router.use('/Disc_Golf', require('./players'));
router.use('/', require('./swagger'));

module.exports = router;
