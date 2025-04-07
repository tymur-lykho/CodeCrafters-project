document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                document.querySelector('.overlay-image').classList.add('visible');
            }
        },
        {
            threshold: 0.2,
        }
    );

    const target = document.querySelector('.hero');
    if (target) {
        observer.observe(target);
    }
});

// document.addEventListener("DOMContentLoaded", () => {
    
//     const title = document.querySelector(".hero-title");
//     const text = title.innerText;
//     title.innerHTML = "";

//     [...text].forEach((char, i) => {
//         const span = document.createElement("span");
//         span.textContent = char;
//         span.style.animationDelay = `${i * 0.05}s`;
//         title.appendChild(span);
//     });
// });



