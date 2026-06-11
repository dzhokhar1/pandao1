// Site header: logo, desktop nav, CTA, mobile hamburger + slide-in menu.
function Header() {
  const [open, setOpen] = React.useState(false);
  const links = ['Услуги', 'Маршруты', 'О компании', 'Контакты'];
  React.useEffect(() => { window.lucide && lucide.createIcons(); }, [open]);
  return (
    <React.Fragment>
      <header className="pd-header">
        <div className="pd-header-in">
          <img className="pd-logo" src="../../assets/pandao-logo.png" alt="PanDao Logistics" />
          <nav className="pd-nav">
            {links.map(l => <a key={l} href="#">{l}</a>)}
          </nav>
          <button className="pd-btn pd-btn--primary pd-btn--sm">Рассчитать доставку</button>
          <button className="pd-burger" onClick={() => setOpen(true)} aria-label="Меню">
            <Icon name="menu" />
          </button>
        </div>
      </header>

      <div className={"pd-mobnav" + (open ? " open" : "")}>
        <div className="pd-mobnav-top">
          <img className="pd-logo" src="../../assets/pandao-logo.png" alt="PanDao" />
          <button className="pd-burger" onClick={() => setOpen(false)} aria-label="Закрыть">
            <Icon name="x" />
          </button>
        </div>
        {links.map(l => <a key={l} href="#" onClick={() => setOpen(false)}>{l}</a>)}
        <button className="pd-btn pd-btn--primary" onClick={() => setOpen(false)}>
          Рассчитать доставку <Icon name="arrow-right" />
        </button>
      </div>
    </React.Fragment>
  );
}
Object.assign(window, { Header });
