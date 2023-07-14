// функции с данными для модального окна
let contextModal = document.querySelector('.modal__p');
let imgCardModal = document.querySelector('.modal__img');



function celebrate() {
  if(modalWindow.dataset.modal == 'cel') {
    contextModal.innerHTML = 'Now he had two hours to celebrate his glory before going back to work.';
    imgCardModal.src = './assets/img-cards/celebrate.jpg';
  }
}

