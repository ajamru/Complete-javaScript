'use strict'

const game = {
    team1 : 'BM',
    team2 : 'BVB',
    players : [
        [
        'd1',
        'd2',
        'd3',
        'd4',
        'd5',
        'd6'
        ],
        [
          'x1',  
          'x2',  
          'x3',  
          'x4',  
          'x5',  
          'x6',  
        ]
    ],
    score : '4:0',
    scored : ['law', 'xavi', 'law', 'hum'],
    date : 'nov 2nd, 2023',
    odds : {
        team1 : 1.33,
        x: 3.25,
        team2 : 6.5
    }
};

const [players1, players2] = game.players;
console.log(players1, players2);

//2 creatting one goalkeepe and rest are team player
const[goalkeep1, ...playTeam1] = players1;
const[goalkeep2, ...playTeam2] = players2;
console.log(goalkeep1, playTeam1);
console.log(goalkeep2, playTeam2);

//3. creating allplayer with taking except goal keeper
const allPlayer = [...players1, ...players2];
console.log(allPlayer);

//4. contains players1
const players1Final = [...players1, 'Tiago', 'Tingu', 'Chuchu'];
console.log(players1Final);

//5. create variable using odds
const {odds : {team1, x : drow, team2}} = game;
console.log(team1, drow, team2);

//6. 
//we are passing rest parameter
const scoreGoal = function(...players) {
    console.log(`Goal scored is ${players.length} for you`)
};
//here passing spread
scoreGoal(...game.scored);


//7
team1 > team2 && console.log('team two won')
