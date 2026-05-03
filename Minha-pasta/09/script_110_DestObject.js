"strict mode";

const arr = [2, 3, 4]; // array
console.log(arr); //curiosidade de como aparece no console

//------------ 110. Destructuring Objects
const restaurant = {
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


// Passa o objeto
  passaObjeto: function(obj){
    console.log(obj);
  },
  // Criar um método que desestrutura o objeto dentro do objeto para determinado propósito
  orderDelivery: function({starterIndex = 0,mainIndex = 0,time = '20:00', address}){
    console.log(`Order Received! Seu pedido que consta de uma entrada de ${this.starterMenu[starterIndex]} e prato principal de ${this.mainMenu[mainIndex]} foi feito as ${time} e será enviado no endereço ${address}.`);
  }

};

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// Nome das variáveis diferente das propriedades do objeto

const {location: place, starterMenu: starter} = restaurant
console.log(place, starter);

// Mutating Variables

let a = 111;
let b = 999;
console.log(a,b);
const obj = {a:23, b:7, c:14};
console.log(obj);
({a,b} = obj)
console.log(a,b);   

// Nested objects

const {fri} = openingHours;
console.log(fri);
const {fri: {open,close}} = openingHours;
console.log(open,close);
const {fri: {open : o,close: c}} = openingHours;
console.log(o,c);

// chama o método passarObjeto. Ou seja, passa o objeto do jeito que ele é.

const pedido = {
    time: '22:30',
    address: 'Rua dos Pereiras',
    starterIndex: '2', // "Bruschetta"
    mainIndex: '2', // "Pizza"
}
restaurant.passaObjeto(pedido)

// chamando o método (orderDelivery) do objeto restaurant para simular uma ordem de pedido. Faz um tratamento nos dados do objeto.
restaurant.orderDelivery(pedido)

// Usando os Default values
const pedido2 = {
    address: 'Rua dos Silvas',
    mainIndex: '1'
}

restaurant.orderDelivery(pedido2)

// ----- Pratice

