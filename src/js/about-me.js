import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';

const container = document.querySelector('#about-me-accordion');

const accordion = new Accordion(container, {
  duration: 400,
  showMultiple: true,
  openOnInit: [0],

  onOpen: function (currentElement) {
    console.log(currentElement);
  },
});


const swWrap = document.querySelector('#skills-swiper');

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

const nextButton = document.querySelector('.skills-btn-next');

nextButton.addEventListener('click', () => {
  swiper.slideNext(); //перехід нанаступний слайд
});
