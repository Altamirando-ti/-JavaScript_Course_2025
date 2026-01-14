// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* Foi instalada as extensão:
 Prettier
 */
// é Necessário salvar para que o prettier faça as alterações automáticas

// const x = "25"; // as àspas foram colocadas automaticamente
// // const teste = nasc => 2025 - nasc;
// const teste = (nasc) => 2025 - nasc; // O parenteses foi colocado automaticamente
// //Aruivo -> Preferências -> Configurar Snippets
// console.log(); // basta escrever cl
// console.log(teste(1988));

// -------63. Debugging with the Console and Breakpoint------
console.log("-------63. Debugging with the Console and Breakpoint------");
const medidaKelvin = function () {
  const medida = {
    tipo: "temp",
    unit: "celcius",
    value: Number(prompt("Escreva a temperatura em graus Celcius: "))
  };
  // console.log(medida.value);// ok!
//   console.log(medida);// Erro está aqui. O valor no objeto é uma string
//   console.table(medida); // outra maneira
  const kelvin = medida.value + 273;
  return kelvin;
};
console.log(medidaKelvin());
