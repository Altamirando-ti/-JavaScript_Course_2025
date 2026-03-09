"use strict";

const myName = "Neto";

function first() {
  const age = 30;
  console.log('Nosso milênio:', millenial); // não funcionara, pois a variável millenial existe abaixo.

  if (age >= 30) {
    const decade = 3;
    var millenial = 2000;
  }

  function second() {
    const job = "teacher";

    console.log(`${myName} is a ${age}-old ${job}.`);
    console.log(`Estamos nos anos ${millenial}`)
    // console.log(`He was born in the ${decade}rd decade`); // não funcionara, pois a variável decade existe dentro do bloco if que é irmão e não pai da função second.
  }
    second();
  
    function third(){
      const teste = "Teste"

      console.log(`Esse é um ${teste} para a variável ${millenial}`);
    }
    third();
}

first();

