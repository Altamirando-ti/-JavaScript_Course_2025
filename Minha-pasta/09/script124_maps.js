'use strict';
const cl = console.log;

// Exemplo de objeto Para comparar:
const pessoa = {
  nome: "João",
  idade: 30,
  saudar: function() {
    console.log("Olá!");
  }
};

cl(pessoa)
cl(pessoa.nome)

//Maps

const rest = new Map();
rest.set('item', 'Classico Italiano');
rest.set(1, 'Firenze Italiano')
cl(rest);
cl(rest.set(2,'Lisbon, Portugal'))

rest.set('categories', ["Italian", "Pizzeria", "Vegetarian", "Organic"])
.set( 'open', 11)
.set('close', 23)
.set(true, 'We are opened!')
.set(false, 'We are closed! :(')
cl(rest);

cl(rest.get('item'))
cl(rest.get(true))
cl(rest.get(1))

const time = 8;
const openedOrClosed = time >11 && time < 23 ? rest.get(true) : rest.get(false) // operador ternario
cl(openedOrClosed)
// agora usando maps
cl(rest.get(time > rest.get('open') && time < rest.get('close')))

cl(rest.has('categories'))
rest.delete('item')
cl(rest);
cl(rest.size);
// rest.clear()
// cl(rest);

rest.set([1,2],'Teste')
cl(rest)
cl(rest.get([1,2]))// undefined, porque o array é um objeto e tem uma referência diferente


const arr = [3,4]
rest.set(arr,'Teste2')
cl(rest)
cl(rest.get(arr))// agora funciona, porque estamos usando a mesma referência do array

rest.set(document.querySelector('h1'),'Heading')
cl(rest)
cl(rest.get(document.querySelector('h1')))

//--------- Practice-----
cl('--------- Practice') 

/*
13.1﻿
Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:
*/

const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']])
cl(bookMap)

/* 13.2﻿
Set a new key in bookMap called pages, and assign it with a number 464.
 */

// const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin'],['pages',464]])
//ou
bookMap.set('pages',464)
cl(bookMap)


// Meu teste: Como ter acesso e manipular os arrays dentro do map 
// const arrTeste = bookMap.get('pages')
const arrBookMap = [...bookMap]
cl(arrBookMap)
const arrTeste=arrBookMap[0]
cl(arrTeste)
//
const [arrTeste2,...arrTesteResto] = [...bookMap]
cl(arrTeste2)// mesmo resultado 
cl(arrTesteResto)

/*
13.3﻿
Get the title and author values from bookMap, and log to the console a string formatted like 
that: "${title} by ${author}".
 */

cl(`${bookMap.get('title')} by ${bookMap.get('author')}`)

/*
13.4﻿
Get the size of bookMap, and log it to the console. */

cl(bookMap.size)

/*13.5﻿
Check if bookMap has the author key. and if 
so, log "The author of the book is known" to the console. */

const testeCl = bookMap?.get('author') ? cl(`The author of the book is known, and the name is ${bookMap.get('author')}`) : cl('The author of the book is unknown')
// const testeCl = bookMap?.get('author') ? cl(`The author of the book is known, and the name is ${bookMap.get('author')}`) : null

cl(bookMap?.get('author') ? `The author of the book is known, and the name is ${bookMap.get('author')}` : 'The author of the book is unknown')
// ou sugestão do intrutor:
if (bookMap.has('author')) console.log('The author is known');
// ou minha maneira 
cl(bookMap.has('author') ? `The author of the book is known, and the name is ${bookMap.get('author')}` : 'The author of the book is unknown' )

// ----------------- 125. Maps Interation -----------------
cl(' ----------------- 125. Maps Interation -----------------')
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!']
])
cl(question)


// ---- Comparando objetos, arrays com Object.entries() e maps

const questionObject = {
  question: 'What is the best programming language in the world?',
  1: 'C',
  2: 'Java',
  3: 'JavaScript',
  correct: 3,
  true: 'Correct!',
  false: 'Try again!'
};
cl('Objeto ',questionObject)

cl('Array ',Object.entries(questionObject))
// O método Object.entries() retorna uma array dos próprios pares [key, value] enumeráveis de um dado objeto

// Converter array(object.entries) to map
const questionObjectMap = new Map(Object.entries(questionObject));
cl('Map ',questionObjectMap)

// Quiz app 

cl(question.get('question'))

for(const [key,value] of question){
  // cl(typeof(key))
  if( typeof(key) === 'number') cl(`Answer ${key}: ${value}`)
}

// const answer = Number(prompt('Diga a sua resposta: '))
const answer = 3; // Para não ter que ficar respondendo o prompt toda vez que faz uma alteração na linha de comando
cl(answer)

// cl(question.get('correct'))

if( answer === question.get('correct')) cl(`${question.get(true)}`)
else cl(`${question.get(false)}`)

// usando operador ternário
cl(answer === question.get('correct') ? `${question.get(true)}`: `${question.get(false)}`)

// Converter map to array
cl(...question) // arrays
cl([...question]) // array de arrays

cl(question.entries())
cl(question.keys())
cl(question.values())

//Objetos são iteráveis em javaScript?
// cl(...questionObject) //The short answer is no, plain JavaScript objects are not iterable by default

// A não ser que seja feito a transformação do objeto em um array de arrays
cl(...Object.entries(questionObject))

// Ou, após transformar o objeto em array de arrays, em  um map
cl(...new Map(Object.entries(questionObject)))

/* Resumo: 
Objetos não são iteráveis
Arrays e Maps sim.
*/

//--------- Practice-----
cl('--------- Practice') 

// 14.1 Convert the first book object from the books array into a Map, and assign it to a 
// firstBookMap variable.

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
  },
];

const firstBookMap = new Map(Object.entries(books[0]))
cl(firstBookMap)

// 14.2 Use the for-of loop to iterate over firstBookMap, and log to the console keys 
// that have numbers as values.

for(const [key,value] of firstBookMap){
  // cl(value)
  if(typeof(value) === 'number') cl(key,value)
}