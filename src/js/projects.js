import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/mousewheel'; // Додаємо стилі для mousewheel

//Ініціалізація Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, // Один слайд на екрані
  spaceBetween: 20, // Відстань між слайдами
  keyboard: {
    enabled: true, // Взаємодія за допомогою клавіатури
    onlyInViewport: true,
  },
  mousewheel: {
    forceToAxis: true, // Запобігає горизонтальному скролу в браузері
    sensitivity: 1, // Чутливість прокрутки (змінюйте для тестування)
    releaseOnEdges: true, // Дозволяє зупиняти прокрутку на кінці списку
  },
  grabCursor: true,
  loop: false, // Без циклічності, щоб кнопки блокувалися
});

// Кастомні кнопки навігації
const prevButton = document.querySelector('.arrow-btn-left');
const nextButton = document.querySelector('.arrow-btn-right');

// Додаємо обробники подій
prevButton.addEventListener('click', () => {
  swiper.slidePrev(); //перехід на попередній слайд
  updateButtonState(); //оновлюємо стан кнопок
});

nextButton.addEventListener('click', () => {
  swiper.slideNext(); //перехід нанаступний слайд
  updateButtonState(); //оновлюємо стан кнопок
});

// Функція, що змінює стан кнопок
function updateButtonState() {
  prevButton.disabled = swiper.isBeginning; //блокуємо кнопку назад, якщо це перший слайд
  nextButton.disabled = swiper.isEnd; //блокуємо кнопку вперед, якщо це останній слайд

  prevButton.classList.toggle('disabled', swiper.isBeginning);
  nextButton.classList.toggle('disabled', swiper.isEnd);
}
// Оновлюємо стан кнопок при зміні слайду (включаючи прокрутку мишкою)
swiper.on('slideChange', updateButtonState);

//оновлюємо стан кнопок при завантажені сторінки
updateButtonState();

// document.querySelector('.swiper-container').addEventListener('wheel', e => {
//   console.log('Mouse wheel event detected:', e);
// });
