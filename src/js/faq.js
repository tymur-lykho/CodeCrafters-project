document.addEventListener('DOMContentLoaded', function () {
  const accordionButtons = document.querySelectorAll('.acc-btn');

  accordionButtons.forEach(button => {
    button.addEventListener('click', function () {
      const accordionItem = this.closest('.accordion-item');
      const content = accordionItem.querySelector('.accordion-content');

      // Перемикаємо клас для відкриття/закриття
      accordionItem.classList.toggle('active');

      if (accordionItem.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });
});
