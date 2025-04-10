import Accordion from 'accordion-js';
const container = document.querySelector('#faq-accordion');

const accordion = new Accordion(container, {
  duration: 400,
  showMultiple: true,
});
