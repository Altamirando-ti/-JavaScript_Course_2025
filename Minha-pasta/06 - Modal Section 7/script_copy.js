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

// Evento acionado quando apertado alguma tecla
document.addEventListener('keydown', function(){
    // console.log('Tecla pressionada!');
})

// passando a tecla pressionada, ou seja, o evento como argumento da função em forma de objeto(e) 
// document.addEventListener('keydown', function(e){
//     // console.log(e);
//     console.log(e.key);
// })

// Ao apertar teclas
document.addEventListener('keydown', function(e){
    // if(e.key === 'Escape') console.log('A tecla Esc foi pressionada!');
    console.log(e.key);
    // if(e.key === 'Escape') {
    //     if(!modal.classList.contains('hidden')){
    //         console.log('Agora contém hidden');
    //         closeModal();
    //     }
    // }
    // refatorei as linhas em comentário acima para somente a linha abaixo
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

