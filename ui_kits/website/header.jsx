// Site header: logo, desktop nav, CTA, mobile hamburger + slide-in menu.
function Header() {
  const [open, setOpen] = React.useState(false);
  const links = [
    { l: 'Услуги', h: '#uslugi' },
    { l: 'Маршруты', h: '#marshruty' },
    { l: 'О компании', h: '#o-kompanii' },
    { l: 'Контакты', h: '#contacts' },
  ];
  React.useEffect(() => { window.lucide && lucide.createIcons(); }, [open]);
  return (
    <React.Fragment>
      <header className="pd-header">
        <div className="pd-header-in">
          <img className="pd-logo" src="../../assets/pandao-logo.svg" alt="PanDao Logistics" width="388" height="131" />
          <nav className="pd-nav">
            {links.map(l => <a key={l.l} href={l.h}>{l.l}</a>)}
          </nav>
          <button className="pd-btn pd-btn--primary pd-btn--sm" onClick={() => window.dispatchEvent(new CustomEvent('pd-open-form'))}>Рассчитать доставку</button>
          <button className="pd-burger" onClick={() => setOpen(true)} aria-label="Меню">
            <Icon name="menu" />
          </button>
        </div>
      </header>

      <div className={"pd-mobnav" + (open ? " open" : "")}>
        <div className="pd-mobnav-top">
          <img className="pd-logo" src="../../assets/pandao-logo.svg" alt="PanDao" />
          <button className="pd-burger" onClick={() => setOpen(false)} aria-label="Закрыть">
            <Icon name="x" />
          </button>
        </div>
        {links.map(l => <a key={l.l} href={l.h} onClick={() => setOpen(false)}>{l.l}</a>)}
        <button className="pd-btn pd-btn--primary" onClick={() => { setOpen(false); window.dispatchEvent(new CustomEvent('pd-open-form')); }}>
          Рассчитать доставку <Icon name="arrow-right" />
        </button>
      </div>
    </React.Fragment>
  );
}
Object.assign(window, { Header });
