'use strict'
const cl = console.log

// ------ 135 - Default parameters ------
cl('------ 135 - Default parameters ------')

const bookings =[]

const createBooking = function(numVoo, numPassageiro = '1', preco='R$ 199,00'){
    const booking = {
        numVoo,
        numPassageiro,
        preco,
    }
    cl(booking)
    bookings.push(booking)
    cl(bookings)
}

createBooking('LH123')
createBooking('LH123', 2, 200)
createBooking('LH123', undefined, 300)

// ------ 138 - Functions Acepting functions ------
cl('------ 138 - Functions Acepting functions ------')

// Normal function

const greet = function (name){
    cl(`Hey ${name}`)
}

greet('Someone')


const highFun = function(arg1){
    return function (arg2){
        cl(`${arg1} ${arg2}`)
    }
}

const highFunction = highFun('Tudo')
highFunction('bem')

// Pra mim não faz sentido algum retornar função!


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(45, 'Alta')
cl(lufthansa)

// call method

const embraer ={
  airline: 'Embraer',
  iataCode: 'EB',
  bookings: [],
}

lufthansa.book.call(embraer, 45, 'Paty') 
cl(embraer)

// apply method

const arrVoo = [65, 'Charles'] // Igual ao call method mas com Arrays
lufthansa.book.apply(embraer,arrVoo)
lufthansa.book.apply(lufthansa,arrVoo)

// The bind Method
const fab = {
  airline: 'FAB',
  iataCode: 'FA',
  bookings: [],
}

const vooFab = lufthansa.book.bind(fab)

vooFab(67,'Jeca')

cl(fab)

// Bind Method with EventListener
lufthansa.planes = 1000;
cl(lufthansa)

lufthansa.buyPlane = function(){
    cl(this)
    this.planes++;
    console.log(this.planes);
}

// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane)// não está correto!

document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa))

fab.planes = 200;
const fabPlanes = lufthansa.buyPlane.bind(fab)
document.querySelector('.buy').addEventListener('click',fabPlanes.bind(fabPlanes))

// Partial application

const addTax = (tax, valor) => valor * (1+tax/100)
cl(addTax(10, 100)) // Isso é efeito de precisão de ponto flutuante no JavaScript
cl(Math.round(addTax(10, 100)))

const newTax50 = addTax.bind(null,50)
// Ou seja, aqui está sendo aplicado o método bind. Está usando simplesmente a função sem está apontando diretamente para um objeto. Por isso null, dizendo que não há nenhum objeto sendo referenciado.
cl(newTax50(100))

// Deixei valore predefinidos
const addTax2 = (valor = '10' ,tax = '1' ) => valor * (1+tax/100)
cl(addTax2(1000, 10)) 

const new2Tax = addTax2.bind(null)
cl(new2Tax())
cl(new2Tax(300)) 
cl(new2Tax())
