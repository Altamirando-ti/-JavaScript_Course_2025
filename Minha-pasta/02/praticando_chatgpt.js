'use strict';
/*-------1) Soma simples -------
Crie uma função chamada somar que:
Receba dois números como parâmetros
Retorne a soma deles*/
console.log("-------1) Soma simples -------")
function somar(a,b){
    let sum = a + b;
    return sum;
}
console.log(somar(2,3))

/* ----- 2) função verificarIdade -------- 
Crie uma função verificarIdade que:
Receba uma idade
Retorne "Maior de idade" se a idade for maior ou igual a 18
Retorne "Menor de idade" caso contrário */
console.log('----- 2) função verificarIdade --------')  
const idade = 54
let maioridade = function(arg){
    if (arg >= 18){
        // console.log(idade,'Possui maior idade')
        return 'Possui maior idade'
    }
    else {
        // console.log(idade, 'Menor idade')
        return 'Menor idade';
    }
}
console.log(maioridade(idade))
// usando Arrays
console.log("----Usando Arrays")
const idades = [26, 47 , 9, 98, 67, 46, 54]
const valoresMaior = [];
for(let i=0; i<idades.length; i++){
    valoresMaior.push(maioridade(idades[i]));
    console.log(idades[i],valoresMaior[i])
}

/* --------- 3) Converter temperatura ----------
Crie uma função celsiusParaFahrenheit que:
Receba uma temperatura em Celsius
Retorne o valor convertido para Fahrenheit */
console.log('--------- 3) Converter temperatura ----------')
// const tempC = 100
const tempC = [0, 25, 100]
let fahrenheit = celcius => (celcius * 9/5) + 32; //arrow function
const arrayTemp = []
for(let i=0; i<tempC.length; i++){
    arrayTemp.push(fahrenheit(tempC[i]));
    console.log(tempC[i],arrayTemp[i])
}
// fahrenheit(tempC)


