'use strict';
const cl = console.log;

// -------------- 128. Working with Strings - Part 1 ----------
cl('-------------- 128. Working with Strings - Part 1 ----------')

const airplaine = 'TAB Air Brasil';
const plane = 'A320'

cl(plane[0]);
cl(plane[2]);
cl('B737'[0])

cl('tamanho',airplaine.length) // número de letras
cl('B737'.length)

cl(airplaine.indexOf('s'))
cl(airplaine.indexOf('T'))// posição 0
cl(airplaine.lastIndexOf('i'))// posição 12
cl(airplaine.indexOf('Brasil'))// se encontra na posição 8

// Slice method
cl(airplaine.slice(4)) // retira antes da posição. Posição 4 fica.
cl(airplaine.slice(4,7))
cl(airplaine.slice(1,5))// retira antes da posição, e o outro, retira apartir da posição, incluindo ela.

cl(airplaine.slice(-2))
cl(airplaine.slice(1,-1))

const checkMiddleSeat = function(seat){
    const s = seat.slice(-1)
    cl(s)
    if(s==='B' || s ==='E') cl('Você é sortudo!')
    else cl('Deu azar!')
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')


// -------------- 129. Working with Strings - Part 2 ----------
cl("-------------- 129. Working with Strings - Part 2 ----------")

cl(airplaine.toLowerCase())
cl(airplaine.toUpperCase())
cl('neto'.toUpperCase())

// Fix capitalization in name
const passenger = 'AltaMiRandO' // 
const passengerLower = passenger.toLowerCase()
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
cl(passengerCorrect)

const palavraCorreta = 'motocicleta'
const palavraTeste = '     MotocicleTa \n' 
const palavraTrimmed = palavraTeste.toLowerCase().trim()

cl(palavraTeste)
cl(palavraTrimmed)

cl(palavraCorreta === palavraTrimmed)

// Replacing
const priceGB = '£ 125,99'
const priceUS = priceGB.replace('£', '$').replace(',','.')
cl(priceUS)

const sapa = 'a sapa na lava pa'
cl(sapa.replaceAll('a', 'e'))

// Booleans
const aviao = 'Airbus A320'
cl(aviao.includes('A320'))
cl(aviao.includes('boeing'))
cl(aviao.startsWith('Air'))

if(aviao.includes('Air') && aviao.endsWith('320')) cl('Pertence aos aviões da família Airbus e é um A320')

//Practice exercise

const checkBaggage = function(items){
    const check = items.toLowerCase()
    if(check.includes('gun') || check.includes('knife')) cl('You are NOT allowed on board')
    else cl('Welcome a board')
}

checkBaggage('I have a laptop, food And a pocket KniFe')
checkBaggage('I have SOCKS ANd camera')
checkBaggage('I have snacks and a gun')

// -------------- 130. Working with Strings - Part 3 ----------
cl("-------------- 130. Working with Strings - Part 3 ----------")

// Split method - método para separar strings em armazena em arrays
cl('uma+boa+ideia'.split('+'))
cl('João Pereira Silva'.split(' '))

const [firstName, lastName] = 'Carlos Alberto'.split(' ')
cl(firstName, typeof(firstName)) 
cl(lastName)

// Join
const newName = ['Senhor', firstName, lastName.toUpperCase()].join(' ')
cl(newName)

const capitalizaName =  function (name){
    const nameSplited = name.split(' ')
    const nameUpper = []
    
    for(const word of nameSplited){
        // nameUpper.push(word[0].toUpperCase() + word.slice(1))
        // ou
        nameUpper.push(word.replace(word[0],word[0].toUpperCase()))
    }
    cl(nameUpper.join(' '))
}

capitalizaName('altamirando colombo ribeiro neto')
capitalizaName('joão josé da silva')

// Padding
const message = 'Neto'
cl(message.padStart('20','+').padEnd('30','#'))

// Mostrar apenas os últimos 4 caracteres do cartão de credito
const maskCreditCard = function (number){
    const str = number + '' ;// O '' é  para transformar o numero em uma string
    // const str = String(number);
    const last4= str.slice(-4)
    return last4.padStart(str.length, '*')
}

cl('Últimos 4 dígitos do seu cartão de crédito',maskCreditCard('12345678'))

const message2 = 'Voos atrasados!'
cl(message2.repeat(5))

function planesInLine (n){
    cl(`Existem ${4} aviões esperando na pista. ${'AVIÃO NA PISTA '.repeat(n)}`)
}
planesInLine(4)