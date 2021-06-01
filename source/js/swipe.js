import './swiper-bundle.js';

// var tabs = document.querySelector('.tabs-buttons .swiper-wrapper');

// var tabButtons = new Swiper('.tabs-buttons', {
//   slidesPerView: 'auto',
//   freeMode: true,
//   // scrollbar: '.swiper-scrollbar',
//   mousewheelControl: true,
//   onTap: function(swiper, event) {
//     if ( event.target.classList.contains('swiper-slide') && !event.target.classList.contains('active-tab') ) {
//       event.target.parentElement.querySelector('.active-tab').classList.remove('active-tab');
//       event.target.classList.add('active-tab');
//       tabContent.slideTo(swiper.clickedIndex);
//     }
//   }
// });

// var tabContent = new Swiper('.tabs-content', {
//   onSlideChangeStart: function(swiper, event) {
//     tabs.children[swiper.previousIndex].classList.remove('active');
//     tabs.children[swiper.activeIndex].classList.add('active');
//   }
// });

'use strict';

// function Tabs() {
//   var bindAll = function() {
//     var menuElements = document.querySelectorAll('[data-tab]');
//     for(var i = 0; i < menuElements.length ; i++) {
//       menuElements[i].addEventListener('click', change, false);
//     }
//   }

//   var clear = function() {
//     var menuElements = document.querySelectorAll('[data-tab]');
//     for(var i = 0; i < menuElements.length ; i++) {
//       menuElements[i].classList.remove('active');
//       var id = menuElements[i].getAttribute('data-tab');
//       document.getElementById(id).classList.remove('active');
//     }
//   }

//   var change = function(e) {
//     clear();
//     e.target.classList.add('active');
//     var id = e.currentTarget.getAttribute('data-tab');
//     document.getElementById(id).classList.add('active');
//   }

//   bindAll();
// }

// var connectTabs = new Tabs();

// var swiper = new Swiper('.swiper-container', {
//       slidesPerView: 3,
//       spaceBetween: 30,
//       freeMode: true,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//     });

new Swiper('.swiper__container');
