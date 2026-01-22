"use strict";
// Coding Challenge 1

// Criar número aleatóio
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;

document.querySelector(".between20").textContent = score;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // debugger;
  if (score > 1) {
    if (!guess)
      //Caso não tenha sido inserido número
      document.querySelector(".message").textContent = "No number inserted!";
    else if (guess === secretNumber) {
      //Quando vence
      document.querySelector(".message").textContent =
        "Você acertou!Numero correto.";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").style.fontSize = "10rem";
    } else if (guess > secretNumber) {
      //Quando o chute é alto
      document.querySelector(".message").textContent = "Chute alto.Try again!";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess < secretNumber) {
      //Quando o chute é baixo
      document.querySelector(".message").textContent = "Chute baixo.Try again!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "You lost the game!";
    document.querySelector(".score").textContent = 0;
  }
});

// Coding Challenge #1

/*
Implement a game rest funcionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, secretNumber , score and guess input field
4. Also restore the original background (#222) and number width (15rem)
*/

//Opção chatGPT
// document.querySelector('.again').addEventListener('click', ()=>{
//     location.reload();
// })

//Minha resolução
document.querySelector(".again").addEventListener("click", () => {
  //------------
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 5;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").style.fontSize = "6rem";
  //   document.querySelector(".between20").textContent = score;
});
