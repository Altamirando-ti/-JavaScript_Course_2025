"use strict";

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#logical_operators


// 113. Short Circuiting (&& and ||)
//Use ANY data type, return ANY data type, short-circuiting means that when the JavaScript engine encounters a logical operator, it will evaluate the operands from left to right and return the first value that is falsy (for ||) or truthy (for &&) without evaluating the rest of the operands.

// OR operator (||) returns the first truthy value or the last value if all are falsy
console.log(3 || "Jonas"); // 3 é um valor verdadeiro, então ele é retornado
console.log("" || "Jonas"); // "" é um valor falso, então "Jonas" é retornado
console.log(true || 0); // true é um valor verdadeiro, então ele é retornado
console.log(undefined || null); // undefined é um valor falso, então null é retornado

// AND operator (&&) returns the first falsy value or the last value if all are truthy
console.log(0 && "Jonas");  // 0 é um valor falso, então ele é retornado
console.log(7 && "Jonas");  // 7 é um valor verdadeiro, então "Jonas" é retornado. Porque o operador && retorna primeiro valor falso encontrado ou último valor avaliado se todos os valores forem verdadeiros (a procura de um falso).
console.log("Hello" && 23 && null && "jonas"); // null é um valor falso, então ele é retornado

// restaurant.guest = 8;
const guest1 = restaurant.guest ? restaurant.guest : 10; // restaurant.guest não existe portanto é falso
console.log(guest1);

const isMember = true
console.log("The fee is " + (isMember ? "$2.00" : "$10.00")); // if isMember is true, the fee is $2.00, otherwise it's $10.00

// ----------------------114. The Nullish Coalescing Operator (??) ------------------------------
console.log(" 114. The Nullish Coalescing Operator (??)")
// The nullish coalescing operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand.
// Muito parecido com o operador OR (||), mas o operador nullish coalescing (??) só considera null e undefined como valores "nulos", enquanto o operador OR (||) considera todos os valores falsy (como 0, "", false, etc.) como nulos. 
// Zero (0) and an empty string ("") are considered valid values, so they will not trigger the default value when using the nullish coalescing operator (??). 

console.log(undefined ?? ""); // undefined is nullish, so "" is returned
console.log(null ?? 0); // null is nullish, so 0 is returned
console.log(false ?? 0); // False is returned
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 0 is a falsy value, so the default value 10 is returned
const guest2 = restaurant.numGuests ?? 10;
console.log(guest2); // 0 is a valid number of guests, so it is returned instead of the default value 10


//----------------------115. Logical Assignment Operators (??= e &&=) ------------------------------
console.log(" ----------------------115. Logical Assignment Operators ------------------------------")

// Acho que não vale a pena fazer mais porque é algo muito específico e que provavelmente esquecerei. 
// Decidi só por assistir a aula e entender o conceito.
// Mas basicamente os operadores de atribuição lógica (??= e &&=) são usados para ATRIBUIR um valor a uma variável somente
//  se a variável atender a uma determinada condição. O operador ??= atribui um valor à variável 
// somente se a variável for null ou undefined, enquanto o operador &&= atribui um valor à variável 
// somente se a variável for truthy (ou seja, não for falsy).  