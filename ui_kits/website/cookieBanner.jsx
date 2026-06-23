// Cookie consent banner — shown on first visit (per 152-ФЗ / Roskomnadzor guidance).
// Stores acceptance in localStorage; links to the cookie policy page.
function CookieBanner() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    let agreed = false;
    try { agreed = localStorage.getItem('pd-cookie-consent') === '1'; } catch (e) {}
    if (!agreed) { const t = setTimeout(() => setShow(true), 700); return () => clearTimeout(t); }
  }, []);
  React.useEffect(() => { if (show) window.lucide && lucide.createIcons(); }, [show]);

  const accept = () => {
    try { localStorage.setItem('pd-cookie-consent', '1'); } catch (e) {}
    setShow(false);
  };

  return (
    <div className={"pd-cookie" + (show ? " in" : "")} role="dialog" aria-label="Файлы cookie">
      <span className="pd-cookie-ic"><Icon name="cookie" /></span>
      <div className="pd-cookie-text">
        <span>Продолжая пользоваться сайтом, вы соглашаетесь с обработкой cookie и данных в соответствии с <a href="legal/cookies.html" target="_blank" rel="noopener">Политикой использования cookie</a> и <a href="legal/privacy.html" target="_blank" rel="noopener">Политикой конфиденциальности</a>.</span>
      </div>
      <div className="pd-cookie-actions">
        <a className="pd-cookie-more" href="legal/cookies.html" target="_blank" rel="noopener">Подробнее</a>
        <button className="pd-btn pd-btn--primary pd-btn--sm" onClick={accept}>Принять</button>
      </div>
    </div>
  );
}
Object.assign(window, { CookieBanner });
