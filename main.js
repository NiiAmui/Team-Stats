const team = {
    _players :[
      {
        firstname: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      },
      {
        firstname: 'Maxwell',
        lastName: 'Gomez',
        age: 15
      },
      {
        firstname: 'Shamsu',
        lastName: 'Baabey',
        age: 16
      }
    ],
    _games : [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Kotoko',
        teamPoints: 50,
        opponentPoints: 40
      },
      {
        opponent: 'Hearts Of Oaks',
        teamPoints: 60,
        opponentPoints: 47
      }
    ],
  
    get player () {
      return this._player;
    },
    get games(){
      return this._games;
    }, 
     addPlayer (firstName,lastName,age){
      let player = {
        firstName,
        lastName,
        age
      };
     this._players.push(player);
    },
  addGame(opponent,teamPoints,opponentPoints){
    const game ={
      opponent,
      teamPoints,
      opponentPoints
    }
    team._games.push(game);
  }
  
  };
  
  team.addPlayer("Steph", "Curry", 28);
  team.addPlayer("Lisa", "Leslie", 44);
  team.addPlayer("Bugs", "Bunny", 76);
  team.addGame('Liberty',49,42);
  team.addGame('Adwoa Stars',50,37);
  console.log(team.games);
  
  
  
  