// Services section: "Наши услуги" + 6 alternating service cards + route chip.
function Services() {
  React.useEffect(() => { window.lucide && lucide.createIcons(); }, []);
  const serv = [
    { em: '🚢', anim: 'a-float', t: 'Логистика', d: 'Контейнерные перевозки, сборные грузы и полное оформление документации — берём весь маршрут под контроль', dark: false },
    { em: '🛒', anim: 'a-wiggle', t: 'Байерские услуги', d: 'Найдём, проверим и выкупим любой товар: от одежды и аксессуаров до стройматериалов и автомобилей', dark: true },
    { em: '⚙️', anim: 'a-pulse', t: 'Бизнес-сопровождение «под ключ»', d: 'Наладим производство полного цикла: работа напрямую с заводами, СТМ, упаковка и сертификация товара', dark: false },
    { em: '✈️', anim: 'a-swing', t: 'Бизнес-туры', d: 'Индивидуальные туры по заводам и рынкам Китая для личного знакомства. Встретим, переведём и всё покажем', dark: true },
    { em: '💱', anim: 'a-pulse', t: 'Обмен валюты', d: 'Работаем с юанями, долларами и криптовалютой — удобный обмен и расчёты под задачи вашего бизнеса', dark: false },
    { em: '🤝', anim: 'a-pulse', t: 'Сопровождение в Китае', d: 'Встретим, переведём, поможем на переговорах и на производстве. Ваш человек на месте, когда нужно', dark: true },
  ];
  return (
    <section className="pd-section pd-services" id="uslugi">
      <div className="pd-svc-bg">
        <img className="pd-svc-port" src="../../assets/hero-port.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" data-parallax="0.08" />
        <svg className="pd-svc-route" viewBox="0 0 1000 360" preserveAspectRatio="none" aria-hidden="true">
          <path d="M250,150 C400,60 560,250 760,150" fill="none" stroke="#DE2931" strokeWidth="2" strokeDasharray="2 9" strokeLinecap="round"/>
        </svg>
        <div className="pd-svc-ping"></div>
      </div>
      <div className="pd-wrap">
        <SpecChip />
        <div className="pd-head">
          <span className="pd-kicker">Услуги PanDao</span>
          <h2>Наши услуги</h2>
        </div>
        <div className="pd-grid3">
          {serv.map((s, i) => (
            <div key={i} className={"pd-card pd-serv " + (s.dark ? "pd-card--dark" : "pd-card--light")}>
              <span className="chip"><span className={"pd-emoji " + s.anim}>{s.em}</span></span>
              <div className="pd-serv-body">
                <h3>{s.t}</h3>
                <span className="pd-serv-line"></span>
                <p>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Services });
