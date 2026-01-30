'use strict';

const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay')
const btnOpenModal = document.querySelector('#openModalBtn')
const btnCloseModal = document.querySelector('.close-btn')

// console.log(modal);

btnOpenModal.addEventListener('click', function(){
    modalOverlay.classList.add('active')
    // modalOverlay.style.display = 'flex'
});

btnCloseModal.addEventListener('click', function(){
    modalOverlay.classList.remove('active');
    // modalOverlay.style.display = 'none'
})