//----------- 33 - Activating Strict Mode ---------------
console.log('----------- 33 - Activating Strict Mode ---------------')
'use strict';

let temLincencaMotorista = false;
const passouTeste = true;

// if(passouTeste) temLincençaMotorista = true;// errado de propósito para o strict mode identificar
if(passouTeste) temLincencaMotorista = true;
if(temLincencaMotorista) console.log('Eu posso dirigir');

//Palavras restritas/reservadas ao sistema somente no strict mode
// const interface = 'Audio';
// const private = 123;

//----------- 34 - Functions ---------------
function semEntrada(){
    console.log('Função sem entrada executada')
}
semEntrada(); //calling/involking/running

console.log('----------- 34 - Functions ---------------')
function suco(nMaca, nLaranja){
    console.log(nMaca,nLaranja)
    let sucoPronto = `Seu suco possui ${nMaca} maçãs e ${nLaranja} laranjas`
    return sucoPronto;
}
// suco(5, 6);
console.log(suco(5, 6))
// let pedidoSuco = suco(5, 6);
// console.log(pedidoSuco)