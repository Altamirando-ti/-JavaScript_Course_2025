"use strict";



// Hoisting and TDZ in Practice

// Variables ----------------

// console.log(x); //  x is not defined
// console.log(me); // undefined. Pois a variável me foi declarada com var e tem escopo global, ou seja, ela é visível em todo o código, mas ela ainda não foi inicializada no momento em que o console.log é executado, pois a variável me só é inicializada quando a linha var me = "Neto"; é executada. Portanto, o valor de me é undefined no momento em que o console.log é executado.
// console.log(job); // Cannot access 'job' before initialization. Pois a variável job ainda não foi inicializada no momento em que o console.log é executado, pois a variável job só é inicializada quando a linha let job = "teacher"; é executada. 
// console.log(ano); // Cannot access 'ano' before initialization. Pois a variável ano ainda não foi inicializada no momento em que o console.log é executado, pois a variável ano só é inicializada quando a linha const ano = 2026; é executada.

var me = "Neto";
let job = "teacher";
const ano = 2026;

// Functions ----------------

console.log(functionDecl(2, 3));
// console.log(functionExpr(2, 3)); // Uncaught ReferenceError: Cannot access 'functionExpr' before initialization.
// console.log(functionArrow(2, 3)); //Uncaught TypeError: functionArrow is not a function.

function functionDecl(a, b) {
  return a + b;
}
    
const functionExpr = function (a, b) {
  return a + b;
};

var functionArrow = (a, b) => a + b; //Uncaught TypeError: functionArrow is not a function.
// const functionArrow = (a, b) => a + b; //Uncaught ReferenceError: Cannot access 'functionArrow' before initialization
// let functionArrow = (a, b) => a + b; // Uncaught ReferenceError: Cannot access 'functionArrow' before initialization

// Example ----------------

// if(!numProducts) deleteShoppingCart();
console.log(numProducts);

var numProducts = 10;

if(numProducts) deleteShoppingCart();

function deleteShoppingCart() {
  console.log("All products deleted!");
}

