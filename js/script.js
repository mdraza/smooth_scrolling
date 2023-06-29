// Use of Intersection Observer

const section = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    // threshold: 0.2,
    rootMargin: "-100px",
  }
);

section.forEach((sec) => {
  observer.observe(sec);
});
