const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
    }
  });
}, {
  threshold: 0.1
});

const scrollLeftElements = document.querySelectorAll('.scroll-left');
scrollLeftElements.forEach((el) => observer.observe(el));