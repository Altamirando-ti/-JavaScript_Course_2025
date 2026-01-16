"use strict";
console.log("---------- PROBLEM 1 -----------");
//PROBLEM 1
/* We work for a company building a smart home
thermometer. OUr most recent task is this: "Given an array
 of temperatures of one day, calculate the tempertature amplitude.
 Keep in mind that sometimes there might be a sensor error." */

const temperature = [3, -2, -6, 3, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temperatures = [3, -2, -6, 3, -1, 9, 13, 17, 15, 14, 9, 5]; // ignorei o erro

// 1) Understanding the problem
// - amplitude is difference between highes and lowest temperature
// - How to compute a sensor error?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max and min value in array
// - Subtract min from max (amplitude)

// function amplitude(){
//     let difference = max - min;
//     return difference
// }

// --- Função Ignorar o erro
function ignoreErro(arg) {
  let array = [];
  for (let i = 0; i < arg.length; i++) {
    if (typeof arg[i] === "number") array.push(arg[i]);
  }
  return array;
}

const newTemperature = ignoreErro(temperature);
console.log(newTemperature);

//--- Cálculo do valor máximo de temperatura
console.log("Máximo e mínimo de temperatura");

let calcAmplitude = (param) => {
  let max = param[0];
  let min = param[0];
  for (let i = 0; i < param.length; i++) {
    let tempAtual = param[i];
    if (tempAtual > max) max = tempAtual;
    if (tempAtual < min) min = tempAtual;
  }
  console.log("máximo:", max, "mínimo:", min);
  return max - min;
};

console.log(
  "Amplitude de temperatura no valor de: ",
  calcAmplitude(newTemperature)
);

console.log("---------- PROBLEM 2 -----------");
// PROBLEM 2
/* Function should receive 2 arrays of temperatures
 */
const array1 = ignoreErro(temperature);
const array2 = arrayRandom()

//Função que concatena arrays
function concatenarArrays(param1, param2) {
  const array = param1.concat(param2);
//   console.log('arrays de temperturas concatenados',array);
  return array;
}
// console.log('arrays de temperturas concatenados',concatenarArrays(array1, array2));


//Função que cria um array randômico
function arrayRandom() {
  const array = [];
  const tamanho = 6; //
  for (let j = 0; j < tamanho; j++) {
    // loop cria uma array com números randômicos
    array.push(Math.trunc(Math.random() * 30));
  }
  console.log('Array Random',array);
  return array;
}

// jogando nas funções anteriores
let temperaturesConc = concatenarArrays(array1, array2);
console.log(temperaturesConc);

console.log(
  "Amplitude de temperatura no valor de: ",
  calcAmplitude(temperaturesConc)
);

