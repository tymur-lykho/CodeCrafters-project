import Swiper from 'swiper';

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  },
  grabCursor: true,
  loop: false,
});

const prevButton = document.querySelector('.arrow-btn-left');
const nextButton = document.querySelector('.arrow-btn-right');

prevButton.addEventListener('click', () => {
  swiper.slidePrev();
  updateButtonState();
});

nextButton.addEventListener('click', () => {
  swiper.slideNext();
  updateButtonState();
});

function updateButtonState() {
  prevButton.disabled = swiper.isBeginning;
  nextButton.disabled = swiper.isEnd;

  prevButton.classList.toggle('disabled', swiper.isBeginning);
  nextButton.classList.toggle('disabled', swiper.isEnd);
}

swiper.on('slideChange', updateButtonState);

updateButtonState();
