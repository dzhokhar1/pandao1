// Warehouse & control section: copy + features + CTA, photo with stat strip, process timeline.
function Warehouse() {
  React.useEffect(() => { window.lucide && lucide.createIcons(); }, []);
  const feats = [
    { ic: 'building-2', t: 'Собственный склад в Китае', d: 'Принимаем товар из любого города Китая' },
    { ic: 'search-check', t: 'Проверка и фотоотчёт', d: 'Проверяем качество и соответствие заказа' },
    { ic: 'package', t: 'Упаковка и маркировка', d: 'Надёжно упакуем и промаркируем груз' },
    { ic: 'shield-check', t: 'Страхование и безопасность', d: 'Ваш груз застрахован и под нашей ответственностью' },
    { ic: 'video', t: 'Видеоотчёт в рабочий чат', d: 'По получению груза на склад отправляем видеоотчёт' },
    { ic: 'headset', t: 'Быстрая поддержка 24/7', d: 'Быстрые ответы от техподдержки в любое время' },
  ];
  const whstats = [
    { ic: 'warehouse', big: '1000 м²', sub: 'рабочая площадь склада в Китае' },
    { ic: 'cctv', big: '24/7', sub: 'видеонаблюдение и контроль' },
    { ic: 'users', big: '100%', sub: 'проверка каждого груза' },
    { ic: 'shield-check', big: '0', sub: 'потерянных грузов за 5 лет работы' },
  ];
  const proc = [
    { img: '01', no: '01', tt: 'Приём груза', dd: 'Принимаем товар от поставщика из любого города Китая' },
    { img: '02', no: '02', tt: 'Проверка', dd: 'Проверяем качество и соответствие вашего заказа' },
    { img: '03', no: '03', tt: 'Упаковка и маркировка', dd: 'Надёжно упакуем и промаркируем каждую единицу' },
    { img: '04', no: '04', tt: 'Хранение', dd: 'Бережное хранение до отправки без лишних рисков' },
    { img: '05', no: '05', tt: 'Отправка', dd: 'Формируем маршрут и отправляем на Северный Кавказ' },
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
                  <span className="ic"><Icon name={f.ic} /></span>
                  <div>
                    <div className="t">{f.t}</div>
                    <div className="d">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="pd-btn pd-btn--primary">Узнать подробнее <Icon name="arrow-right" /></button>
          </div>

          <div className="pd-wh-photo">
            <img src="../../assets/warehouse.png" alt="Склад PanDao в Китае" />
            <div className="pd-wh-stats">
              {whstats.map((s, i) => (
                <div className="c" key={i}>
                  <div className="ic"><Icon name={s.ic} /></div>
                  <div className="big">{s.big}</div>
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
                  <div className="ph"><img src={`../../assets/proc-${p.img}.jpg`} alt={p.tt} /></div>
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
