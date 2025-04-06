import axios from 'axios';
import iziToast from 'izitoast';

const form = document.getElementById('js-footer-form');
const thankWindow = document.querySelector('thank-window');

form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements['input-email'].value.trim();
  const comment = form.elements['input-comment'].value.trim();

  console.log(email, comment);

  const response = await sendMail(email, comment).catch(e => {
    iziToast.error({
      title: 'Sending error',
      position: 'topRight',
      message: 'Sorry!',
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

function showThankWindow(data) {
  thankWindow.classList.add('is-open');
}
