// Hero: eyebrow route, headline, lead, CTAs, port photo with floating cards, stat row.
function Hero() {
  React.useEffect(() => { window.lucide && lucide.createIcons(); }, []);
  const track = [
    { name: 'warehouse', lab: 'Склад в Китае', on: true },
    { name: 'truck', lab: 'Транспортировка', on: false },
    { name: 'scan-line', lab: 'Таможня', on: false },
    { name: 'check', lab: 'Доставка', on: false },
  ];
  const stats = [
    { ic: 'users', big: '1 200+', sub: 'доверили нам свои грузы' },
    { ic: 'container', big: '1 275 000+ кг', sub: 'успешно доставлено' },
    { ic: 'warehouse', big: 'Склад в Китае', sub: 'принимаем, проверяем, маркируем' },
    { ic: 'weight', big: 'От 100 кг', sub: 'работаем с бизнесом и оптом' },
  ];
  return (
    <section className="pd-hero pd-section" style={{ paddingTop: 0, paddingBottom: 64 }}>
      <div className="pd-hero-coord">43.2389° N<br/>45.7560° E</div>
      <div className="pd-hero-cross"></div>

      <div className="pd-hero-photo">
        <img src="../../assets/hero-port.png" alt="Контейнерный порт PanDao" />
        <div className="pd-chip-accept">
          <span className="ic"><Icon name="warehouse" /></span>
          <div>
            <div className="t">Груз принят на складе</div>
            <div className="s">Проверяем, маркируем и готовим к отправке</div>
            <div className="bar"><i></i></div>
          </div>
        </div>
        <div className="pd-dest">
          <span>Грозный</span><span>Пятигорск</span>
          <span>Махачкала</span><span>Минеральные Воды</span>
        </div>
        <div className="pd-route-panel">
          <div className="rt">Маршрут: <span className="ar">Китай</span> → Северный Кавказ</div>
          <div className="ct">Грозный · Пятигорск · Махачкала · Минеральные Воды</div>
          <div className="pd-track">
            {track.map((s, i) => (
              <div key={i} className={"st" + (s.on ? " on" : "")}>
                {i < track.length - 1 && <div className="ln"></div>}
                <div className="dot"><Icon name={s.name} /></div>
                <div className="lab">{s.lab}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pd-wrap">
        <div className="pd-hero-content">
          <div className="pd-hero-route">Китай <span className="ar">→</span> Россия / СНГ / Северный Кавказ</div>
          <h1>Доставка из Китая<br/>на Северный Кавказ</h1>
          <div className="pd-divider"></div>
          <p className="pd-hero-lead">
            PanDao Logistics специализируется на доставке грузов из любого города Китая
            на Северный Кавказ. Ключевые направления: <b>Грозный, Пятигорск, Махачкала,
            Минеральные Воды.</b>
          </p>
          <p className="pd-hero-lead" style={{ marginTop: 16 }}>
            Работаем с рынками России и СНГ, но особенно глубоко специализируемся на этих маршрутах.
          </p>
          <div className="pd-hero-cta">
            <button className="pd-btn pd-btn--primary">Рассчитать доставку <Icon name="arrow-right" /></button>
            <button className="pd-btn pd-btn--ghost">Посмотреть услуги <Icon name="arrow-right" /></button>
          </div>
        </div>

        <div className="pd-herostats">
          {stats.map((s, i) => (
            <div className="cell" key={i}>
              <span className="ic"><Icon name={s.ic} /></span>
              <div>
                <div className="big">{s.big}</div>
                <div className="sub">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
