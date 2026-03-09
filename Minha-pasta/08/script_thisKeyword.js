"use strict";

console.log(this); // Window { ... }  Em JavaScript, o valor de this depende do contexto em que a função é chamada. No contexto global, o this se refere ao objeto global (Window no navegador). Portanto, quando o código é executado no contexto global, o this se refere ao objeto global.

// Function--------
console.log("This em Normal Function");
function calcAge(thisYear, birthYear) {
  console.log(this); // undefined
  return thisYear - birthYear;
}
console.log(calcAge(2026, 1991));

// Arrow Function--------
console.log("This em Arrow Function");

const calcAgeArrow = birthYear => {
  console.log(this); // Window { ... }  Em arrow functions, o this é léxico, ou seja, ele herda o valor do this do escopo onde a função foi definida. No caso, a função calcAgeArrow foi definida no escopo global, então o this dentro da função calcAgeArrow se refere ao objeto global (Window no navegador).
  return 2026 - birthYear;
}
console.log(calcAgeArrow(1991));

// Object Method--------
const junior = {
    year: 1991,
    calcAge: function() {
        console.log(this); // { year: 1991, calcAge: [Function: calcAge] }. Referindo-se ao objeto junior, pois o this em um método de objeto se refere ao objeto que está chamando o método. Portanto, quando a função calcAge é chamada como um método do objeto junior.
        console.log(2026 - this.year, "anos");
    }
};
junior.calcAge()

const matilda = {
    year: 2017
};

// Borrowing method
matilda.calcAge = junior.calcAge; // Atribuindo a função calcAge do objeto junior para o objeto matilda. Isso é conhecido como borrowing method, ou seja, emprestando um método de um objeto para outro objeto.
matilda.calcAge(); // { year: 2017, calcAge: [Function: calcAge] }. Referindo-se ao objeto matilda, pois o this é dinâmico, ou seja, ele se refere ao objeto que está chamando a função. E não estático, ou seja, ele não se refere ao objeto onde a função foi definida.

const f = junior.calcAge; // Atribuindo a função calcAge do objeto junior para a variável f. Isso é conhecido como function reference, ou seja, referenciando uma função de um objeto para uma variável. E quando a função é chamada através da variável f, o this se refere ao objeto global (Window no navegador), pois a função não está sendo chamada como um método de um objeto, mas sim como uma função normal.
f(); // undefined. Referindo-se ao objeto global (Window no navegador), pois a função f é uma função normal e não um método de um objeto. E em uma função normal, o this se refere ao objeto global (Window no navegador). No entanto, como a função f é chamada em modo estrito (strict mode), o this é undefined, pois em modo estrito, o this em uma função normal é undefined.  