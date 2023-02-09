const express = require('express');
const router = express.Router();
// const createError = require('http-errors');

const player_infoController = require('../controllers/player_info');

router.get('/', player_infoController.getAll); 

router.get('/:id', player_infoController.getSingle);
// router.get('/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const player = await player_infoController.getSingle(id);
//         if (!player) {
//             throw createError(404, 'Player does not exist');
//         }
//         res.send(player);
//       } catch (error) {
//         console.log(error.message)
//       }
//     });
router.post('/', player_infoController.createPlayer);

router.put('/:id', player_infoController.updatePlayer);

router.delete('/:id', player_infoController.deletePlayer);

module.exports = router;