"use strict";

function calcAge(thisYear, birthYear) {
  const age = thisYear - birthYear;
  //   console.log(firstName);
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = "Steven"; // variáveis locais tem prioridade sobre as variáveis globais, ou seja, se houver uma variável com o mesmo nome dentro de um bloco, ela irá sobrescrever a variável global dentro desse bloco.
      const str = `Oh, and you're a millenial, ${firstName}`;
      var millenial = true; // var é function scoped, ou seja, ela é visível em toda a função printAge, mesmo que ela tenha sido declarada dentro do bloco if.
      console.log(str);

      function add(a, b) {
        return a + b;
      }

    //   output = "NEW OUTPUT!"; // atribuindo a variável declared com const irá causar um error, pois a variável output foi declarada com const e não pode ser reatribuída.
      const output = "NEW OUTPUT!"; // Funcionará! Pois declarando uma nova variável com o mesmo nome dentro do bloco if, isso é permitido, pois a variável output declarada com const tem escopo de bloco, ou seja, ela só é visível dentro do bloco if. A variável output declarada com const fora do bloco if continua existindo e não é afetada pela variável output declarada dentro do bloco if.
    }
    // console.log(str); // não funcionara, pois a variável str existe dentro do bloco if e não fora dele.
    console.log(millenial); // funcionará, pois a variável millenial foi declarada com var e é function scoped.
    // console.log(add(2, 3)); //não funcionará, pois a função add foi declarada dentro do bloco if. Se o strict mode estiver ativado, isso causa um erro, pois as funções declaradas dentro de blocos não são acessíveis fora deles.
    console.log(output);
  }
  printAge();
  // console.log(millenial); // não funcionará, pois a variável millenial existe dentro da função printAge e não fora dela. Mesmo que a variável millenial tenha sido declarada com var, ela é function scoped, ou seja, ela só é visível dentro da função printAge.

  return age;
}

const firstName = "Neto";
// console.log(calcAge(2026, 1991));
calcAge(2026, 1988);
// console.log(age); // não funcionara, pois a variável age existe dentro da função calcAge e não fora dela.
// printAge(); // não funcionara, pois a função printAge existe dentro da função calcAge e não fora dela.
// console.log(millenial); // não funcionará, pois a variável millenial existe dentro da função printAge e não fora dela. Mesmo que a variável millenial tenha sido declarada com var, ela é function scoped, ou seja, ela só é visível dentro da função printAge.


//-----------
const myName = "Neto";
 if(myName === "Neto") {
    console.log(`Olá eu me chamo ${myName} e tenho ${age} anos.`); // "Error:  Cannot access 'age' before initialization."  Não funcionará, mas como a variável age exista dentro da função calcAge o erro é diferente de se ela não existisse, pois a variável age é declarada com const e tem escopo de bloco, ou seja, ela só é visível dentro do bloco if. Mesmo que a variável age tenha sido declarada com const, ela ainda não foi inicializada no momento em que o console.log é executado, pois a variável age só é inicializada quando a função calcAge é chamada. Portanto, o erro é diferente de caso a variável age não existisse .
    const age = 30;
    console.log(x); // "Error: x is not defined." Não funcionará pois x não foi definida no scopo do bloco if. Ou seja, a variável x não existe dentro do bloco if.
  }