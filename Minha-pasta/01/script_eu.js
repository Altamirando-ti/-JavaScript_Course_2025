// let js = "Legal"
// if(js === "Legal") alert("JavaScript funcionando!")
console.log("JavaScript funcionando!")
console.log(10+13-5) 

console.log(typeof js)
console.log(typeof false)
console.log(typeof 23)

js = 50;
console.log(typeof js)

let year;
console.log(year)
console.log(typeof year)

year = 1991;
console.log(typeof year)

// 12 - let, const, var
console.log("------------------Let, Const and Var-----------------")
let age = 37;
age = 38;

const birthYear = 1988;
// birthYear = 1994;

//const job; // constantes precisam ser declaradas!

//13 - Basic Operators
console.log("------------------Basic Operators-----------------")
//Math operators
const now = 2025
const ageAna = now - 1990
const ageBruno = now - 1985
console.log(ageAna, ageBruno)

// Assignments operators
let primeiroNome = "Altamirando"
let segundoNome = "Neto"
console.log(primeiroNome + " " + segundoNome)

//Comparasion Operators
console.log(ageBruno > ageAna)

// 17 - Strings and Template Literals
let idade = 30 + 7
console.log("-----------17 - Strings and Template Literals--------------")
console.log(primeiroNome + " " + "tem" + " " + idade + " " + "anos")
console.log(`${primeiroNome} tem ${idade} anos`) //template Literals com backSticks ``

//20 - Type Conversion and Coercion
console.log("-----------20 - Type Conversion and Coercion--------------")
// Type conversion
const ano = '2025'
console.log(ano + 2)

console.log(Number(ano)+2) // converteu sting em número

console.log(typeof "Neto")
console.log(Number("Neto")) // NaN - Not a Number
console.log(typeof Number("Neto")) // Fica estranho mesmo essa definição de Number para NaN

console.log(String(20)+String(25)) // 2025
console.log(Number(String(20)+String(25))+5) //2030 

//Type Coercion
console.log("Eu tenho " + 37 + " anos") //JS converteu number para string
console.log('20' + '25' + 3) //converteu para string
console.log('20' - '25' - 3) //converteu para number
console.log('20'*'5')
console.log('20'/'5')

// 21 - Truthy and Falsy values 
// 5 falsy values : 0, '', undefined, null, NaN
console.log("-----------21 - Truthy and Falsy values --------------")
console.log(Boolean(10))
console.log(Boolean('Neto'))
console.log(Boolean({})) //objeto
console.log(Boolean(0)) // resultado: false
console.log(Boolean(''))//  sem espaço //resultado: false
console.log(Boolean(undefined))//resultado: false
console.log(Boolean(null))//resultado: false
console.log(Boolean(NaN))//resultado: false

let money = 0;
if(money){ // 0 é um falsy value
    console.log("Pode gastar seu dinheiro")
} else {
    console.log("Arrume um trabalho")
}

money = 100;
if(money){ // 0 é um falsy value
    console.log(`Como você tem ${money} reais, pode gastar seu dinheiro`)
} else {
    console.log("Arrume um trabalho")
}

let variavel;
if(variavel){
    console.log("Boa! Variavel definida.")
} else {
    console.log("Variável UNDEFINED!")
}

variavel = 45;
if(variavel){
    console.log("Boa! Variavel definida.")
} else {
    console.log("Variável UNDEFINED!")
}

variavel = 0;
if(variavel){
    console.log("Boa! Variavel definida.")
} else {
    console.log("Variável UNDEFINED!")
}

// 22 - Equality Operators
console.log("-----------22 - Equality Operators --------------")
const numero = prompt("Escreva um número")
console.log(numero, typeof numero)


if(numero == 6) console.log("Você usou o Operator ==");
if(numero === 6) console.log("Você usou o Operator ===");

novoNumero = Number(numero)
if(novoNumero === 6) console.log("Você usou o Operator ===");
else if(novoNumero !== 6) {console.log("Você usou o Operator === e o4 número é diferente de 6");}
