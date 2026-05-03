"use strict";

// ------ 117. Looping Arrays: The for-of Loop -------------------------
console.log(" ----- 117. Looping Arrays: The for-of Loop---------------");


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

};

// const teste = [0,1,2];
// console.log(teste);
// console.log(teste[1]);
// console.log(typeof(teste));

const menu = [...restaurant.starterMenu, ... restaurant.mainMenu];
console.log(menu);
// console.log(menu[1]);
// console.log(typeof(menu));

//nova maneira de percorrer um array
for(const item of menu) console.log(item);
console.log(typeof(item));// undefined
// console.log(item[1]);//Error: item is not defined

for(const item of menu.entries()) console.log(item);
for(const [i,el] of menu.entries()) console.log(`${i+1} : ${el}`);

// ------ 118. Enhanced Object Literals -------------------------
//Não achei interessante

// ------ 119. Optional Chaining (?.) -------------------------
console.log(" ----- 119. Optional Chaining (?.)---------------");

console.log(restaurant.openingHours.fri);
console.log(restaurant.openingHours.fri.open);// 11
console.log(restaurant.openingHours.mon);// undefined
// console.log(restaurant.openingHours.mon.open);//Uncaught TypeError: Cannot read properties of undefined (reading 'open')
console.log(restaurant.openingHours.mon?.open);//undefined. Não aperece erro.
console.log(restaurant.openingHours?.mon?.open);//undefined. Não aperece erro.

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'mon'];
for(const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`No dia ${day}, está aberto as ${open}`)
};
