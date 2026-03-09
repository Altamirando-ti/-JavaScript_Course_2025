'use strict';

const a = 'Neto';
first();

function first() {
    const b = 'Hello';
    console.log('First function: ', b);
    second();
    
    function second() {
        const c = 'Hi';
        console.log('Second function: ', `${a} says: ${b} and ${c}`);
        third();
    }
}

function third() {
    const d = 'Hey';
    console.log(d + c + b + a); //Error! Não funcionara, pois as variáveis c, b não pertencem ao scopo da função third, e sim ao escopo da função first e second.
}

// scoping - onde as variáveis podem ser acessadas
// Há 3 tipos de scopes: global scope, function scope and block scope (if,..)