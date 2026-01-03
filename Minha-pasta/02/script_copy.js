'use strict';
//----------- 33 - Activating Strict Mode ---------------
console.log('----------- 33 - Activating Strict Mode ---------------')


let temLincencaMotorista = false;
const passouTeste = true;

// if(passouTeste) temLincençaMotorista = true;// errado de propósito para o strict mode identificar
if(passouTeste) temLincencaMotorista = true;
if(temLincencaMotorista) console.log('Eu posso dirigir');

//Palavras restritas/reservadas ao sistema somente no strict mode
// const interface = 'Audio';
// const private = 123;

//----------- 34 - Functions ---------------
console.log('----------- 34 - Functions ---------------')
function semEntrada(){
    console.log('Função sem entrada executada')
}
semEntrada(); //calling/involking/running


function suco(nMaca, nLaranja){
    console.log(nMaca,nLaranja)
    let sucoPronto = `Seu suco possui ${nMaca} maçãs e ${nLaranja} laranjas`
    return sucoPronto;
}
// suco(5, 6);
console.log(suco(5, 6))
// let pedidoSuco = suco(5, 6);
// console.log(pedidoSuco)

//----------- 35 - Function Declarations vs. Expressions ---------------
console.log('----------- 35 - Function Declarations vs. Expressions ---------------')

//Function declaration
const dataNascimento = Number(prompt("Qual a sua data de nascimento?"))
console.log(`A idade do fulano é ${calcIdade(dataNascimento)} por Function declaration`)

function calcIdade(dataNasc){
    // const idade = 2026 - dataNasc;
    return 2026 - dataNasc;
}


//Function Expression ou Anonimous Function

const calcIdade2 = function(dataNasc){
    return 2026 - dataNasc;
}
const dataNascimento2 = Number(prompt("Qual a sua data de nascimento?"))
console.log(`A idade do fulano é ${calcIdade2(dataNascimento2)} por Anonimous function`)
// Em uma Anonimous function a função deve estar antes do argumento que a chama. 
// Isso não é necessário em function expression
//Caso contrário recebe a seguinte mensagem: Cannot access 'calcIdade2' before initialization

//----------- 36 - Arrow Functions ---------------
console.log('----------- 36 - Arrow Functions ---------------')
const calcIdade3 = Variavel => 2026 - Variavel
console.log(calcIdade3(1988))
const dataNascimento3 = Number(prompt("Qual a sua data de nascimento?"))
console.log(`A idade do fulano é ${calcIdade3(dataNascimento3)} por Arrow function`)
