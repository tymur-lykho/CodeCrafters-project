import accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.querySelectorAll('.accordion-item').forEach(item => {
  const button = item.querySelector('.accordion-header');
  const icon = item.querySelector('.accordion-icon');
  const body = item.querySelector('.accordion-body');

  // const setArrow = (iconEl, isOpen) => {
  //   iconEl.src = isOpen
  //     ? '../img/about-me/arrow-up.svg'
  //     : '../img/about-me/arrow-down.svg';
  // };

  // setArrow(icon, item.classList.contains('active')); comment by Tymur

  // button.addEventListener('click', e => {
  //   e.stopPropagation();
  //   const isActive = item.classList.contains('active');

  //   document.querySelectorAll('.accordion-item').forEach(el => {
  //     el.classList.remove('active');
  //     const elIcon = el.querySelector('.accordion-icon');
  //     if (elIcon) setArrow(elIcon, false);
  //   });

  //   if (!isActive) {
  //     item.classList.add('active');
  //     setArrow(icon, true);
  //   }
  // });

  // body.addEventListener('click', () => {
  //   if (item.classList.contains('active')) {
  //     item.classList.remove('active');

  //     document.querySelectorAll('.accordion-item').forEach(el => {
  //       const elIcon = el.querySelector('.accordion-icon');
  //       if (elIcon) setArrow(elIcon, el.classList.contains('active'));
  //     });
  //   }
  // });
});

//   // Swiper
//   const swiper = new Swiper(".swiper", {
//     loop: true,
//     slidesPerView: 3,
//     spaceBetween: 20,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     keyboard: {
//       enabled: true,
//       onlyInViewport: true,
//     },
//     a11y: true,
//     grabCursor: true,
//   });
