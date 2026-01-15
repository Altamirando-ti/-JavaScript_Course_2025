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

/*
----------4)Somar valores do array--------
Crie uma função somarArray que:
Receba um array de números
Retorne a soma de todos os valores
 */


/*
 ---------5) Contar elementos pares--------
Crie uma função contarPares que:
Receba um array de números
Retorne quantos números pares existem no array
 */
console.log('---------4)Contar elementos pares--------')
// const matriz = [0,1,2,3,4,5,6];
const matriz = []
const tamanho = 10
for(let j=0; j< tamanho; j++){ // loop cria uma matriz com números randômicos
    matriz.push(Math.trunc(Math.random()*tamanho))
}
console.log(matriz)
let contPar=0;//contador
let functionParImpar = function(arg){ //função define número do array par ou ímpar
    if(arg % 2 ===0){
        // console.log('é par!');
        contPar = contPar +1;
        return 'é par!'
    } else {
        // console.log('é ìmpar!');
        return 'é ìmpar!';
    }
}

const parImpar =[]
for(let i=0; i < matriz.length; i++){  // loop cria matriz com
    parImpar.push(matriz[i],functionParImpar(matriz[i]))
}
console.log(parImpar)
console.log(`Foram computados ${contPar} números pares`)

/*
---------6) Maior número do array -------
Crie uma função maiorNumero que:
Receba um array de números
Retorne o maior número do array */
console.log('---------6) Maior número do array -------')

/*
---------- 7) Criar um objeto pessoa ---------
Crie um objeto chamado pessoa com as propriedades:
nome
idade
cidade
Depois:
Mostre no console uma frase como:
"Meu nome é João, tenho 25 anos e moro em São Paulo" */
console.log('---------- 7) Criar um objeto pessoa ---------')
const objPessoa ={
 nome: 'Paula Coelho',
 idade: 25,
 cidade: 'Uberlândia'
}
// console.log(objPessoa)
console.log(`Meu nome é ${objPessoa.nome}, tenho ${objPessoa.idade} anos e moro em ${objPessoa.cidade}`)

/*
Atualizar propriedade do objeto
Usando o objeto pessoa:
Altere a idade da pessoa
Mostre a nova idade no console */
objPessoa.idade = 30;
console.log(`Meu nome é ${objPessoa.nome}, tenho ${objPessoa.idade} anos e moro em ${objPessoa.cidade}`)

/*Objeto calculadora
Crie um objeto calculadora com os métodos:
somar(a, b)
subtrair(a, b)
multiplicar(a, b) */
const objCalculadora = {
    a: 1,
    b: 2,

    somar: function(){
        this.somaAB = this.a + this.b;
        return this.somaAB;
    },

    subtrair: function(){
        this.subtracaoAB = this.a - this.b;
        return this.subtracaoAB;
    },

    multiplicar: function(){
        this.mutiplicacaoAB = this.a*this.b;
        return this.mutiplicacaoAB;
    }
}
console.log(objCalculadora.somar())
console.log(objCalculadora.subtrair())
console.log(objCalculadora.multiplicar())
console.log(objCalculadora)
//Explicação: Este objeto possui os seus métodos que armazenam o resultados destes
// nas novas propriedades somaAB, subtracaoAB e mutiplicacaoAB criadas pelos pŕoprios métodos

// versão chatgpt
let calculadora = {
  somar: function(a, b) {
    return a + b;
  },

  subtrair: function(a, b) {
    return a - b;
  },

  multiplicar: function(a, b) {
    return a * b;
  }
};
console.log(calculadora.somar(2, 3))
console.log(calculadora)
// Explicação: Este objeto possui os seus métodos, mas não armazena os resultados
// nem novas propriedades

/* ----- 10) Crie um objeto aluno ---------
nome
notas (um array de números)
Um método calcularMedia() que:
Calcule e retorne a média das notas
*/ 
console.log('----- 10) Crie um objeto aluno ---------')
const aluno = {
    nome: 'Carlos',
    // notas : [7, 8, 9.5, 4, 3, 6],
    // notas : [10, 10, 10, 10],
    // //Função cria notas

    disciplinas : ['Matemática', 'Português', 'História', 'Geografia', 'Inglês'],
    // disciplinas : ['Matemática', 'Português', 'História', 'Geografia', 'Inglês', 'Ed. Física', 'Filosofia', 'Sociologia'],
    notasRandom: function(){
        const notas = [];
        const nMaterias = this.disciplinas.length //
        for(let j=0; j< nMaterias; j++){ // loop cria uma notas com números randômicos
            notas.push(Math.trunc(Math.random()*10))
        }
        this.notas = notas;
        return this.notas;
    },

    calcularMedia: function(){
        let sum = 0;
        for(let i=0; i<this.notas.length; i++){
            sum = sum + this.notas[i];
        }
        return sum/(this.notas.length);
    }
}
console.log(aluno)// visualizar o objeto
console.log(aluno.disciplinas)
console.log(aluno.notasRandom())// visualizar a propriedade do objeto criada a partir do próprio'' método
console.log(`A média das notas é ${aluno.calcularMedia(aluno.notasRandom())}`)