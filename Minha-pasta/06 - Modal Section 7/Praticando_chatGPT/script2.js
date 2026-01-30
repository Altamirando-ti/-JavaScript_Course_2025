"use strict";

/*📌 Seu desafio JS
Usar querySelectorAll('.show-modal')
Criar um for para adicionar o click
Reutilizar openModal() */

const btnAbrirModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnFecharModal = document.querySelector(".close-modal");

//Abrir modal
for (let i = 0; i < btnAbrirModal.length; i++) {
  btnAbrirModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

btnFecharModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
