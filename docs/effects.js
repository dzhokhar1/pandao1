/* PanDao site effects — count-up + micro-parallax. Plain JS, no deps.
   Robust: respects prefers-reduced-motion and falls back to final values. */
(function () {
  var reduce = false;
  try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  function fmtRu(n) { return Math.round(n).toLocaleString('ru-RU').replace(/\u00A0/g, ' '); }

  function runCount(el) {
    if (el.dataset.cuDone) return;
    el.dataset.cuDone = '1';
    var target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;
    var dur = parseInt(el.getAttribute('data-dur') || '1500', 10);
    var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
    var start = null;
    function fmt(v) { return dec ? v.toFixed(dec).replace('.', ',') : fmtRu(v); }
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * e);
      if (p < 1) requestAnimationFrame(step); else el.textContent = fmt(target);
    }
    requestAnimationFrame(step);
  }

  function initCount() {
    var els = [].slice.call(document.querySelectorAll('[data-count]'));
    if (!els.length) return;
    if (reduce || !('IntersectionObserver' in window)) { return; } /* fallback: keep final text */
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) { runCount(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.45 });
    els.forEach(function (el) { if (!el.dataset.cuDone) io.observe(el); });
  }

  var parallaxInited = false;
  function initParallax() {
    if (reduce || parallaxInited) return;
    var els = [].slice.call(document.querySelectorAll('[data-parallax]'));
    if (!els.length) return;
    parallaxInited = true;
    var ticking = false;
    function update() {
      var vh = window.innerHeight || 800;
      els.forEach(function (el) {
        var r = el.getBoundingClientRect();
        var center = r.top + r.height / 2;
        var rel = (center - vh / 2) / vh;            /* ~ -0.6 .. 0.6 */
        var sp = parseFloat(el.getAttribute('data-parallax')) || 0.12;
        var y = Math.max(-18, Math.min(18, -rel * sp * 120));
        el.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,0) scale(1.1)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  function init() { initCount(); initParallax(); }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('load', init);
  /* React mounts async — retry a couple times to catch late nodes */
  setTimeout(init, 700);
  setTimeout(init, 1500);
  window.pdEffectsInit = init;
})();
