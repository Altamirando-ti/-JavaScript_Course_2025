"use strict";

//------ 111. The Spread Operator - para arrays

const meuArray = [10, 20, 30, 40, 50];

const novoArray = [0, 5, ...meuArray]
console.log(novoArray);

console.log(...novoArray);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // criar um método para encomendar massas
  orderPasta: function(i1,i2,i3){
    console.log(`Aqui estão os ingredientes que são ${i1}, ${i2} e ${i3}`);
  }
};

console.log(restaurant);

const newMainMenu = [...restaurant.mainMenu, 'Macacheira']
console.log(newMainMenu);

// Join 2 arrays
const joinMenu = [...newMainMenu, ...restaurant.starterMenu]
console.log(joinMenu);

// Iterables: arrays, strings, maps, sets, functions. NOT objects
const str = 'Altamirando'
const letras = [... str, '', 'S.']
console.log(letras);
// const tentativaObjeto = [... restaurant]
// console.log(tentativaObjeto); // script_111.js:32 Uncaught TypeError: restaurant is not iterable

const ingredientes = [
    // prompt("Ingrediente 1: "),
    // prompt("Ingrediente 2: "),
    // prompt("Ingrediente 3: ")
]

console.log(ingredientes);

restaurant.orderPasta(... ingredientes)

// Spread Operator para Objects - atenção precisa usar {}

const newRestaurant = {stableshed: 2014, ...restaurant, founder: 'Julio'}
console.log(newRestaurant);

// O interessante que newRestaurant e Restaurant são objetos diferentes! FOi feito uma Deep Copy
newRestaurant.name = 'Bar Tuco'
console.log(newRestaurant);
console.log(restaurant);


// ------------------------112. Rest Pattern and Parameters
// O REST é o oposto do SPREAD. Ele pega um número indefinido de elementos e os agrupa em um array. 
// O REST é usado para funções, enquanto o SPREAD é usado para arrays ou objetos.

// SPREAD OPERATOR  is used on the RIGHT side of the =
const array = [1, 2, ...[3, 4]];
console.log(...array);

// REST PATTERN is used on the LEFT side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const restaurant2 = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Criar um método que desestrutura o objeto dentro do objeto para determinado propósito
  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order Received! Seu pedido que consta de uma entrada de ${this.starterMenu[starterIndex]} e prato principal de ${this.mainMenu[mainIndex]} foi feito as ${time} e será enviado no endereço ${address}.`,
    );
  },
  orderPizza: function (mainIngridient, ...othersIngridients) { //REST PARAMETER
    console.log('Ingrediente principal: ',mainIngridient);
    console.log('Outros ingredientes: ',othersIngridients);
  },
};

// Arrays
const [pizza, , risotto, ...otherFoods] = [
  ...restaurant2.mainMenu,
  ...restaurant2.starterMenu,
];
console.log(pizza, risotto, otherFoods);

// Objects
const { sat, ...weekdays } = restaurant2.openingHours;
console.log(weekdays);

// Functions
const add = function (...numbers) {
  // aqui o ... está fazendo o papel de REST PARAMETER estão coletando em uma matriz
  console.log(numbers);
  let soma = 0;
  for (let i = 0; i < numbers.length; i++) {
    soma = soma + numbers[i];
  }
  return console.log(soma);
};

add(2, 3);
add(5, 3, 2, 7);
add(8, 2, 6, 4, 1, 2, 5);

const x = [25, 56, 78];
add(...x); // aqui o ... está fazendo o papel de SPREAD OPERATOR, ou seja, separando os itens

restaurant2.orderPizza("mushroom", "cebola", "azeitonas", "espinafre");  