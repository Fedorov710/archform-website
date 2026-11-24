
document.addEventListener("DOMContentLoaded", () => {
  // Плавная прокрутка к разделам
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Появление карточек при прокрутке
  const elements = document.querySelectorAll(
    ".service-grid article, .project, .about > div"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(element => {
      element.classList.add("reveal");
      observer.observe(element);
    });
  }
});
