import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const container = document.querySelector('#faq-accordion');

const accordion = new Accordion(container, {
  duration: 400,
  showMultiple: true,
});
