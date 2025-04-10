import Accordion from 'accordion-js';
import Swiper from 'swiper';
import { Mousewheel, Keyboard } from 'swiper/modules';

const container = document.querySelector('#about-me-accordion');
const swWrap = document.querySelector('#skills-swiper');
const nextButton = document.querySelector('.skills-btn-next');

const accordion = new Accordion(container, {
  duration: 400,
  showMultiple: true,
  openOnInit: [0],
});

const swiper = new Swiper(swWrap, {
  modules: [Mousewheel, Keyboard],
  spaceBetween: 0,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    sensitivity: 3,
    releaseOnEdges: false,
  },
  autoplay: {
    delay: 3000,
  },
  grabCursor: true,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

nextButton.addEventListener('click', () => {
  swiper.slideNext();
});
