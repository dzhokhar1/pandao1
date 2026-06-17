// Warehouse & control section: copy + features + CTA, photo with stat strip, process timeline.
function Warehouse() {
  const [playing, setPlaying] = React.useState(false);
  React.useEffect(() => { window.lucide && lucide.createIcons(); }, [playing]);
  const feats = [
    { em: '🏭', anim: 'a-float', t: 'Собственный склад в Китае', d: 'Принимаем товар из любого города Китая' },
    { em: '🔍', anim: 'a-swing', t: 'Проверка и фотоотчёт', d: 'Проверяем качество и соответствие заказа' },
    { em: '🛡️', anim: 'a-pulse', t: 'Страхование и безопасность', d: 'Ваш груз застрахован и под нашей ответственностью' },
    { em: '🎥', anim: 'a-bounce', t: 'Видеоотчёт в рабочий чат', d: 'По получению груза на склад отправляем видеоотчёт' },
  ];
  const whstats = [
    { ic: 'warehouse', big: '1000 м²', sub: 'рабочая площадь склада в Китае' },
    { ic: 'cctv', big: '24/7', sub: 'видеонаблюдение и контроль' },
    { ic: 'users', big: '100%', sub: 'проверка каждого груза' },
    { ic: 'shield-check', big: '0', sub: 'потерянных грузов за 5 лет работы' },
  ];
  const proc = [
    { ic: 'package-check', no: '01', tt: 'Приём груза', dd: 'Принимаем товар от поставщика из любого города Китая' },
    { ic: 'search-check', no: '02', tt: 'Проверка', dd: 'Проверяем качество и соответствие вашего заказа' },
    { ic: 'package', no: '03', tt: 'Упаковка и маркировка', dd: 'Надёжно упакуем и промаркируем каждую единицу' },
    { ic: 'warehouse', no: '04', tt: 'Хранение', dd: 'Бережное хранение до отправки без лишних рисков' },
    { ic: 'truck', no: '05', tt: 'Отправка', dd: 'Формируем маршрут и отправляем на Северный Кавказ' },
  ];
  return (
    <section className="pd-section pd-wh-section">
      <MapBg />
      <div className="pd-wrap">
        <div className="pd-wh-grid">
          <div>
            <span className="pd-kicker">Наш склад и контроль</span>
            <h2 style={{ fontWeight: 800, fontSize: 'clamp(30px,3.6vw,48px)', lineHeight: 1.04, letterSpacing: '-.02em', margin: '18px 0 0' }}>
              Принимаем, проверяем и готовим ваш груз в Китае
            </h2>
            <p className="pd-hero-lead" style={{ marginTop: 20 }}>
              Собственный склад в Китае — это контроль качества, безопасное хранение и полная
              готовность груза к отправке на Северный Кавказ.
            </p>
            <div className="pd-feat">
              {feats.map((f, i) => (
                <div className="row" key={i}>
                  <span className="ic"><span className={"pd-emoji " + f.anim}>{f.em}</span></span>
                  <div>
                    <div className="t">{f.t}</div>
                    <div className="d">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="pd-btn pd-btn--primary" onClick={() => window.dispatchEvent(new CustomEvent('pd-open-form'))}>Узнать подробнее <Icon name="arrow-right" /></button>
          </div>

          <div className="pd-wh-photo pd-wh-live">
            {!playing ? (
              <button type="button" className="pd-live-frame" onClick={() => setPlaying(true)} aria-label="Смотреть прямую трансляцию">
                <img src="../../assets/warehouse.webp" alt="Прямая трансляция со склада PanDao" width="1400" height="957" loading="lazy" decoding="async" />
                <span className="pd-live-scrim"></span>
                <span className="pd-live-badge"><span className="dot"></span>Прямая трансляция со склада PanDao</span>
                <span className="pd-live-play"><Icon name="play" /></span>
                <span className="pd-live-cap">
                  <span className="s">Грозный · Пятигорск · Махачкала · Минеральные Воды</span>
                </span>
              </button>
            ) : (
              <iframe className="pd-live-iframe" src="https://www.youtube.com/embed/LJgXwC-AKu8?autoplay=1&rel=0&modestbranding=1"
                title="Прямая трансляция со склада PanDao"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen></iframe>
            )}
            <div className="pd-wh-stats">
              {whstats.map((s, i) => (
                <div className="c" key={i}>
                  <div className="pd-wh-top"><span className="ic"><Icon name={s.ic} /></span><span className="big">{s.big}</span></div>
                  <div className="sub">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pd-proc-wrap">
          <h3>Так выглядит процесс на складе</h3>
          <div className="pd-proc">
            {proc.map((p, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="pd-proc-arrow"><Icon name="arrow-right" /></div>}
                <div className="step">
                  <div className="ph"><span className="pd-proc-ic"><Icon name={p.ic} /></span><span className="pd-proc-wm">{p.no}</span></div>
                  <div className="no">{p.no}</div>
                  <div className="tt">{p.tt}</div>
                  <div className="dd">{p.dd}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Warehouse });
