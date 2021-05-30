'use strict';
var navMain = document.querySelector('.site-nav');
var navToggler = document.querySelector('.site-nav__toggler');

navMain.classList.remove('site-nav--nojs');
navMain.classList.add('site-nav--closed');
navToggler.classList.add('site-nav__toggler--show');

navToggler.addEventListener('click', function () {
  if (navMain.classList.contains('site-nav--closed')) {
    navMain.classList.remove('site-nav--closed');
    navMain.classList.add('site-nav--opened');
  } else {
    navMain.classList.add('site-nav--closed');
    navMain.classList.remove('site-nav--opened');
  }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slider__item');
  var links = document.getElementsByClassName('slider__link');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(' slider__link--active', '');
  }
  slides[slideIndex - 1].style.display = 'flex';
  links[slideIndex - 1].className += ' slider__link--active';
}

plusSlides(1);
currentSlide(1);
