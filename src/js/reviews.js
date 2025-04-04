import axios from "axios";
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Keyboard } from "swiper/modules";


const reviewsList = document.querySelector(".reviews-list");

axios.get('https://portfolio-js.b.goit.study/api/reviews')
  .then(response => { createReviews(response.data); })
  .catch(error => console.log(error))

function createReviews(reviews) {      
  const markup = reviews
    .map(review => {
      return `
      <li class="swiper-slide review-item">
        <img class="review-img" src="${review.avatar_url}" alt="reviewer's avatar" width="48" height="48" />
        <h3 class="subtitle review-author">${review.author}</h3>
        <p class="text review-text">${review.review}</p>
      </li>
      `;
    })    
    .join("");
  
  reviewsList.insertAdjacentHTML("beforeend", markup);
  
   initSwiper();
}

function initSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Keyboard],
    slidesPerView: 4, 
    spaceBetween: 16, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
}







/* import axios from "axios";  
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from "swiper/modules";

const reviewsList = document.querySelector(".reviews-list");

axios.get('https://portfolio-js.b.goit.study/api/reviews?')
  .then(response => { createReviews(response.data); })
	.catch(error => console.log(error))

function createReviews(reviews) {
      const markup = reviews
        .map(review => {
            return `
      <li class="swiper-slide review-item">
            <img src="${review.avatar_url}" alt="reviewer's avatar" width="48" height="48" />
            <h3 class="subtitle reviews-author">${review.author}</h3>
            <p class="text reviews-text">${review.review}</p>
          </li>
            `;
        })    
        .join("");
    reviewsList.insertAdjacentHTML("beforeend", markup);
}

const swiper = new Swiper('.swiper', {
    modules: [Navigation],
  slidesPerView: 4, // Скільки карток видно одночасно
  spaceBetween: 20, // Відстань між слайдами
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
      enabled: true,
      onlyInViewport: true,
  },
}); */