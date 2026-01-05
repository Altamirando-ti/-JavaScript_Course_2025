'use strict';

//----------- Challenge 1 - Part 2 ---------------
console.log('----------- Challenge 1 - Part 2 ---------------')

let calcAverage = (sc1, sc2, sc3) => (sc1 + sc2 + sc3)/3 

let avgDolphins = calcAverage(44,23,71);
let avgKoalas = calcAverage(65,54,49);
console.log(avgDolphins, avgKoalas);

function checkWinner(scoreDolphins,scoreKoalas){
    if(scoreDolphins >= 2*scoreKoalas){
    console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`)
    }
    else if(scoreKoalas >= 2*scoreDolphins ){
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`)
    }else console.log("No team wins!!")
}
console.log(checkWinner(avgDolphins,avgKoalas));

avgDolphins = calcAverage(85,54,41);
avgKoalas = calcAverage(23,34,27);
console.log(avgDolphins, avgKoalas);
console.log(checkWinner(avgDolphins,avgKoalas));
