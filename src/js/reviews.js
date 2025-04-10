import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { Keyboard, Mousewheel } from 'swiper/modules';

const reviewsList = document.querySelector('.reviews-list');
const prevButton = document.querySelector('.reviews-btn-prev');
const nextButton = document.querySelector('.reviews-btn-next');

let swiper;

function loadReviews() {
  axios
    .get('https://portfolio-js.b.goit.study/api/reviews')
    .then(response => {
      createReviews(response.data);
    })
    .catch(error => {
      iziToast.warning({
        title: 'We are sorry',
        message: 'Failed to load reviews. Please try again later.',
        position: 'center',
        timeout: 5000,
      });
      console.error('Помилка при отриманні відгуків:', error);
      reviewsList.insertAdjacentHTML(
        'beforeend',
        `<li class="review-item error">Not found</li>`
      );
      hideButtons();
    });
}

// обсервер
const reviewsSection = document.querySelector('#reviews-section');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadReviews();
        observer.unobserve(reviewsSection);
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(reviewsSection);

function createReviews(reviews) {
  const markup = reviews
    .map(review => {
      return `
      <li class="swiper-slide review-item">
        <img class="review-img" src="${review.avatar_url}" alt="reviewer's avatar" width="48" height="48"  />
        <h3 class="subtitle review-author">${review.author}</h3>
        <p class="text review-text">${review.review}</p>
      </li>
      `;
    })
    .join('');

  reviewsList.insertAdjacentHTML('beforeend', markup);

  initSwiper();
}

function initSwiper() {
  swiper = new Swiper('.swiper-reviews', {
    modules: [Keyboard, Mousewheel],
    spaceBetween: 16,
    loop: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      forceToAxis: true,
      releaseOnEdges: true,
    },
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  });

  prevButton.addEventListener('click', () => {
    swiper.slidePrev();
    updateButtonState();
  });

  nextButton.addEventListener('click', () => {
    swiper.slideNext();
    updateButtonState();
  });

  swiper.on('slideChange', updateButtonState);

  updateButtonState();
}

function updateButtonState() {
  prevButton.disabled = swiper.isBeginning;
  prevButton.classList.toggle('disabled', swiper.isBeginning);

  nextButton.disabled = swiper.isEnd;
  nextButton.classList.toggle('disabled', swiper.isEnd);
}

function hideButtons() {
  const buttonsContainer = document.querySelector('.reviews-btn-container');
  if (buttonsContainer) {
    buttonsContainer.classList.add('hide');
  }
}
