/**
 * Players Controller
 */
var dataset = require('../dataset/headtohead.json');

/**
 * Get Players sorted by id
 * 
 */
function GetPlayers () {
  return dataset.players.sort((a, b) => {
    return b.id < a.id ? 1 : -1;
  });
}

/**
 * Get one player by id
 * 
 * @param {Number} id  
 */
function GetPlayerById (id) {
  if(!id) throw new Error('Missing id');

  let players = dataset.players;
  let player = null;

  for(let i = 0; i < players.length; i++) {
    if(players[i].id == id) { // Do not check the type
      player = players[i];
    }
  }

  return player;
}

/**
 * Remove a player by id
 * 
 * @param {Number} id 
 */
function RemovePlayerById (id) {
  if(!id) throw new Error('Missing id');

  let players = dataset.players;
  let player = false;

  for(let i = 0; i < players.length && !player; i++) {
    if(players[i].id == id) { // Do not check the type
      players.splice(i, 1);
      dataset.players = players;
      player = true; 
    }
  }

  return player;
}

module.exports = {
  GetPlayers,
  GetPlayerById,
  RemovePlayerById
}