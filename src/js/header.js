const menuBtn = document.querySelector('.menu-link');
const menuList = document.querySelector('.menu-list');

const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.mobail-backdrop');
const closeBtn = document.querySelector('.mobile-menu .close-btn');

const mobileMenuLinks = document.querySelectorAll('.mobail-list-item-link');
const mobileMenuOrderBtn = document.querySelector('.mobail-order-btn');

const openBurgerAnimation = new Animation(
  new KeyframeEffect(
    burgerMenu,
    [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }],
    { duration: 500 }
  ),
  document.timeline
);

const closeBurgerAnimation = new Animation(
  new KeyframeEffect(
    burgerMenu,
    [{ transform: 'translateX(0)' }, { transform: 'translateX(100%)' }],
    { duration: 500 }
  ),
  document.timeline
);

menuBtn.addEventListener('click', e => {
  e.stopPropagation();
  menuList.classList.toggle('is-open');
});

menuList.addEventListener('click', e => {
  if (e.target.classList.contains('list-item-link')) {
    menuList.classList.remove('is-open');
  }
});

document.addEventListener('click', e => {
  if (!menuList.contains(e.target) && !menuBtn.contains(e.target)) {
    menuList.classList.remove('is-open');
  }
});

function handleBurgerClick() {
  burgerMenu.classList.add('is-open');
  document.body.classList.add('scroll-lock');
  openBurgerAnimation.play();
  setTimeout(() => {
    closeBtn.addEventListener('click', handleCloseClick, { once: true });
    mobileMenuLinks.forEach(link =>
      link.addEventListener('click', handleCloseClick, { once: true })
    );
    mobileMenuOrderBtn.addEventListener('click', handleCloseClick, {
      once: true,
    });
  }, 500);
}

function handleCloseClick() {
  closeBurgerAnimation.play();
  setTimeout(() => {
    burgerMenu.classList.remove('is-open');
    document.body.classList.remove('scroll-lock');
  }, 500);
}

burgerBtn.addEventListener('click', handleBurgerClick);
