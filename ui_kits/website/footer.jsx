// Footer — compact, on-brand. NOTE: not present in source screenshots; added as a
// reasonable, understated extension so the page has a proper close.
function Footer() {
  React.useEffect(() => { window.lucide && lucide.createIcons(); }, []);
  return (
    <footer className="pd-footer">
      <div className="pd-wrap">
        <div className="pd-footer-grid">
          <div style={{ maxWidth: 280 }}>
            <img className="logo" src="../../assets/pandao-logo-dark.svg" alt="PanDao Logistics" width="388" height="131" />
            <p style={{ color: 'var(--pd-on-dark-mut)', fontSize: 15, lineHeight: 1.5, marginTop: 18 }}>
              Доставка грузов из любого города Китая в Россию и СНГ.
            </p>
          </div>
          <div className="cols">
            <div>
              <h4>Компания</h4>
              <a href="#uslugi">Услуги</a><a href="#marshruty">Маршруты</a>
              <a href="#o-kompanii">О компании</a><a href="#contacts">Контакты</a>
            </div>
            <div>
              <h4>Маршруты</h4>
              <a href="#">Грозный</a><a href="#">Пятигорск</a>
              <a href="#">Махачкала</a><a href="#">Минеральные Воды</a>
              <a href="#">Москва</a>
            </div>
            <div>
              <h4>Документы</h4>
              <a href="legal/privacy.html">Политика конфиденциальности</a>
              <a href="legal/consent.html">Согласие на обработку ПДн</a>
              <a href="legal/cookies.html">Политика cookie</a>
              <a href="legal/terms.html">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 PanDao Logistics Company</span>
          <span><a href="https://ataev.pro" target="_blank" rel="noopener noreferrer">Разработано: ataev.pro</a></span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
