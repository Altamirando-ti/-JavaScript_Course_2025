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
// mostrarMovimentacao(account2.movements)


//Usando o Reduce Method para fazer o balanço final das movimentações

// Seletor
// const labelBalance = document.querySelector('.balance__value');

//Feito pelo instrutor
const mostrarBalanco  = function(arg){
  const calcBalance = arg.reduce((prev, cur)=> prev + cur,0)
  labelBalance.textContent =`${calcBalance}€`
}
mostrarBalanco(account1.movements)
// mostrarBalanco(account2.movements)


//meu jeito também funcionou
// const mostrarBalanco  = function(arg){
//   labelBalance.innerHTML = ''; 
//   const calcBalance = arg.reduce((prev, cur)=> {
//     return prev + cur},0) // Ver a -------- 160. The Reduce Method --------
//   const constHtml = `<p class="balance__value">${calcBalance}€</p>`
//   labelBalance.insertAdjacentHTML('afterbegin',constHtml)
// }
// mostrarBalanco(account1.movements)


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

// ------ 154 - The Map Method ------
cl('------ 154 - The Map Method ------')

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Relembrando forEach
const movementsEURO = movements.forEach(function(value, index){
  // cl(value, index)
  cl(value*0.1, index)

  return value; // a função forEach (VOID) não retorna nada! Não adianta colocar essa linha aqui. 
});
cl(movementsEURO)

// Hoje 10/07 o euro vale 0,87 dollar
const movementsUSD = movements.map((value,index)=>{
  // cl(value, index)
  cl(value*0.87)
  return value*0.87; // Já a função map sempre retorna uma array. Se deixar essa linha comentada, será retornado um array de valore undefinied.
  // return index*0.87; // Para retornar esse valor tem que comentar a linha acima. Essa função só returna um array.x'
})
cl(movementsUSD)

// Pelo que entendi a diferença entre os métodos forEach e Map é que este retorna algo sempre, enquanto o outro não retorna.

const movementsDescriptions = movements.map((v,i,array)=>{
  const tipo = v > 0 ? 'Depósito' : 'Retirada'
  return `Movimentação ${i}: ${tipo} de ${Math.abs(v*0.87)}`
})
cl(movementsDescriptions)


// ------ 158 - Computing Usernames ------
cl('------ 158 - Computing Usernames ------')

const user = 'Steven Thomas Williams'
const username = user.toLowerCase().split(' ').map(function(letra){
  return letra[0]
}).join('')
cl(username)

// Função  que cria nomes de usuários com as letras inicias do nome
const createsUsername = function(user){
  const username = user.toLowerCase().split(' ').map(function(letra){
    return letra[0]
  }).join('')
  return username
}

cl(createsUsername(account1.owner))

accounts.forEach((value,index) =>{
  cl(`Conta ${index+1} = Usuário: ${value.owner} e Username: `, createsUsername(value.owner))
})

// -------- 159. The filter Method --------
cl('-------- 159. The filter Method --------')
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((value)=>{
  return value >0;
})
cl(movements)
cl(deposits)

const deposits2 = movements.map((value)=>{
  return value >0;
})
cl(deposits2) // [true, true, false, true, false, false, true, true]

// Use filter() quando quiser reduzir o array, mantendo apenas alguns elementos.
// Use map() quando quiser transformar todos os elementos do array em novos elementos.

// Utilizando o for of
const retiradasFor =[]
for(const value of movements){
  if (value< 0) retiradasFor.push(value)
  }

cl(retiradasFor)

// -------- 160. The Reduce Method --------
cl('-------- 160. The Reduce Method --------')
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// prev = previous value ou "valor inicial"
// cur = current value
const balance = movements.reduce(function(prev, cur, index, array){
  // cl(`Iteration ${index}: ${prev}`)
  return prev + cur;
}, 0) // prev = 0
cl(balance)

// Usando o For of
let balanceFor = 0;
for(const item of movements){
  // cl(item)
  balanceFor += item
}
cl(balanceFor)

// Maximum value usando reduce method
const maximumValue = movements.reduce(function(prev, cur){
  return prev > cur ? prev : cur;
}, movements[0]) //prev = primeiro valor do array
cl(maximumValue)

