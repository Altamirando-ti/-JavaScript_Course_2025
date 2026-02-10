"use strict";

const pontos = 20;

const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");
const dice = document.querySelector(".dice");
const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const pontosParaVencer = document.getElementById("pontos");
const frase = document.querySelector(".frase");

dice.classList.add("hidden");
score0.textContent = "0";
score1.textContent = "0";
pontosParaVencer.textContent = String(pontos);

//Função clicar no Rolldice - funcionando
let soma = 0;
let numPlayer = 0;
let scoreMenorq100 = true;


btnRollDice.addEventListener("click", function () {
  if (scoreMenorq100) {
    frase.classList.add("hidden");
    let numDado = rollDice();
    if (numDado !== 1) {
      soma = soma + numDado;
      // currentScore0.textContent = soma;
      // currenteScore aciona dinamicamente
      document.getElementById(`current--${numPlayer}`).textContent = soma;
    } else {
      //Switch to next player
      if (numPlayer === 0) {
        soma = 0;
        document.getElementById(`current--${numPlayer}`).textContent = soma;
        document
          .querySelector(`.player--${numPlayer}`)
          .classList.remove("player--active");
        numPlayer = 1;
        document
          .querySelector(`.player--${numPlayer}`)
          .classList.add("player--active");
      } else {
        soma = 0;
        document.getElementById(`current--${numPlayer}`).textContent = soma;
        document
          .querySelector(`.player--${numPlayer}`)
          .classList.remove("player--active");
        numPlayer = 0;
        document
          .querySelector(`.player--${numPlayer}`)
          .classList.add("player--active");
      }
    }
  }
});

//Função jogar o dado
function rollDice() {
  let num = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.src = `dice-${num}.png`;
  // console.log(num);
  return num;
}

// Botão Hold
let soma0 = 0;
let soma1 = 0;

btnHold.addEventListener("click", function () {
  if (scoreMenorq100) {
    if (numPlayer === 0) {
      soma0 = soma0 + soma;
      score0.textContent = soma0;

      // Verificar se o jogador 1 ganhou
      if (soma0 >= pontos) {
        scoreMenorq100 = false;
        // console.log("Jogador 1 ganhou!");
        // window.alert("Jogador 1 ganhou!");
        document
          .querySelector(`.player--${numPlayer}`)
          .classList.remove("player--active");
        document
          .querySelector(`.player--${numPlayer}`)
          .classList.add("player--winner");
        return; // Para a execução
      }
      soma = 0;
      document.getElementById(`current--${numPlayer}`).textContent = soma;
      document
        .querySelector(`.player--${numPlayer}`)
        .classList.remove("player--active");
      numPlayer = 1;
      document
        .querySelector(`.player--${numPlayer}`)
        .classList.add("player--active");
    } else {
      soma1 = soma1 + soma;
      score1.textContent = soma1;

      // Verificar se o jogador 2 ganhou
      if (soma1 >= pontos) {
        scoreMenorq100 = false;
        // console.log("Jogador 2 ganhou!");
        // window.alert("Jogador 2 ganhou!");
        document
          .querySelector(`.player--${numPlayer}`)
          .classList.remove("player--active");
        document
          .querySelector(`.player--${numPlayer}`)
          .classList.add("player--winner");
        return; // Para a execução  
      }
      soma = 0;
      document.getElementById(`current--${numPlayer}`).textContent = soma;
      document
        .querySelector(`.player--${numPlayer}`)
        .classList.remove("player--active");
      numPlayer = 0;
      document
        .querySelector(`.player--${numPlayer}`)
        .classList.add("player--active");
    }
  }
});

// Botão NewGame
btnNewGame.addEventListener("click", () => {
  soma0 = 0;
  soma1 = 0;
  soma = 0;
  scoreMenorq100 = true;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add("hidden");
  frase.classList.remove("hidden");
  document.querySelector(`.player--${numPlayer}`).classList.remove("player--winner");
  numPlayer = 0;
  document.querySelector(`.player--1`).classList.remove("player--active");
  document.querySelector(`.player--0`).classList.add("player--active");
});

//-----------função alerta para teste!---------
function alerta() {
  window.alert("Teste funcionando!");
}
