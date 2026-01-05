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
/*

//Function declaration ou simplesmente Function
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
*/

//----------- 36 - Arrow Functions ---------------
console.log('----------- 36 - Arrow Functions ---------------')

/*
const calcIdade3 = Variavel => 2026 - Variavel
console.log(calcIdade3(1988))
const dataNascimento3 = Number(prompt("Qual a sua data de nascimento?"))
console.log(`A idade do fulano é ${calcIdade3(dataNascimento3)} por Arrow function`)
*/
//Testando
const teste = abc => abc + 5;

//teste2
const anosAposentar = (dataNiver,nome) => {
    const anos = 2026 - dataNiver;
    console.log(teste(5))
    dataNiver = 65 - anos;
    return `${nome} aposenta daqui ${dataNiver} anos`
}
console.log(anosAposentar(1988,'Altamirando'))

//----------- 37 - Functions Calling Another Functions ---------------
console.log('----------- 37 - Functions Calling Another Functions ---------------')

const cortarFruta = fruta => fruta*4;// arrow function

function suco2(nMaca, nLaranja){
    console.log(nMaca,nLaranja)
    const pedacosMaca = cortarFruta(nMaca);
    const pedacosLaranja = cortarFruta(nLaranja);
    let sucoPronto = `Seu suco possui ${pedacosMaca} pedaços de maçãs e ${pedacosLaranja} pedaços de laranjas`
    return sucoPronto;
}
suco2(2, 3);
console.log(suco2(5, 6))

//----------- 38 - Review Functions ---------------
console.log('----------- 38 - Review Functions ---------------')

const MayIretire = function(birthYear, gender){
    if(gender === 'man'){
        const diference = 65 - age(birthYear)
        if(diference >0){
        console.log(`Sorry!Homens se aposentam com 65 anos de idade Ainda faltam ${diference} anos para você aposentar.`);
        return diference;
        }else{
        console.log('Congratulations! Você já pode se aposentar.')
        return diference;
        }
    }else if(gender === 'woman'){
        const diference = 62 - age(birthYear)
        if(diference >0){
        console.log(`Sorry!Mulheres se aposentam com 62 anos de idade. Ainda faltam ${diference} anos para você aposentar.`);
        return diference;
        }else{
        console.log('Congratulations! Você já pode se aposentar.')
        return diference;
        }
    } else console.log('Opção inválida!')
    
    
}
console.log(MayIretire(1950,'woman'));

function age(birthYear){
    return 2026 - birthYear;
}

//----------- 40 e 41 - Arrays ---------------
console.log('----------- 40 e 41 - Arrays ---------------')
//Array[value1, value2, ...]
const array1 = ['Fulano', 28, suco2(4, 5)]
console.log(array1)

const array2 = new Array('S', 15, 35-5)
console.log(array2)

// ----Add Elements
//push() - acrescenta no final no array/matriz
array1.push('Aguardando')
console.log(array1)
//unshift() - acrescenta no início
array2.unshift('K')
console.log(array2)
//-----Remove Elements
//pop() - remove o último elemento
array1.pop();
console.log(array1)
//shift() - remove o primeiro elemento
array2.shift()
console.log(array2)
//---- Verify elements
//index() - mostra o indice do elemento no array
console.log(array1.indexOf('Fulano'))
console.log(array1.indexOf(28))
console.log(array1.indexOf(20))// -1 (Não existe)
//includes() - True or false se existe o elemento
console.log(array2.includes('S'))
console.log(array2.includes(30))
console.log(array2.includes('30'))

if(array1.includes('Fulano')) console.log("Fulano está presente no array")
else if(array1.includes('Cicrano')) console.log("Cicrano está presente no array")
