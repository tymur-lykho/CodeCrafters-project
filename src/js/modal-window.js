const thankWindow = document.querySelector('.backdrop');

export function showThankWindow(data) {
  thankWindow.classList.add('is-open');
  document.body.classList.add('scroll-lock');

  const title = thankWindow.querySelector('.modal-title');
  const message = thankWindow.querySelector('.modal-text');
  const closeBtn = thankWindow.querySelector('.close-btn');

  title.textContent = data.title;
  message.textContent = data.message;

  closeBtn.addEventListener('click', onCloseBtnClick);
  document.addEventListener('keydown', onEscPress);
  thankWindow.addEventListener('click', onBackdropClick);

  function onCloseBtnClick() {
    closeModal();
  }

  function onEscPress(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function closeModal() {
    thankWindow.classList.remove('is-open');
    document.body.classList.remove('scroll-lock');
    document.removeEventListener('keydown', onEscPress);
    thankWindow.removeEventListener('click', onBackdropClick);
    closeBtn.removeEventListener('click', onCloseBtnClick);
  }
}
