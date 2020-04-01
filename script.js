// navigation 

document.addEventListener('scroll', onScroll);

function onScroll() {
  const curPosition = window.scrollY;
  const section = document.querySelectorAll('section');
  const links = document.querySelectorAll('.nav__link');

  section.forEach(el => {
    if (
      (el.offsetTop - 96 <= curPosition &&
        el.offsetTop - 96 + el.offsetHeight > curPosition) ||
      window.scrollY + window.innerHeight > 3526
    ) {
      links.forEach(a => {
        a.classList.remove('nav__link_active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('nav__link_active');
        }
      });
    }
  });
}

// burger menu
const burgerBtn = document.querySelector(".header__burger");
const headerNav = document.querySelector(".nav");
const logo = document.querySelector(".logo");

burgerBtn.onclick = function() {
  if (burgerBtn.classList.contains('active')) {
    burgerBtn.classList.remove('active');
    headerNav.classList.remove('active');
    logo.classList.remove('active');
  } else {
    burgerBtn.classList.add('active');
    headerNav.classList.add('active');
    logo.classList.add('active');
  }
};

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
const phoneVertical = document.querySelector('.phoneImg-vertical__click');
const phoneHorizontal = document.querySelector('.phoneImg-horizontal__click');
const phoneVerticalOff = document.querySelector('.phoneImg-vertical__off');
const phoneHorizontalOff = document.querySelector('.phoneImg-horizontal__off');

phoneVertical.onclick = function() {
  const style = window.getComputedStyle(phoneVerticalOff);
  const { display } = style;
  if (display === 'none') {
    phoneVerticalOff.style.display = 'block';
  } else if (display === 'block') {
    phoneVerticalOff.style.display = 'none';
  }
};

phoneHorizontal.onclick = function() {
  const style = window.getComputedStyle(phoneHorizontalOff);
  const { display } = style;
  if (display === 'none') {
    phoneHorizontalOff.style.display = 'block';
  } else if (display === 'block') {
    phoneHorizontalOff.style.display = 'none';
  }
};

//slider 

let slides = document.querySelectorAll('.slider');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + slides.length) % slides.length;
}

function hideItem(direction) {
  isEnabled = false;
  slides[currentItem].classList.add(direction);
  slides[currentItem].addEventListener('animationend', function() {
    this.classList.remove('slider_active', direction);
  });
}

function showItem(direction) {
  slides[currentItem].classList.add('next', direction);
  slides[currentItem].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('slider_active');
    isEnabled = true;
  });
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

document
  .querySelector('.slider__button-left')
  .addEventListener('click', function() {
    if (isEnabled) {
      previousItem(currentItem);
    }
  });

document
  .querySelector('.slider__button-right')
  .addEventListener('click', function() {
    if (isEnabled) {
      nextItem(currentItem);
    }
  });


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

//form submiting
const submitBtn = document.querySelector('.submitBtn');
const closeBtn = document.querySelector('.closeBtn');


submitBtn.addEventListener("click", event => {
  const name = document.getElementById("name").value.toString();
  const email = document.getElementById("email").value.toString();
  const subject = document.getElementById("subject").value.toString();
  const description = document.getElementById("description").value.toString();
  
  if (name && email) {
    event.preventDefault();
    if (subject) {
      document.getElementById(
        'result-subject'
      ).innerText = `Subject: ${subject}`;
    } else {
      document.getElementById('result-subject').innerText = `No subject`;
    }

    if (description) {
      document.getElementById(
        'result-description'
      ).innerText = `Description: ${description}`;
    } else {
      document.getElementById(
        'result-description'
      ).innerText = `No description`;
    }

    document.getElementById("message-block").classList.remove("hidden");
  }
});

//
closeBtn.addEventListener('click', () => {
  document.getElementById('result-subject').innerText = '';
  document.getElementById('result-description').innerText = '';
  document.getElementById('message-block').classList.add('hidden');
});