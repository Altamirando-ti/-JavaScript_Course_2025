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
    // console.log(day, typeof(day));
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`No dia ${day}, está aberto as ${open}`)
};

const numbers = [1,2,3,4,5,6,7,8,9]
for(const i of numbers) {
  console.log(i);
  console.log(typeof(i))
  console.log("Tamanho do array: ", numbers.length)
}

//Methods
console.log(restaurant.order?.(0,1) ?? 'O método não existe');//ok
console.log(restaurant.orderNaoExiste?.(0,1) ?? 'O método não existe');//O método não existe

//Arrays
const user = [{nome:'Alta', cidade: 'Udi'}];
console.log(user[0]?.nome ?? 'Não existe essa propriedade')// Ok
console.log(user[0]?.celular ?? 'Não existe essa propriedade')// 'Não existe essa propriedade'

// Pratice - Optional Chaining (?.)﻿
// link: https://assignments-c03.jonas.io/introduction.html#introduction


const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
];

// Write a function called getFirstKeyword that takes the book object as an argument. 
// This function should return the first keyword from the book's keywords property (array) or
//  undefined (if the keywords property doesn't exist). It shouldn't throw an error.
//    Use optional chaining for that.

function getFirstKeyword(arg){
  console.log(arg.keywords?.[0] ?? 'undefined')
}
// getFirstKeyword(books[0])

function getEdition(arg){
  console.log(arg?.edition ?? 'undefined')
}
// getEdition(books[0])

console.log('Keywords:---')
for(let i = 0 ; i < books.length; i++){
  getFirstKeyword(books[i])
}

 console.log('Editions:---')
for(let i = 0 ; i < books.length; i++){
  getEdition(books[i])
}