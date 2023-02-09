const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/player_info');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createPlayer);

router.put('/:id', contactsController.updatePlayer);

router.delete('/:id', contactsController.deletePlayer);

module.exports = router;