import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.querySelectorAll('.accordion-item').forEach((item) => {
  const button = item.querySelector('.accordion-header');
  const icon = item.querySelector('.accordion-icon');
  const body = item.querySelector('.accordion-body');

  // Функція для відкриття/закриття акордеону
  button.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    if (isActive) {
      // Закриваємо
      item.classList.remove('active');
      body.style.display = 'none'; // Сховуємо контент
    } else {
      // Відкриваємо
      item.classList.add('active');
      body.style.display = 'block'; // Відображаємо контент
    }
  });
});



// document.querySelectorAll('.accordion-item').forEach(item) => {
//   const button = item.querySelector('.accordion-header');
//   const icon = item.querySelector('.accordion-icon');
//   const body = item.querySelector('.accordion-body');




//   const setArrow = (iconEl, isOpen) => {
//     iconEl.src = isOpen
//       ? '../img/about-me/arrow-up.svg'
//       : '../img/about-me/arrow-down.svg';
//   };

//   setArrow(icon, item.classList.contains('active')); 

//   button.addEventListener('click', e => {
//     e.stopPropagation();
//     const isActive = item.classList.contains('active');

//     document.querySelectorAll('.accordion-item').forEach(el => {
//       el.classList.remove('active');
//       const elIcon = el.querySelector('.accordion-icon');
//       if (elIcon) setArrow(elIcon, false);
//     });

//     if (!isActive) {
//       item.classList.add('active');
//       setArrow(icon, true);
//     }
//   });

//   body.addEventListener('click', () => {
//     if (item.classList.contains('active')) {
//       item.classList.remove('active');

//       document.querySelectorAll('.accordion-item').forEach(el => {
//         const elIcon = el.querySelector('.accordion-icon');
//         if (elIcon) setArrow(elIcon, el.classList.contains('active'));
//       });
//     }
//   });

// }













const swiper = new Swiper('.skills-swiper', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      simulateTouch: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: 6,
          spaceBetween: 32,
        },
      },
      on: {
        init: updateActiveSkill,
        slideChange: updateActiveSkill,
      },
    });

    function updateActiveSkill() {
      document.querySelectorAll('.skill-item').forEach(item =>
        item.classList.remove('active')
      );
      const activeSlide = swiper.slides[swiper.activeIndex];
      if (activeSlide) {
        const activeItem = activeSlide.querySelector('.skill-item');
        if (activeItem) activeItem.classList.add('active');
      }
    }





// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/mousewheel'; 
// import {Keyboard } from "swiper/modules";

// const swiper = new Swiper('.swiper', {
//   loop: false,
//   navigation: {
//     nextEl: '.swiper-button-next',
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 24,
//     },
//     1440: {
//       slidesPerView: 6,
//       spaceBetween: 32,
//     },
//   },
// });

