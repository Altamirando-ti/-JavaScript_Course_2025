"use strict";
// ------------------ Coding Challenge #1 ---------

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's
 name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 
'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of
 goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀 */

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's
//  name, and one array ('fieldPlayers') with all the remaining 10 field players
 
// const[gk ,... fieldPlayers] = [players1[0], ...players1.slice(1)];
const[gk ,... fieldPlayers] = players1;
//  console.log(team1);
 console.log(gk);
 console.log(fieldPlayers); 

//  3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [players1, players2]; // errado!
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 
// 'Coutinho' and 'Perisic'

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {team1, x: draw, team2} = game.odds;
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console,
//  along with the number of goals that were scored in total (number of player names passed in)

function printGoals (...players){
  console.log(`Foram ${players.length} gol na partida.`)
}

printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

console.log(game.odds.team1 < game.odds.team2 ? "Time 1 tem mais chance de ganhar" :"Time 2 tem mais chance de ganhar" );
//ou
console.log(game.odds.team1 < game.odds.team2 && "Time 1 tem mais chance de ganhar");


///////////////////////////////////////
// ------------------ Coding Challenge #2 ---------
const cl = console.log;
cl(" ----- Coding Challenge #2 ---------------");

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the 
same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

const playerScored = Object.values(game.scored)
// cl(playerScored);
// cl(playerScored.length);
for(let i=0; i<playerScored.length; i++){
  cl(`Goal ${i}: ${playerScored[i]}`)
}

// Ou feita pelo instrutor:
cl('feita pelo instrutor')
for(const [i,player] of game.scored.entries()){
  cl(`Goal ${i}: ${player}`)
}

//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const oddsChallenge2 = Object.values(game.odds)
// cl(oddsChallenge2)

let somaAverage = 0;
for(const y of oddsChallenge2){
  // cl(y)
  somaAverage = somaAverage + y;
}
const average = somaAverage/(oddsChallenge2.length)
cl(average)

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the 
// same property names 😉


cl(`Odd of victory ${game.team1}: ${oddsChallenge2[0]}
Odd of draw: ${oddsChallenge2[1]}
Odd of victory ${game.team2}: ${oddsChallenge2[2]}`)

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. 
// In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }


const scorers = {}

const scoreEntries =game.scored.entries()
cl(scoreEntries)

for(let i=0; i<game.scored.length; i++){
  cl(i)
  // scorers.push()
  // const [i,player] = ;
}

// Testes
const testinho = [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ]

// cl(testinho)
for(const x of testinho.entries()) cl(x)
for(const [x,y] of testinho.entries()) cl(`Jogador ${x+1} é ${y}`)

///////////////////////////////////////
// Coding Challenge #3
cl('// ------------ Coding Challenge #3')

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1
const eventSet = new Set([])
cl(eventSet);
for(const [key,value] of gameEvents){
  eventSet.add(value)
}
const events = [...eventSet]
cl(events);

// Feito pelo instrutor

cl([...new Set(gameEvents.values())])


// 2
gameEvents.delete(64)
cl(gameEvents)

//3
const time = [...gameEvents.keys()].pop()
// cl(time)
cl(`An event happened, on average, every ${time/gameEvents.size} minutes`)

// 4
for(const [minute,event] of gameEvents){
  if(minute < 45) cl(`[FIRST HALF] ${minute}: ${event}`)
  else cl(`[SECOND HALF] ${minute}: ${event}`)
}
// cl(gameEvents)

///////////////////////////////////////
// Coding Challenge #4

cl(`${'#'.repeat(5)} Coding Challenge #4 ${'#'.repeat(5)}`) 

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
   calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value;
  // cl(text)
  const textSplit = text.split('\n')
  cl(textSplit)

  

  const capitalizaName =  function (arg){
    const nameSplited = arg.trim().split('_')
    const nameUpper = []
    // cl(nameUpper)
    
    for(const word of nameSplited){
        // nameUpper.push(word[0].toUpperCase() + word.slice(1))
        // ou
        nameUpper.push(word.replace(word[0],word[0].toUpperCase()))
    }
    // cl(nameUpper.join(''))
    return nameUpper.join('')
    

  }
  // capitalizaName(text)

  for(const n in textSplit){
    // cl(textSplit[n])
    // cl(textSplit[n].toLowerCase())
    let capName = capitalizaName(textSplit[n].toLowerCase())
    // cl(capName)
    camelName(capName)
    // cl(camelName(capName))
  }

  function camelName (argum){
    // const nameCamel = []
    // argum.replace(argum[0],argum[0].toLowerCase())
    // cl(nameCamel.push(argum.replace(argum[0],argum[0].toLowerCase())))
    cl(argum.replace(argum[0],argum[0].toLowerCase()))
  }


})


