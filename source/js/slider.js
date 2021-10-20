const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const links = slider.querySelectorAll('.slider__link');

let index = 0;

const activeSlide = (n) => {
  for (let slide of slides) {
    slide.classList.remove('slide--active');
  }

  slides[n].classList.add('slide--active');
};

const activeTab = (n) => {
  for (let link of links) {
    link.classList.remove('slider__link--active');
  }

  links[n].classList.add('slider__link--active');
};

const initSlide = (ind) => {
  activeSlide(ind);
  activeTab(ind);
};


links.forEach((item, tabIndex) => {
  item.addEventListener('click', () => {
    index = tabIndex;
    initSlide(index);
  });
  item.removeEventListener('click', () => {});
});
