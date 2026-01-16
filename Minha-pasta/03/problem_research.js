"use strict";

// Solução para o problema 2
// Encontrada para o problema 1 no google escrevendo 'how to get max value in a array'
// cliquei no link: 'Find the min/max element of an array in JavaScript'

/*// Source - https://stackoverflow.com/a
// Posted by totymedli, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-16, License - CC BY-SA 4.0

// For regular arrays:
var max = Math.max(...arrayOfNumbers);

// For arrays with tens of thousands of items:
let max = testArray[0];
for (let i = 1; i < testArrayLength; ++i) {
  if (testArray[i] > max) {
    max = testArray[i];
  }
}
 */

console.log('---------- PROBLEM 1 -----------');
const testArray = [3, -2, -6, 3, -1, 9, 13, 17, 15, 14, 9, 5];

// For arrays with tens of thousands of items:
let calcArrayMax = () => {
  let max = testArray[0];
  for (let i = 1; i < testArray.length; ++i) {
    if (testArray[i] > max) {
      max = testArray[i];
    }
  }
  return max;
};

console.log(calcArrayMax());

let calcArrayMin = () => {
  let min = testArray[0];
  for (let i = 0; i < testArray.length; i++) {
    if (testArray[i] < min ) {
      min = testArray[i];
    }
  }
  return min
};

console.log(calcArrayMin());

let calcAmplitute = function(x,y){
    // let t = x
    // let d = y
    let a = x - y
    return a
}

console.log(calcAmplitute(calcArrayMax(),calcArrayMin()));

// -----------Solução para o problema 2
console.log('---------- PROBLEM 2 -----------');
/*
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

*/

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
function concatenarArrays(param1, param2){
    const array = param1.concat(param2);
    return array
}

console.log(concatenarArrays(array1,array2));
