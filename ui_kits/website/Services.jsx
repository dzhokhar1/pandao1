// Services section: "Наши услуги" + 6 alternating service cards + route chip.
function Services() {
  React.useEffect(() => { window.lucide && lucide.createIcons(); }, []);
  const serv = [
    { ic: 'key-round', t: 'Доставка под ключ', d: 'От приёмки груза в Китае до доставки на Северный Кавказ.', dark: false },
    { ic: 'container', t: 'Контейнерные перевозки', d: 'Подбираем маршрут под задачу: дешевле, быстрее или надёжнее.', dark: true },
    { ic: 'boxes', t: 'Сборные грузы', d: 'Объединяем грузы клиентов, чтобы снизить стоимость перевозки.', dark: false },
    { ic: 'warehouse', t: 'Склад в Китае', d: 'Принимаем, проверяем, маркируем и готовим груз к отправке.', dark: true },
    { ic: 'shopping-cart', t: 'Байерские услуги', d: 'Помогаем найти, проверить и выкупить товар в Китае.', dark: false },
    { ic: 'users', t: 'Сопровождение в Китае', d: 'Встречаем, переводим, ведём переговоры и помогаем с фабриками.', dark: true },
  ];
  return (
    <section className="pd-section pd-services">
      <div className="pd-svc-bg">
        <img className="pd-svc-port" src="../../assets/hero-port.png" alt="" aria-hidden="true" />
        <svg className="pd-svc-route" viewBox="0 0 1000 360" preserveAspectRatio="none" aria-hidden="true">
          <path d="M250,150 C400,60 560,250 760,150" fill="none" stroke="#DE2931" strokeWidth="2" strokeDasharray="2 9" strokeLinecap="round"/>
        </svg>
        <div className="pd-svc-cross"></div>
        <div className="pd-svc-ping"></div>
        <div className="pd-coord pd-svc-coord">43.2389° N<br/>45.7560° E</div>
      </div>
      <div className="pd-wrap">
        <SpecChip />
        <div className="pd-head">
          <span className="pd-kicker">Услуги PanDao</span>
          <h2>Наши услуги</h2>
          <p>Мы не просто передаём груз дальше. Мы строим маршрут, контролируем склад,
            упаковку, документы и доводим поставку до результата.</p>
        </div>
        <div className="pd-grid3">
          {serv.map((s, i) => (
            <div key={i} className={"pd-card pd-serv " + (s.dark ? "pd-card--dark" : "pd-card--light")}>
              <span className="chip"><Icon name={s.ic} /></span>
              <div className="pd-serv-body">
                <h3>{s.t}</h3>
                <span className="pd-serv-line"></span>
                <p>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pd-rchip">
          <span className="ic"><Icon name="map-pin" /></span>
          <span>Маршруты: <span className="ar">Китай</span> <span className="ar">→</span>
            <span className="muted"> Грозный / Пятигорск / Махачкала / Минеральные Воды</span></span>
          <span className="pd-rchip-sep"></span>
          <span className="pd-rchip-right">
            <span className="ic"><Icon name="calendar-days" /></span>
            <span className="muted">Регулярные рейсы и гибкие сроки доставки</span>
          </span>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Services });
