// Back to Top
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (btn) btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
