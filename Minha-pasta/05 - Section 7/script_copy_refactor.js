"use strict";
// -----Variáveis e constantes----
// Criar número aleatóio
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;
const docQueryNumber = document.querySelector(".number");

// ------Funções
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = (message) => {
  document.querySelector(".score").textContent = message;
};


//--------Funcionalidade para o botão check
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // debugger;
  if (score > 1) {
    if (!guess)
      //Caso não tenha sido inserido número
      displayMessage("No number inserted!");
    else if (guess === secretNumber) {
      //Quando vence
      displayMessage("Você acertou!Numero correto.");
      docQueryNumber.textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      docQueryNumber.style.width = "30rem";
      docQueryNumber.style.fontSize = "10rem";
      // contagem do highScore
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      displayMessage(
        guess > secretNumber
          ? "Chute alto.Try again!"
          : "Chute baixo.Try again!",
      );
      score--;
      displayScore(score);
    }
  } else {
    displayMessage("You lost the game!");
    displayScore(0);
  }
});

// ---------- Funcionalidade para o botão Again
document.querySelector(".again").addEventListener("click", () => {
  //------------
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;

  displayMessage("Start guessing...");
  displayScore(score);
  docQueryNumber.textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  docQueryNumber.style.width = "15rem";
  docQueryNumber.style.fontSize = "6rem";
});
