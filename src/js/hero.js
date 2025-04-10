const lines = ['HELLO.', 'I’M FULLSTACK DEVELOPER', 'LLOYD JEFFERSON.'];

document.addEventListener('DOMContentLoaded', () => {
  initHeroObserver();
  generateHeroTitleAnimation();
});

function initHeroObserver() {
  const heroSection = document.querySelector('.hero');
  if (!heroSection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        heroSection.classList.add('visible');
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(heroSection);
}

function generateHeroTitleAnimation() {
  const title = document.querySelector('.hero-title');
  if (!title) return;
  title.innerHTML = '';
  title.style = 'opacity: 1';

  let delay = 0;
  const baseDelay = 0.08;

  lines.forEach(line => {
    const lineWrapper = createLineElement(line, delay, baseDelay);
    title.appendChild(lineWrapper);
    delay += line.length * baseDelay;
  });
}

function createLineElement(line, startDelay, baseDelay) {
  const lineWrapper = document.createElement('div');
  lineWrapper.classList.add('fade-line');

  let delay = startDelay;
  const words = line.split(' ');

  words.forEach((word, index) => {
    const wordSpan = document.createElement('span');
    wordSpan.classList.add('fade-word');

    [...word].forEach(char => {
      const charSpan = document.createElement('span');
      charSpan.textContent = char;
      charSpan.classList.add('fade-char');
      charSpan.style.animationDelay = `${delay}s`;
      wordSpan.appendChild(charSpan);
      delay += baseDelay;
    });

    lineWrapper.appendChild(wordSpan);

    if (index < words.length - 1) {
      lineWrapper.appendChild(document.createTextNode(' '));
    }
  });

  return lineWrapper;
}

document.querySelectorAll('.animate-icons li').forEach((li, i) => {
  li.style.animationDelay = `${0.3 + i * 0.2}s`;
});
