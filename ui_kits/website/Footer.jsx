// Footer — compact, on-brand. NOTE: not present in source screenshots; added as a
// reasonable, understated extension so the page has a proper close.
function Footer() {
  React.useEffect(() => { window.lucide && lucide.createIcons(); }, []);
  return (
    <footer className="pd-footer">
      <div className="pd-wrap">
        <div className="pd-footer-grid">
          <div style={{ maxWidth: 280 }}>
            <img className="logo" src="../../assets/pandao-logo.png" alt="PanDao" />
            <p style={{ color: 'var(--pd-on-dark-mut)', fontSize: 15, lineHeight: 1.5, marginTop: 18 }}>
              Доставка грузов из любого города Китая на Северный Кавказ.
            </p>
          </div>
          <div className="cols">
            <div>
              <h4>Компания</h4>
              <a href="#">Услуги</a><a href="#">Маршруты</a>
              <a href="#">О компании</a><a href="#">Контакты</a>
            </div>
            <div>
              <h4>Маршруты</h4>
              <a href="#">Грозный</a><a href="#">Пятигорск</a>
              <a href="#">Махачкала</a><a href="#">Минеральные Воды</a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 PanDao Logistics Company</span>
          <span>Китай → Северный Кавказ</span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
