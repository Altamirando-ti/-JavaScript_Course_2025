"use strict";

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

const btnsOpenModal = document.querySelectorAll(".show-modal");

const btnCloseModal = document.querySelector(".close-modal");

console.log(btnsOpenModal);

let openModal = function(){
    modal.classList.remove('hidden');
    // modal.style.display = 'block' // outra maneira
    overlay.classList.remove('hidden')
}

for(let i=0 ; i<btnsOpenModal.length ; i++){
    // console.log(btnsOpenModal[i].textContent);
    btnsOpenModal[i].addEventListener('click', openModal);
}

// let closeModal = function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden')
// } 

//Também pode ser por meio de um função declaração

function closeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)
