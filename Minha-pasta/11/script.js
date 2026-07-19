'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// ------ 154 - Creating DOM Elements ------
console.log('------ 154 - Creating DOM Elements ------')
const mostrarMovimentacao = function(arg){
  containerMovements.innerHTML = ''; //limpa o containerMovements antes de inserir os elementos
  // console.log(containerMovements.innerHTML)
  //ou
  // containerMovements.textContent = '';
  // console.log(containerMovements.textContent)

  arg.forEach(function(value, index){
    // console.log(value,index)
    const type = value > 0 ? 'deposit' : 'withdrawal'
    const constHtml = ` 
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
          // <div class="movements__date">3 days ago</div>
          <div class="movements__value">${value}€</div>
      </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin',constHtml)
    // containerMovements.insertAdjacentHTML('beforeend',constHtml)


    // console.log(containerMovements.innerHTML)
  })
}

mostrarMovimentacao(account1.movements)
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// ------ 151 - ForEach method ------
const cl = console.log;
cl('------ 151 - ForEach method ------')

for(const movimentacao of movements){
  cl(movimentacao)
}
cl('---- usando forEach ----')
movements.forEach((value, index, array)=>{
  cl(value, index, array)
  // cl(value)

})

// agora usando uma condicional como no exemplo
movements.forEach(function(mov){
  if (mov > 0) cl(`Depósito de ${mov}`)
  else cl(`Retirada de ${Math.abs(mov)}`)
})

// ------ 152 - ForEach with maps and sets ------
cl('------ 152 - ForEach with maps and sets ------')
//Maps
currencies.forEach(function(value, index, array){
  cl(value, index, array)
})

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
const uniqueNumbers = new Set(numbers);
cl(uniqueNumbers, uniqueNumbers.size)