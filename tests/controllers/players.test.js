const PlayersController = require('../../controllers/playersController');

//======================================================
// GetPlayers
test('Should return players', function() {
  let players = PlayersController.GetPlayers();
  expect(players.length).toBeGreaterThan(0);
})

test('Should check sorting', function() {
  let players = PlayersController.GetPlayers();
  let lastId = null;
  for(let i = 0; i < players.length; i++) {
    if(!lastId) {
      lastId = players[i].id;
    }
    else {
      expect(lastId).toBeLessThan(players[i].id);
      lastId = players[i].id;
    }
  }
})

//======================================================
// GetPlayerById
test('Should return a single player', function() {
  let player = PlayersController.GetPlayerById(65);
  expect(player).not.toBeNull();
})

test('Should return null on single player query', function() {
  let player = PlayersController.GetPlayerById(9999);
  expect(player).toBeNull();
})

//======================================================
// RemovePlayerById
test('Should enable deletion', function() {
  let player = PlayersController.RemovePlayerById(65);
  expect(player).toBeTruthy();
})

test('Should return false on player deletion', function() {
  let player = PlayersController.RemovePlayerById(999);
  expect(player).toBeFalsy();
})