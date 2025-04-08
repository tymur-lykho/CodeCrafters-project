document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            document.querySelector('.overlay-image').classList.add('visible');
        }
    }, { threshold: 0.2 });
    observer.observe(document.querySelector('.hero'));


    const title = document.querySelector(".hero-title");
    const lines = [
        "HELLO.",
        "I’M FULLSTACK DEVELOPER",
        "LLOYD JEFFERSON."
    ];

    let delay = 0;
    const baseDelay = 0.08;

    lines.forEach(line => {
        const lineWrapper = document.createElement("div");
        lineWrapper.classList.add("fade-line");

        const words = line.split(" ");
        words.forEach((word, wordIdx) => {
            const wordSpan = document.createElement("span");
            wordSpan.classList.add("fade-word");

            [...word].forEach(char => {
                const span = document.createElement("span");
                span.textContent = char;
                span.classList.add("fade-char");
                span.style.animationDelay = `${delay}s`;
                wordSpan.appendChild(span);
                delay += baseDelay;
            });

            lineWrapper.appendChild(wordSpan);

            if (wordIdx < words.length - 1) {
                const space = document.createTextNode(" ");
                lineWrapper.appendChild(space);
            }
        });

        title.appendChild(lineWrapper);
    });
});