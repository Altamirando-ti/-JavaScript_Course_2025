'use strict';
// Coding Challenge #1
/*
Given an array of forecasted maximum temperatures,
the thermometer displays a string with these 
temperatures.

Example: [17, 21, 23] wil print ".. 17ºC in 1 days .
.. 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'pritnForecast' which takes in an
array 'arr' and logs a string like the above to the
console.

Use the problem-solving framework: Understand the
 problem and break it into sub-problem!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
 */

/*
PASSOS:
1) Function que tem como parâmetro um array
1.1) os array tem diferentes tamanhos
1.2) como chamar os diferentes arrays
1.3) como printar os resultados dos diferentes arrays
*/

//Dados:
const data1 = [17, 21, 23]
const data2 = [12, 5, -5, 0, 4]

let printForecast = (arr) =>{
    let arrayString =[]
    let frase = ''
    for(let i=0; i< arr.length; i++){
        arrayString.push(`${arr[i]}ºC in ${i+1} days... `);
        frase = frase + arrayString[i]
    }
    return frase;
}


console.log(`... ${printForecast(data2)}`);

/*Challenge 2
Let's say you're building a time tracking application for
freelancers. At some point in building this app, you need
a function that receives daily work hours for a certain
week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
 */

//Observação: Resolvi sozinho sem IA!!!

// const testData = [7.5, 8, 6.5, 0, 8.5, 4, 0];

//Função que cria um array randômico para testData
function arrayRandom() {
  const array = [];
  const tamanho = 7; //
  for (let j = 0; j < tamanho; j++) {
    // loop cria uma array com números randômicos
    array.push(Math.trunc(Math.random() * 9));
  }
  console.log('Array Random',array);
  return array;
}

const testData = arrayRandom()

//1)----Function Total hours worked
let hoursWorkedWeek = function (param){
    let totalHours=0;
    for(let i=0; i<param.length; i++){
        totalHours = totalHours + param[i]; 
    }
// console.log(totalHours);
return totalHours;
}
console.log(hoursWorkedWeek(testData));

//2) ---- Average daily hours
let averageHours = (param) =>{
    let averageHours = param/7;
    // console.log(averageHours);
    return averageHours;
}
console.log(`Uma média de ${averageHours(hoursWorkedWeek(testData))} horas trabalhadas`);

// ---- 3) Function The day with the most hours worked
// Subfunction para encontrar o index do dia mais trabalhado
let max = testData[0];
let index;
function dayMostWorked(param){
for(let i=0; i<param.length; i++){
    if(param[i]>max){
        max = param[i];
        index = i
    } 
}
switch (index) {
    case 0: return 'Domingo'
    case 1: //console.log('Segunda-feira');
        return 'Segunda-feira';
        // 
        break;
    case 2: //console.log('Terça-feira');
        return 'Terça-feira'; 
        // 
        break;
    case 3: //console.log('Quarta-feira'); 
        return 'Quarta-feira'
        // 
        break;
    case 4: //console.log('Quinta-feira');
        return 'Quinta-feira' 
        // 
        break;    
    case 5: //console.log('Sexta-feira');
        return 'Sexta-feira'
        // 
        break;
    case 6: return 'Sábado';
// 
    default:
        break;
}
// return index;
}
console.log('Dia mais trabalhado: ', dayMostWorked(testData));

// 4) ----- Number of days worked

let numberDaysWorked = function(param){
    let cont= 0;
    for(let i=0; i<param.length; i++){
    if(testData[i] !== 0){
        cont = cont +1;
    } 
}
return cont;
}

console.log('Número de dias trabalhados: ',numberDaysWorked(testData));

// 5)-----Whether the week was full-time (worked 35 hours or more)

let moreThan35 = (param) =>{
    if(param >= 35) return 'Full-time week'
    else return 'No full-time week'
}

console.log(moreThan35(hoursWorkedWeek(testData)));

