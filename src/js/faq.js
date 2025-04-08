document.querySelectorAll('.accordion-item-faq').forEach(item => {
  const btn = item.querySelector('.acc-btn');
  const content = item.querySelector('.accordion-content');
  const icon = item.querySelector('.acc-icon');

  // Ховаємо контент одразу
  content.style.maxHeight = '0';
  content.style.overflow = 'hidden';
  content.style.transition = 'max-height 0.3s ease';

  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    if (isOpen) {
      item.classList.remove('open');
      content.style.maxHeight = '0';
      icon.style.transform = 'rotate(0deg)';
    } else {
      item.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.style.transform = 'rotate(180deg)';
    }
  });
});

// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// new Accordion('.js-accordion', {
//   showMultiple: true, // тепер можна відкривати всі одночасно
//   duration: 300,
// });
// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// new Accordion('.js-accordion', {
//   elementClass: 'accordion-item-faq',
//   triggerClass: 'acc-btn',
//   panelClass: 'faq-content',
//   duration: 400,
//   showMultiple: true,
//   onOpen: function (currentElement) {
//     console.log(currentElement);
//   },
// });
