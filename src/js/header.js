const menuBtn = document.querySelector('.menu-link');
const menuList = document.querySelector('.menu-list');

const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.mobail-backdrop');
const closeBtn = document.querySelector('.mobile-menu .close-btn');

const mobileMenuLinks = document.querySelectorAll('.mobail-list-item-link');
const mobileMenuOrderBtn = document.querySelector('.mobail-order-btn');

const openKeyframes = new KeyframeEffect(
  burgerMenu,
  [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }],
  { duration: 500 }
);

const closeKeyframe = new KeyframeEffect(
  burgerMenu,
  [{ transform: 'translateX(0)' }, { transform: 'translateX(100%)' }],
  { duration: 500 }
);

const openBurgerAnimation = new Animation(openKeyframes, document.timeline);
const closeBurgerAnimation = new Animation(closeKeyframe, document.timeline);

burgerBtn.addEventListener('click', handleBurgerClick);

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('is-open');
});

function handleBurgerClick() {
  burgerMenu.classList.add('is-open');
  document.body.classList.add('scroll-lock');
  openBurgerAnimation.play();
  closeBtn.addEventListener('click', handleCloseClick);
  mobileMenuLinks.forEach(item =>
    item.addEventListener('click', handleCloseClick)
  );
  mobileMenuOrderBtn.addEventListener('click', handleCloseClick);
}

function handleCloseClick() {
  closeBurgerAnimation.play();
  setTimeout(() => {
    burgerMenu.classList.remove('is-open');
    document.body.classList.remove('scroll-lock');
    closeBtn.removeEventListener('çlick', handleCloseClick);
    mobileMenuLinks.forEach(item =>
      item.removeEventListener('click', handleCloseClick)
    );
    mobileMenuOrderBtn.removeEventListener('click', handleCloseClick);
  }, 500);
}
