"strict mode";

// Link: https://assignments-c03.jonas.io/introduction.html    

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

// 1.1 Destructure the books array into two variables called firstBook and secondBook.

[firstBook, secondBook] = books
console.log(firstBook, secondBook);

//1.2 Destructure the books array into a variable called thirdBook. You must skip the first two books.

[ , ,thirdBook] = books;
console.log(thirdBook);

// 1.3 Below is the nested ratings array that contains two other arrays. 
// Destructure the nested ratings arrays into two variables called rating and ratingsCount. 
// In the result of your destructuring, the ratings variable should store a number 4.19, 
// and the ratingsCount variable should store a number 144584.

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

[[,rating],[,ratingsCount]] = ratings
console.log(rating,ratingsCount);

// 1.4 Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings
//  and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

const ratingStars = [63405, 1808];

[fiveStarRatings = 0, oneStarRatings =0 , threeStarRatings= 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// ----- Pratice - 110. Destructuring Objects -------------------------
console.log(" ----- Pratice - 110. Destructuring Objects---------------");


// 2.1 Destructure the first book object from the books array into variables called title,
//  author and ISBN.

// const {title,author, ISBN} = firstBook
const {title,author, ISBN} = books[0]
console.log(title, author, ISBN); // Assigning values of properties of object in variables with same name

// 2.2 Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. 
// The tags variable should be assigned with the value of the keywords property.

const {keywords:tags} = books[0]; // Atribuindo os valores de propriedades do objeto para variáveis com nomes diferentes
console.log(tags);

// 2.3 The seventh book from the books array is missing the programmingLanguage property.
// Destructure the seventh book object (books[6]) into variables called language and programmingLanguage.
// Assign the programmingLanguage variable with a default value of 'unknown'.

const{language, programmingLanguage = 'unknown'} = books[6]; // Atribuindo valores de propriedades do objeto para variáveis e atribuindo um valor default para aquela que não tem.
console.log(language, programmingLanguage);

// 2.4  Below are two variables called bookTitle and bookAuthor. 
// Reassign them with the values of the title and author properties of the first book object from the books array.

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({title:bookTitle,author:bookAuthor} = books[0]) //Reassign (Reatribuindo) valores de propriedades de objetos a variáveis já existentes 
console.log(bookTitle,bookAuthor);

// outra possibilidade
// bookTitle = books[0].title
// console.log(bookTitle);

// 2.5 Destructure the first book object from the books array into a variable called bookRating. 
// In the result of your destructuring, the bookRating variable should be assigned with the 
// value of the book[0].thirdParty.goodreads.rating property.

// const {rating: bookRating} = books[0]
const {thirdParty:{goodreads:{rating: bookRating}}} = books[0]
console.log(bookRating);

// Fazer o mesmo para oneStarRatingCount

// const {rating: oneStarRatingCount} = books[0] // É nisso que preciso pensar para iniciar 
const {thirdParty: {goodreads: {oneStarRatingCount: umaestrela}}} = books[0]
console.log(umaestrela);

// 2.6 Write a function called printBookInfo that has three parameters called title, author and year. 
// This function should work for a single object passed as an argument, 
// and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".
// If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

const {title: titulo, author: autor, publicationDate: year} = books[0]
console.log(titulo, autor, year);

// printBookInfo (books[?])

const objeto110 = { 
  title: 'Algorithms', 
  author: 'Robert Sedgewick', 
  year: '2011',
  printBookInfo: function (){
    console.log(`${this.title} by ${this.author}, ${this.year}`);
  }, 
}

function printBookInfo ({title, author, year = 'year unknown'}){
    console.log(`${title} by ${author}, ${year}`);
}
printBookInfo(objeto110);// chamando a função passando o objeto como argumento, a função irá desestruturar o objeto e pegar os valores das propriedades para imprimir a informação do livro.

objeto110.printBookInfo();// chamando o método do objeto, o método irá usar o this para acessar as propriedades do objeto e imprimir a informação do livro.


// ------------------- 111. The Spread Operator ----------------------
console.log('------------------- 111. The Spread Operator ----------------------');

// 3.1 Each book object has the author property, which stores an array of strings (author names) 
// if there are multiple authors, or a single string (author name) if there is just one author.
// Declare an array called bookAuthors, and fill it with authors of the first two books 
// from the books array. The bookAuthors array should have just one level (no nested arrays).

const bookAuthors = [...books[0].author, ...books[1].author]
console.log(bookAuthors);

// const testeObj = {aluno: 'Neto', ...books[0], teste: 'sim'}
// console.log(testeObj);

// 3.2 Write a function called spellWord that accepts a single string as an argument. 
// This function should log to the console each letter of the argument separated by a space.

function spellWord (argument){
  console.log(...argument);
}
spellWord('JavaScript')

// ------------112. Rest Pattern and Parameters ------------
console.log('------------112. Rest Pattern and Parameters ------------');

// 4.1. Destructure the keywords property (array) of the first book from the books array into variables 
// called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

//const {keywords:[mainKeyword, ...rest]} = books[0]
// ou
const [mainKeyword, ...rest] = books[0].keywords
console.log(mainKeyword, rest);

// 4.2. Destructure the second book from the books array into a variable called bookPublisher. 
// The bookPublisher variable should be assigned with the value of the publisher property of the book object. 
// Assign the rest of the properties to the restOfTheBook variable.

const {publisher: bookPublisher, ...restOfTheBook } = books[1]
console.log(bookPublisher, restOfTheBook);

//4.3. Write a function called printBookAuthorsCount that has two parameters called title and authors. 
// The authors parameter should accept any number of arguments. 
// This function should log to the console a string formatted like that:
//  "The book "${title}" has ${authors.length} authors".

function printBookAuthorsCount (title, ... authors){
  console.log(`The book ${title} has ${authors.length} authors`);
}

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
printBookAuthorsCount('Structure and Interpretation of Computer Programs', 'Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)');

// 4.4. Crie uma função chamada imprimirTituloeContagemAutores que faz o mesmo que a questão anterior, mas pega valores do array books

function  imprimirTituloeContagemAutores({title, author ,author: [firstAutor, ...restAuthors]}){
  console.log(`The book ${title} has ${author.length} authors, they are ${firstAutor} and ${restAuthors}`);
}

imprimirTituloeContagemAutores(books[0])
imprimirTituloeContagemAutores(books[1])

// ------------------------ 113. Short Circuiting ---------------------
console.log('------------------------ 113. Short Circuiting ---------------------');
// 5.1. Some of the book objects have the programmingLanguage property, which specifies what programming language
//  is used in the book.
// Write a function called hasExamplesInJava that takes a book object from the books array as an argument. 
// This function should return true if the book uses Java, or a string 'no data available' if it uses other 
// language or no programming language at all.

function hasExamplesInJava ({programmingLanguage}){
  // let verificar = programmingLanguage ? true  : 'no data available'; //  retorna true para qualquer linguagem não-nula
  let verificar = programmingLanguage === 'Java' ? true  : 'no data available'; // retorna true apenas para Java, e 'no data available' para qualquer outra linguagem ou para null/undefined
  return console.log(verificar);
}

//  hasExamplesInJava(books[2]);
for(let i=0; i<books.length; i++){
  hasExamplesInJava(books[i]);}

// sugestão do instrutor:
// function hasExamplesInJava(book) {
//   return book.programmingLanguage === 'Java' || 'no data available';
// }
// for(let i=0; i<books.length; i++){
//   console.log(hasExamplesInJava(books[i]));}
// Tabela Verdade para OU (&&)
// V && V = V (escreve a primeiro verdade, não interessa o resto pois já é verdade)


// 5.2 Some of the book objects have the onlineContent property, which is either true or false. 
// Loop over the books array, and for the books that provide online content, log to the console a string 
// in this format: "${title}" provides online content. Use short-circuiting.

// function VerifyOnlineContent (book){
//   return book.onlineContent ? console.log(`${book.title} provides online content`) : console.log(`${book.title} DO NOT provides online content`);
// }

// for(let i=0; i<books.length; i++){
//   VerifyOnlineContent(books[i]);}

// Sugestão do instrutor
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent && console.log(`"${books[i].title}" provides online content`);
}
// Tabela Verdade para E (&&)
// V && V = V (escreve o último verdade, tentando encontrar um possível falso)


// ----------------------114. The Nullish Coalescing Operator (??) ------------------------------
console.log(" // ----------------------114. The Nullish Coalescing Operator (??) ------------------------------")
// 6.1 There are objects in the books array that don't have the onlineContent property at all. 
// Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.

console.log("??")
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ?? console.log(`"${books[i].title}"provides no data about its online content.`);
}

// Fazendo a mesma coisa com outros operadores  para comparar o resultado
// console.log("OR (||)")
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent || console.log(`"${books[i].title}"provides no data about its online content.`);
// }

// console.log("AND (&&)")
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent && console.log(`"${books[i].title}"provides no data about its online content.`);
// }

// console.log("TERNÁRIO (?)")
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ? console.log(`"${books[i].title}"provides its online content.`): console.log(`"${books[i].title}"DO NOT provides online content.`);
// }


//----------------------115. Logical Assignment Operators (??= e &&=) ------------------------------
console.log(" // ----------------------115. Logical Assignment Operators ------------------------------")
// 7.1 Some of the book objects from the books array are missing the edition property. 
// Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.

console.log("7.1 ----")
//Meu jeito
for (let i = 0; i < books.length; i++) {
  // books[i].edition =  books[i].edition ?? 1;
  books[i].edition ??= 1;
  console.log(`"${books[i].title}" has edition: ${books[i].edition}`);
}

// Como o instrutor fez
// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
//   console.log(`"${books[i].title}" has edition: ${books[i].edition}`);
// }

// 7.2 Some of the book objects from the books array have the highlighted property, which by default is set to true.
//  Iterate over the books array,and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.
// Use the &&= operator (tip: you may also need the ! operator)
console.log("7.2 ---")

for (let i = 0; i < books.length; i++) {
  books[i].thirdParty.goodreads.rating < 4.2 ? (books[i].highlighted = false) : (books[i].highlighted = true);
  console.log(`"${books[i].title}" has rating of: ${books[i].thirdParty.goodreads.rating} and highlighted: ${books[i].highlighted}`);
}

// Sugestão do instrutor
// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
//   console.log(`"${books[i].title}" has rating of: ${books[i].thirdParty.goodreads.rating} and highlighted: ${books[i].highlighted}`);
// }