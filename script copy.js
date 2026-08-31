document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    // Keeps keyboard focus aligned with in-page navigation after smooth scrolling.
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.setAttribute('tabindex', '-1');
  });
});
