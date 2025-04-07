import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { showThankWindow } from './modal-window';

const form = document.getElementById('js-footer-form');

form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements['input-email'].value.trim();
  const comment = form.elements['input-comment'].value.trim();

  const response = await sendMail(email, comment).catch(e => {
    iziToast.error({
      title: 'Sending error',
      position: 'bottomCenter',
      message: 'Sorry, something went wrong, try again later.',
    });
  });
  if (!response) return;
  showThankWindow(response.data);
  form.reset();
}

async function sendMail(email, comment) {
  const url = 'https://portfolio-js.b.goit.study/api/requests';
  const body = { email, comment };
  try {
    const res = await axios.post(url, body);
    return res;
  } catch (error) {
    throw new Error(error);
  }
}
