// Hero: eyebrow route, headline, lead, CTAs, port photo with floating cards, stat row.
function Hero() {
  React.useEffect(() => { window.lucide && lucide.createIcons(); }, []);
  const fmt = (n) => n.toLocaleString('ru-RU').replace(/\u00A0/g, ' ');
  const track = [
    { name: 'warehouse', lab: 'Склад в Китае', on: true },
    { name: 'truck', lab: 'Транспортировка', on: false },
    { name: 'scan-line', lab: 'Таможня', on: false },
    { name: 'check', lab: 'Доставка', on: false },
  ];
  const stats = [
    { ic: 'users', text: '1200+', sub: 'клиентов доверили нам свои грузы' },
    { ic: 'container', text: '1,275+ тонн', sub: 'успешно доставлено клиентам' },
    { ic: 'warehouse', text: 'Склад в Китае', sub: 'принимаем, проверяем, маркируем' },
    { ic: 'weight', text: 'От 100 кг', sub: 'Работаем со средним и крупным оптом' },
  ];
  return (
    <section className="pd-hero pd-section" style={{ paddingTop: 0, paddingBottom: 64 }}>

      <div className="pd-wrap">
        <div className="pd-hero-content">
          <div className="pd-hero-route">Китай <span className="ar">→</span> Россия / СНГ / Северный Кавказ</div>
          <h1>Доставка из Китая<br/>на Северный Кавказ</h1>
          <div className="pd-divider"></div>
          <p className="pd-hero-lead">
            Доставляем грузы из любого города Китая прямо в Россию и СНГ.
          </p>
          <p className="pd-hero-lead pd-hero-mdest" style={{ marginTop: 16 }}>
            Главные направления: <b>Грозный, Пятигорск, Махачкала, Минеральные Воды, Москва.</b>
          </p>
          <p className="pd-hero-lead pd-hero-dests" style={{ marginTop: 16 }}>
            Берём на себя весь путь: склад в Китае, выкуп, документы, таможню и доставку. Вы просто получаете товар.
          </p>
          <div className="pd-hero-cta">
            <button className="pd-btn pd-btn--primary" onClick={() => window.dispatchEvent(new CustomEvent('pd-open-form'))}>Рассчитать доставку <Icon name="arrow-right" /></button>
            <a className="pd-btn pd-btn--ghost" href="#uslugi">Посмотреть услуги <Icon name="arrow-right" /></a>
          </div>

          {/* Mobile-only: faint map grid + dashed route to a crosshair target + destinations list */}
          <div className="pd-hero-mapdecor" aria-hidden="true">
            <svg className="pd-rtmap" viewBox="0 0 160 200" fill="none" preserveAspectRatio="xMidYMid meet">
              <path d="M4 16 C58 8 96 52 110 102 C118 130 128 150 152 184" stroke="#DE2931" strokeWidth="1.4" strokeDasharray="2.5 6" opacity=".5" />
              <g transform="translate(110 102)">
                <circle r="13" fill="none" stroke="#DE2931" strokeWidth="1.1" opacity=".45" />
                <circle r="6" fill="none" stroke="#DE2931" strokeWidth="1.4" />
                <circle r="2.1" fill="#DE2931" />
                <line x1="-19" y1="0" x2="-15" y2="0" stroke="#DE2931" strokeWidth="1.3" />
                <line x1="15" y1="0" x2="19" y2="0" stroke="#DE2931" strokeWidth="1.3" />
                <line x1="0" y1="-19" x2="0" y2="-15" stroke="#DE2931" strokeWidth="1.3" />
                <line x1="0" y1="15" x2="0" y2="19" stroke="#DE2931" strokeWidth="1.3" />
              </g>
            </svg>
            <div className="pd-dest pd-dest--m">
              <span>Грозный</span><span>Пятигорск</span>
              <span>Махачкала</span><span>Мин. воды</span>
              <span>Москва</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pd-hero-photo">
        <img src="../../assets/hero-port.webp" alt="Контейнерный порт PanDao" width="1500" height="844" decoding="async" fetchpriority="high" />
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
          <span>Москва</span>
        </div>
        <div className="pd-route-panel">
          <div className="rt">Основной маршрут: <span className="ar">Китай</span> → Северный Кавказ</div>
          <div className="ct">Грозный · Пятигорск · Махачкала · Минеральные Воды · Москва</div>
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
        <div className="pd-herostats">
          {stats.map((s, i) => (
            <div className="cell" key={i}>
              <span className="ic"><Icon name={s.ic} /></span>
              <div>
                <div className="big">{s.text ? s.text : (<React.Fragment><span className="cu" data-count={s.count} data-dur="1800">{fmt(s.count)}</span>{s.suffix}</React.Fragment>)}</div>
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
