/* PanDao — vanilla interactions for the Grav build (replaces the former React handlers).
   Pairs with effects.js (count-up + parallax) and icons.js (Lucide shim). */
(function () {
  function ready(fn){ if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  ready(function () {
    if (window.lucide && lucide.createIcons) lucide.createIcons();

    /* ---- contact modal ---- */
    var modal = document.getElementById('pd-modal');
    function openModal(){ if (!modal) return; modal.style.display = 'flex'; document.body.style.overflow = 'hidden';
      if (window.lucide) lucide.createIcons();
      var f = modal.querySelector('input,textarea'); if (f) try { f.focus(); } catch(e){} }
    function closeModal(){ if (!modal) return; modal.style.display = 'none'; document.body.style.overflow = ''; }

    // any primary CTA (not the form submit, not the cookie accept) opens the modal
    document.querySelectorAll('button.pd-btn--primary, .pd-sticky-calc').forEach(function (b) {
      if (b.closest('#pd-modal')) return;
      if (b.hasAttribute('data-pd-cookie-accept')) return;
      if (b.getAttribute('type') === 'submit') return;
      b.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
    });
    if (modal) {
      modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
      modal.querySelectorAll('[data-pd-close]').forEach(function (x) { x.addEventListener('click', closeModal); });
    }
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
    // auto-open if the server reported a submitted form (so the success/error message is visible)
    if (window.pdFormResult) openModal();

    /* ---- mobile menu ---- */
    var mobnav = document.querySelector('.pd-mobnav');
    document.querySelectorAll('.pd-burger').forEach(function (b) {
      b.addEventListener('click', function () { if (mobnav) mobnav.classList.toggle('open'); });
    });
    if (mobnav) mobnav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobnav.classList.remove('open'); });
    });

    /* ---- FAQ accordion (one open at a time) ---- */
    var faqItems = [].slice.call(document.querySelectorAll('.pd-faq-item'));
    faqItems.forEach(function (item) {
      var q = item.querySelector('.pd-faq-q');
      if (!q) return;
      q.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        faqItems.forEach(function (it) { it.classList.remove('open'); var b = it.querySelector('.pd-faq-q'); if (b) b.setAttribute('aria-expanded', 'false'); });
        if (!isOpen) { item.classList.add('open'); q.setAttribute('aria-expanded', 'true'); }
      });
    });

    /* ---- cookie banner ---- */
    var cookie = document.getElementById('pd-cookie');
    if (cookie) {
      var agreed = false;
      try { agreed = localStorage.getItem('pd-cookie-consent') === '1'; } catch (e) {}
      if (!agreed) setTimeout(function () { cookie.classList.add('in'); }, 700);
      var acc = cookie.querySelector('[data-pd-cookie-accept]');
      if (acc) acc.addEventListener('click', function () {
        try { localStorage.setItem('pd-cookie-consent', '1'); } catch (e) {}
        cookie.classList.remove('in');
      });
    }

    /* ---- warehouse live video ---- */
    var live = document.querySelector('.pd-live-frame');
    if (live) live.addEventListener('click', function () {
      var ifr = document.createElement('iframe');
      ifr.className = 'pd-live-iframe';
      ifr.src = 'https://www.youtube.com/embed/LJgXwC-AKu8?autoplay=1&rel=0&modestbranding=1';
      ifr.title = 'Прямая трансляция со склада PanDao';
      ifr.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      ifr.allowFullscreen = true;
      live.replaceWith(ifr);
    });

    /* ---- scroll progress bar ---- */
    var fill = document.querySelector('.pd-progress-fill');
    if (fill) {
      var ticking = false;
      function upd() {
        var h = document.documentElement;
        var max = h.scrollHeight - h.clientHeight;
        fill.style.width = (max > 0 ? Math.min(1, h.scrollTop / max) * 100 : 0).toFixed(2) + '%';
        ticking = false;
      }
      window.addEventListener('scroll', function () { if (!ticking) { requestAnimationFrame(upd); ticking = true; } }, { passive: true });
      upd();
    }
  });
})();
