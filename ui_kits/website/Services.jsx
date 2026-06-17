// Services section: "Наши услуги" + 6 alternating service cards + route chip.
function Services() {
  React.useEffect(() => { window.lucide && lucide.createIcons(); }, []);
  const serv = [
    { em: '🗝️', anim: 'a-swing', t: 'Доставка под ключ', d: 'Один договор на весь путь — от приёмки на складе в Китае до выдачи у вас. Вы не бегаете между подрядчиками.', dark: false },
    { em: '🚢', anim: 'a-float', t: 'Контейнерные перевозки', d: 'Свой контейнер под объём вашей партии. Подберём, что важнее именно вам: дешевле, быстрее или надёжнее.', dark: true },
    { em: '📦', anim: 'a-bounce', t: 'Сборные грузы', d: 'Везёте мало? Догрузим вас к другим клиентам в один контейнер — платите только за свой объём.', dark: false },
    { em: '🏭', anim: 'a-pulse', t: 'Склад в Китае', d: 'Принимаем товар от поставщика, проверяем, фотографируем, маркируем и готовим к отправке. Всё под контролем.', dark: true },
    { em: '🛒', anim: 'a-wiggle', t: 'Выкуп товара', d: 'Найдём поставщика, проверим качество и выкупим товар за вас. Вам не нужно знать китайский и лететь на фабрику.', dark: false },
    { em: '🤝', anim: 'a-pulse', t: 'Сопровождение в Китае', d: 'Встретим, переведём, поможем на переговорах и на производстве. Ваш человек на месте, когда нужно.', dark: true },
  ];
  return (
    <section className="pd-section pd-services" id="uslugi">
      <div className="pd-svc-bg">
        <img className="pd-svc-port" src="../../assets/hero-port.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" data-parallax="0.08" />
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
          <p>Мы не перекладываем груз с рук на руки и не теряемся на полпути. Строим маршрут,
            держим склад, упаковку и документы под контролем — и доводим поставку до результата.</p>
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
