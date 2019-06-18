/**
 * Players Routes
 * 
 */
const router = require('express').Router();
const PlayersController = require('../controllers/playersController');

/**
 * GET /players
 * 
 * Get players
 */
router.get('/', function(req, res) {
  let players = PlayersController.GetPlayers();

  return res.json(players);
})

/**
 * GET /players/:id
 * 
 * Get a single player
 */
router.get('/:id', function(req, res) {
  let player = PlayersController.GetPlayerById(req.params.id);

  return player ? res.json(player) : res.status(404).send('Not found');
})

/**
 * DELETE /players/:id 
 * 
 * Delete a player
 */
router.delete('/:id', function(req, res) {
  let player = PlayersController.GetPlayerById(req.params.id);

  return player ? res.send(`Player ${req.params.id} is now deletable`) : res.status(404).send('Not found');
}) 

module.exports = router;