// nav menu
const navList = document.querySelector('.nav__list');

navList.addEventListener('click', event => {
  navList
    .querySelectorAll('.nav__link')
    .forEach(el => el.classList.remove('nav__link_active'));
  if (event.target.classList.contains('nav__link')) {
    event.target.classList.add('nav__link_active');
  }
});

//phones black screen
const phoneVertical = document.querySelector('.slider__phoneImg-vertical');
const phoneHorizontal = document.querySelector('.slider__phoneImg-horizontal');
const phoneVerticalBlackScreen = document.querySelector(
  '.phoneImg-vertical__blackScreen'
);
const phoneHorizontalBlackScreen = document.querySelector(
  '.phoneImg-horizontal__blackScreen'
);

phoneVertical.onclick = function() {
  const style = window.getComputedStyle(phoneVerticalBlackScreen);
  const { display } = style;
  console.log(style.display);
  if (display === 'none') {
    phoneVerticalBlackScreen.style.display = 'block';
  } else if (display === 'block') {
    phoneVerticalBlackScreen.style.display = 'none';
  }
};

phoneHorizontal.onclick = function() {
  const style = window.getComputedStyle(phoneHorizontalBlackScreen);
  const { display } = style;
  if (display === 'none') {
    phoneHorizontalBlackScreen.style.display = 'block';
  } else if (display === 'block') {
    phoneHorizontalBlackScreen.style.display = 'none';
  }
};

//slider 
const buttonLeft = document.querySelector('.slider__button-left');
const buttonRight = document.querySelector('.slider__button-right');
let slider = document.querySelectorAll('.slider');
let i = 0;

buttonLeft.onclick = function() {
  slider[i].style.display = 'none';
  i++;
  if (i >= slider.length) {
    i = 0;
  }
  slider[i].style.display = 'flex';
};

buttonRight.onclick = function() {
  slider[i].style.display = 'none';
  i++;
  if (i >= slider.length) {
    i = 0;
  }
  slider[i].style.display = 'flex';
};

//portfolio
const portfolioList = document.querySelector('.portfolio__nav-list');
const portfolioImgs = document.querySelectorAll('.portfolio-gallery__img');


//portflio image border
const border = document.querySelector('.portfolio-gallery__wrapper');

border.addEventListener('click', event => {
  border
    .querySelectorAll('.portfolio__img')
    .forEach(el => el.classList.remove('portfolio__img_active'));
  if (event.target.classList.contains('portfolio__img')) {
    event.target.classList.add('portfolio__img_active');
  }
});

//portflio image shuffle
function imgShuffle() {
  portfolioImgs.forEach(el => {
    el.style.order = Math.floor(Math.random() * 12);
  });
};

portfolioList.addEventListener('click', event => {
  portfolioList
    .querySelectorAll('.portfolio__link')
    .forEach(el => el.classList.remove('portfolio__link_active'));

  if (event.target.classList.contains('portfolio__link')) {
    event.target.classList.add('portfolio__link_active');
    imgShuffle();
  }
});



