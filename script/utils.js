// нумерация слов

const numberParagraph = document.querySelectorAll('.conteiner p');

for (let i = 0; i < numberParagraph.length; i++) {
  const numberText = i + 1;
  numberParagraph[i].innerHTML = numberText + '. ' + numberParagraph[i].innerHTML;
    
}


// переключение темы c тёмной на светлую

const toggleTheme = document.querySelectorAll('.header__png');
const changeParagraph = document.querySelector('.header__p');
const lightTheme = document.querySelector('.light');
const darkTheme = document.querySelector('.darkTheme');


toggleTheme.forEach(function(item) {
  item.addEventListener('click', function(e) {
    // let toch = e.target;
    // console.log('toch: ', toch);

    // toggleTheme.forEach(function(item) {
    //   item.classList.toggle('hidden');
    // })
    
    // if(toch.dataset.theme == 'dark') {
    //   changeParagraph.innerHTML = 'Светлая тема';
    //   document.body.classList.add('dark');
    
    // } else {
    //   changeParagraph.innerHTML = 'Тёмная тема';
    //   document.body.classList.remove('dark');
    // }

    if(localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', 'dark');
    }

    addDarkClassToHtml();
  });
    
});


function addDarkClassToHtml() {

  try {
    if (localStorage.getItem('theme') === 'dark') {
      
      changeParagraph.innerHTML = 'Светлая тема';
      document.body.classList.add('dark');
      lightTheme.classList.remove('hidden');
      darkTheme.classList.add('hidden');
    } else {
      
      changeParagraph.innerHTML = 'Тёмная тема';
      document.body.classList.remove('dark');
      darkTheme.classList.remove('hidden');
      lightTheme.classList.add('hidden');
    }
  } catch (error) {
    console.error('Что-то пошло не так!')
  }
}

addDarkClassToHtml();


// Модальные окна

const modalWindow = document.querySelector('.celebrate');
const openModalWindow = document.querySelector('.container__modal');
const closeModalWindow = document.querySelector('.modal__close');
const overlayCloseModalWindow = document.querySelector('.overlay');

function closeWindow() {
  openModalWindow.classList.add('hidden');
}

modalWindow.addEventListener('click', function() {
  openModalWindow.classList.toggle('hidden');
});

closeModalWindow.addEventListener('click', closeWindow)

document.addEventListener('keydown', function(e) {
  console.log(e.key)
  if(e.key === 'Escape' && !openModalWindow.classList.contains('hidden')) {
    closeWindow()
  }
})

overlayCloseModalWindow.addEventListener('click', closeWindow);











