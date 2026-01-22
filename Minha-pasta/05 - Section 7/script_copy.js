"use strict";
// 75 76. Selecting e manipulating DOM Manipulation
// console.log( document.querySelector('.message').textContent);
// // document.querySelector('.message').textContent = 'Correct Number'
// document.querySelector('.number').textContent = 15
// document.querySelector('.score').textContent = 10

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 13

// 77. Handling click events
// document.querySelector('.check').addEventListener('click', function(){
//     console.log(document.querySelector('.guess').value);
//     document.querySelector('.message').textContent = 'Correct Number'
// })

// Criar número aleatóio
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 10;
let highScore = 0;

//-------Lógica do professor

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   //   document.querySelector(".message").textContent = "Try again!";
//   //   console.log(guess, typeof guess);

//   //Caso não tenha sido inserido número
//   // if(guess ===0){document.querySelector('.message').textContent = 'No number inserted!'}
//   if (!guess)
//     document.querySelector(".message").textContent = "No number inserted!";
//   else if (guess === secretNumber)
//     document.querySelector(".message").textContent =
//       "Você acertou!Numero correto.";
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Chute alto.Try again!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You lost the game!";
//       document.querySelector('.score').textContent = 0
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Chute baixo.Try again!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You lost the game!";
//       document.querySelector('.score').textContent = 0
//     }
//   }
// });

//-------Minha lógica
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
      // contagem do highScore
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
      
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
2. In the handler function, restore initial values of the score and number variables
3. Restore the initial conditions of the message, number , score and guess input field
4. Also restore the original background (#222) and number width (15rem)
*/

//Minha resolução challenge 1 video 80
document.querySelector(".again").addEventListener("click", () => {
  //------------
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").style.fontSize = "6rem";
  //   document.querySelector(".between20").textContent = score;
});
