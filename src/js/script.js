import { tns } from 'tiny-slider';
import IMask from 'imask';

// слайдеры

const sliderPromo = tns({
  container: '.promo__tns',
  items: 1,
  slideBy: 1,
  autoplay: false,
  navContainer: '.promo__nav',
  loop: true,
  prevButton: '.promo__slider-prev',
  nextButton: '.promo__slider-next',
  responsive: {
    768: {},
    992: {},
    1200: {},
  },
});

const sliderLicence = tns({
  container: '.licence__tns',
  items: 1,
  slideBy: 1,
  autoplay: false,
  nav: false,
  loop: false,
  prevButton: '.licence__slider-prev',
  nextButton: '.licence__slider-next',
  responsive: {
    768: {
      items: 1,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

const sliderSocial = tns({
  container: '.social__slider-wrapper',
  items: 1,
  slideBy: 1,
  autoplay: false,
  nav: false,
  loop: false,
  controlsContainer: '.social__slider-controls',
});

// форма

const form = document.querySelector('.contacts__form');
const nameInput = form.querySelector('[name="name"]');
const phoneInput = form.querySelector('[name="phone"]');
const emailInput = form.querySelector('[name="email"]');
const error = form.querySelector('.contacts__form-error');
const content = document.querySelector('.contacts__feedback-content');
const thanks = document.querySelector('.contacts__thanks');
const thanksBtn = document.querySelector('.contacts__thanks-btn');

function resetForm() {
  nameInput.value = '';
  phoneInput.value = '';
  emailInput.value = '';
  error.textContent = '';
}

const maskOptions = {
  mask: '+{7}(000)000-00-00',
};
const mask = IMask(phoneInput, maskOptions);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
  if (!error.textContent) {
    const formData = {
      name: nameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
    };
    console.log(JSON.stringify(formData));
    resetForm();
    showThanks();
  }
});

thanksBtn.addEventListener('click', () => {
  content.classList.add('show');
  thanks.classList.remove('show');
});

function validateForm() {
  if (nameInput.value.length < 2) {
    error.textContent = 'Имя не должно быть короче 2 символов';
  } else if (phoneInput.value.length < 16) {
    error.textContent = 'Введите номер телефона';
  } else if (emailInput.value && !emailRegex.test(emailInput.value)) {
    error.textContent = 'Некорректный адрес Email';
  } else error.textContent = '';
}

function showThanks() {
  content.classList.remove('show');
  thanks.classList.add('show');
}

// мобильное меню

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');
const menu__links = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
  menu.classList.add('show');
  document.body.style.overflow = 'hidden';
});

menuClose.addEventListener('click', () => closeMenu());

menu__links.forEach(link => {
  link.addEventListener('click', () => closeMenu());
});

function closeMenu() {
  menu.classList.remove('show');
  document.body.style.overflow = '';
}