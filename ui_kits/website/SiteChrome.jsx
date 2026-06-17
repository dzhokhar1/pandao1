// Site chrome: route-style scroll progress bar (top) + mobile sticky CTA
// with native WhatsApp / Telegram marks.
function ScrollProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    let ticking = false;
    const upd = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { requestAnimationFrame(upd); ticking = true; } };
    window.addEventListener('scroll', onScroll, { passive: true });
    upd();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="pd-progress" aria-hidden="true">
      <div className="pd-progress-track"></div>
      <div className="pd-progress-fill" style={{ width: (p * 100).toFixed(2) + '%' }}>
        <span className="pd-progress-plane"><i data-lucide="plane"></i></span>
      </div>
    </div>
  );
}

function WAIcon() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="currentColor" d="M16.04 4C9.96 4 5.02 8.94 5.02 15.02c0 2.12.6 4.1 1.64 5.8L5 28l7.36-1.62a11 11 0 0 0 3.68.64h.01c6.08 0 11.02-4.94 11.02-11.02C27.07 8.94 22.12 4 16.04 4Zm0 20.18h-.01c-1.1 0-2.18-.3-3.12-.86l-.22-.13-3.7.97.99-3.61-.15-.23a8.97 8.97 0 0 1-1.38-4.78c0-4.96 4.04-9 9-9 2.4 0 4.66.94 6.36 2.64a8.94 8.94 0 0 1 2.64 6.36c0 4.96-4.04 9-8.99 9Zm4.94-6.73c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.8-.72-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.46-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.84.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z"/>
    </svg>
  );
}
function TGIcon() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="currentColor" d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4Zm5.57 8.2-1.86 8.78c-.14.62-.51.77-1.03.48l-2.85-2.1-1.37 1.32c-.15.15-.28.28-.57.28l.2-2.9 5.27-4.76c.23-.2-.05-.32-.35-.12l-6.51 4.1-2.81-.88c-.61-.19-.62-.61.13-.9l10.98-4.23c.51-.19.96.12.79.86Z"/>
    </svg>
  );
}

function StickyCTA() {
  React.useEffect(() => {
    const tick = () => window.lucide && lucide.createIcons();
    tick(); const id = setTimeout(tick, 600); return () => clearTimeout(id);
  }, []);
  return (
    <div className="pd-sticky-cta">
      <a className="pd-sticky-msg pd-sticky-wa" href="https://wa.me/79280000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WAIcon /></a>
      <a className="pd-sticky-msg pd-sticky-tg" href="https://t.me/pandao" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><TGIcon /></a>
      <button className="pd-sticky-calc" onClick={() => window.dispatchEvent(new CustomEvent('pd-open-form'))}>
        <i data-lucide="calculator"></i> Рассчитать
      </button>
    </div>
  );
}
Object.assign(window, { ScrollProgress, StickyCTA });
