"use strict";

// var firstName = 'Matilda'; // Evitar de usar
// const firstName = 'Matilda'; // undefined

const Neto
 = {
    firstName: 'Altamirando',
    year: 1991,
    calcAge: function() {
        console.log(this); 
        console.log(2026 - this.year, "anos");
    },
    // greet: ()=>{
    //     console.log(this);
    //     console.log(`Hey ${this.firstName}`);
    // } // evitar usar arrow function como método de objeto, pois o this em uma arrow function é léxico, ou seja, ele herda o valor do this do escopo onde a função foi definida. No caso, a função greet foi definida no escopo global, então o this dentro da função greet se refere ao objeto global (Window no navegador). E como o objeto global não tem a propriedade firstName, o resultado será undefined.
    greet: function() {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
};
Neto.greet()