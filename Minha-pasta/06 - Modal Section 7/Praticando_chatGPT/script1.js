/*📌 Seu desafio:
Criar o script.js usando quase exatamente o código que você enviou.
 */

"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnAbrirModal = document.querySelector(".show-modal");
const btnFecharModal = document.querySelector(".close-modal");

//Aparecer Modal
btnAbrirModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

function fecharModal(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
//Fechar Modal
// btnFecharModal.addEventListener("click", () => {
//   fecharModal();
// });

btnFecharModal.addEventListener("click", fecharModal);

//Fechar modal clicando no  Overlay
overlay.addEventListener('click', fecharModal)

//Fechar modal apertando Esc
document.addEventListener('keydown', function(e){
    // console.log(e.key);
    if(e.key === 'Escape'){
        // console.log('Tecla Esc clicada');
        fecharModal();
    }
})
