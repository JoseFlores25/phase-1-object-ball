function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      color: ["black", "white"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoes: 16,
          point: 22,
          rebounds: 12,
          assists: 12,
          steal: 3,
          block: 1,
          slamDunks: 1,
        },
        "Raggie Evans": {
          number: 30,
          shoes: 14,
          point: 12,
          rebounds: 12,
          assists: 12,
          steal: 12,
          block: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoes: 17,
          point: 17,
          rebounds: 19,
          assists: 10,
          steal: 3,
          block: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoes: 19,
          point: 26,
          rebounds: 12,
          assists: 6,
          steal: 3,
          block: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoes: 15,
          point: 19,
          rebounds: 2,
          assists: 2,
          steal: 4,
          block: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["turquoise", "purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
function numPointsScored(playerName) {
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    if (teamObj.players[playerName]) {
      return teamObj.players[playerName].points;
    }
  }
}

numPointsScored();

function shoeSize(playerName) {
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    if (teamObj.players[playerName]) {
      return teamObj.players[playerName].shoe;
    }
  }
}

shoeSize();

function teamColors(team) {
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    if (teamObj.teamName === team) {
      return teamObj.colors;
    }
  }
}

teamColors();

function teamNames() {
  let game = gameObject();
  const names = [game.away.teamName, game.home.teamName];
  return names;
}

teamNames();

function playerNumbers(team) {
  let playerNum = [];
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    if (teamObj.teamName === team) {
      let teamPlayers = teamObj.players;
      for (let playerKey in teamPlayers) {
        let playerInfo = teamPlayers[playerKey];
        console.log(playerInfo.number);
        playerNum.push(playerInfo.number);
        console.log(playerInfo.number);
        return playerNum;
      }
    }
  }
}

playerNumbers("Charlotte Hornets");
