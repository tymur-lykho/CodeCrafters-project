import accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";


  const items = document.querySelectorAll(".accordion-item");
  items.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
      items.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
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

