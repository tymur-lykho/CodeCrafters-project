document.addEventListener('DOMContentLoaded', function () {
  const coversSection = document.querySelector('.covers');
  const coverLists = document.querySelectorAll('.covers-list');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function startAnimation() {
    if (isInViewport(coversSection)) {
      coverLists.forEach((list, index) => {
        list.style.animation = `marqueeLine 5s linear infinite ${
          index % 2 === 0 ? 'reverse' : 'normal'
        }`;
      });
    } else {
      coverLists.forEach(list => {
        list.style.animation = 'none';
      });
    }
  }

  window.addEventListener('scroll', startAnimation);
  startAnimation();
});
