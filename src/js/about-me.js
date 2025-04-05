import accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";


  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.closest('.accordion-item');
      const icon = header.querySelector('.accordion-icon');

      // Закрити, якщо активний
      if (accordionItem.classList.contains('active')) {
        accordionItem.classList.remove('active');
        icon.src = '../img/about-me/arrow-down.svg';
      } else {
        // Закрити всі інші (якщо потрібно)
        document.querySelectorAll('.accordion-item').forEach(item => {
          item.classList.remove('active');
          const itemIcon = item.querySelector('.accordion-icon');
          if (itemIcon) itemIcon.src = '../img/about-me/arrow-down.svg';
        });

        // Відкрити поточний
        accordionItem.classList.add('active');
        icon.src = '../img/about-me/arrow-up.svg';
      }
    });
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

