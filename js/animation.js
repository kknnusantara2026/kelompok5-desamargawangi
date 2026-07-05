/* =========================================================
   KKN DESA MARGAWANGI — ANIMATION.JS
   Menangani animasi berbasis scroll menggunakan
   IntersectionObserver: elemen dengan class "anim-*" (lihat
   css/animation.css) akan mendapat class "is-visible" saat
   masuk viewport, memicu animasi CSS terkait.

   Juga akan menangani: scroll progress bar, parallax pada
   Hero, dan animated counter (statistik).

   Diimplementasikan penuh pada tahap "Animasi", meskipun
   observer dasarnya sudah disiapkan di sini agar setiap
   tahap berikutnya tinggal menambahkan class "anim-*" pada
   markup baru tanpa perlu mengubah file ini lagi.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
});

/**
 * initScrollReveal
 * Mengamati semua elemen dengan class diawali "anim-" dan
 * menambahkan "is-visible" ketika elemen tersebut memasuki
 * viewport, memicu keyframes yang sesuai di animation.css.
 */
function initScrollReveal() {
  const animatedEls = document.querySelectorAll(
    '[class*="anim-fade-in"], [class*="anim-slide-up"], [class*="anim-slide-left"], [class*="anim-slide-right"], [class*="anim-zoom"]'
  );

  if (!animatedEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
  });

  animatedEls.forEach((el) => observer.observe(el));
}
