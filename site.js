// Barra de topo: desaparece ao descer a página e volta a aparecer ao subir.
(function () {
  const bar = document.querySelector('.topbar');
  if (!bar) return;

  let lastY = window.scrollY;
  let ticking = false;
  const MIN_DELTA = 6; // ignora pequenos movimentos do scroll

  function update() {
    const y = window.scrollY;
    const delta = y - lastY;
    const menuOpen = bar.querySelector('.lang-btn[aria-expanded="true"]');

    if (y <= bar.offsetHeight) {
      bar.classList.remove('is-hidden');      // no topo da página, mostra sempre
    } else if (delta > MIN_DELTA && !menuOpen) {
      bar.classList.add('is-hidden');         // a descer
    } else if (delta < -MIN_DELTA) {
      bar.classList.remove('is-hidden');      // a subir
    }

    if (Math.abs(delta) > MIN_DELTA) lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  // Se alguém navegar com o teclado até à barra, mostra-a.
  bar.addEventListener('focusin', () => bar.classList.remove('is-hidden'));
})();
