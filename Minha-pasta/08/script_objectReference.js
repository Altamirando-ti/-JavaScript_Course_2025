"use strict";
// Object References in practice

const jessica ={
    firstName: 'Jessica',
    lastName: 'Williams',
    age: '27'
}

console.log('testeAntes:', jessica);

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'

console.log('Before:', jessica);
console.log('After:', marriedJessica); //As duas referências apontam para o mesmo objeto alocado na memória. Por isso, alterar qualquer propriedade de uma das referências vai, consequentemente, alterar a outra.

// jessica = {anoDivorcio: '2026'} // Assignment to constant variable. Não é possível. A não ser que fosse usado let ao inves de const na criação do opjeto jéssica.

jessica.age= 30 // Propriedade do objeto atualizada
console.log('Jessica propriedade atualizada:', jessica);
console.log('Consequentemente Married Jessica foi atualizada',marriedJessica);

// Usando funções

const carla ={
    firstName: 'Carla',
    lastName: 'Sousa',
    estadoCivil: 'solteira',
    age: '33'
}

console.log(carla);

function marryPerson (originalPersonal, newLastName,NewEstadoCivil) {
    originalPersonal.lastName = newLastName;
    originalPersonal.estadoCivil = NewEstadoCivil
    return originalPersonal;
}

const marriedCarla = marryPerson(carla, 'Pereira', 'Casada');

console.log('Carla Before Function marryPerson:', carla);
console.log('Carla After Function marryPerson:', marriedCarla);

// Copiando objetos em uma nova variável (Apenas Propriedades primitivas)

const carlaCopy = {...carla} // ... é um método para copiar propriedades de objetos em uma nova variável
console.log('Cópia Carla:', carlaCopy);
carlaCopy.estadoCivil = 'Divorciada'
console.log('Cópia Carla Divorciada', carlaCopy);
console.log('Carla Original', carla);

// Shallow Copy (apenas propriedades primitivas..)

const maria ={
    firstName: 'Maria',
    lastName: 'Silva',
    estadoCivil: 'solteira',
    age: '43',
    family: ['Paula','Jacinto']
}

console.log('Maria:', maria);

const mariaCopy = {... maria}

mariaCopy.lastName = 'Cópia'
console.log('Cópia Maria', mariaCopy);
mariaCopy.family.push('Tiago')
console.log('Cópia Maria', mariaCopy); // Como Arrays são objetos. Por isso mesmo sendo o array de uma cópia, será apontado para o array original, no caso a Maria original. 

// Deep Copy or Deep Clone

const mariaDeepClone = structuredClone (maria)
mariaDeepClone.lastName = 'Clonada'
mariaDeepClone.family.push('Primo Clonado')
console.log('Clone Maria:', mariaDeepClone);