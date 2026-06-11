// Results section — premium dark stat panel + capability cards.
// Brand "control-room" treatment: dark panel with map/route graphics,
// animated count-up numbers, and numbered capability cards below.

function KgIconR() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M11 9.5C11 7.6 13.2 6 16 6s5 1.6 5 3.5c0 .9-.6 1.6-1.4 2.2 2.5 1 4.4 2.9 5 5.4l1.3 5.6c.5 2.2-1.1 4.3-3.3 4.3H9.4c-2.2 0-3.8-2.1-3.3-4.3l1.3-5.6c.6-2.5 2.5-4.4 5-5.4C11.6 11.1 11 10.4 11 9.5Z"
        stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <text x="16" y="22.3" textAnchor="middle" fontFamily="Onest, sans-serif" fontWeight="800" fontSize="7.4" fill="currentColor" letterSpacing="-.3">KG</text>
    </svg>
  );
}

function Results() {
  const panelRef = React.useRef(null);
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
    const el = panelRef.current;
    if (!el) return;
    let done = false;
    const trigger = () => {
      if (done) return;
      const r = el.getBoundingClientRect();
      if (r.top < (window.innerHeight || 800) * 0.85 && r.bottom > 0) {
        done = true;
        el.classList.add('in');
        window.removeEventListener('scroll', trigger);
      }
    };
    trigger();
    window.addEventListener('scroll', trigger, { passive: true });
    return () => window.removeEventListener('scroll', trigger);
  }, []);

  const stats = [
    { ic: 'users', num: '500', suffix: '+', label: 'довольных клиентов' },
    { ic: 'container', num: '1 275 000', suffix: ' кг+', label: 'успешно доставленных грузов' },
    { ic: 'shield-check', num: '600', suffix: ' кг+', label: 'потерянных грузов, за которые мы полностью возместили ущерб' },
  ];
  const caps = [
    { idx: '01', ic: 'kg', t: 'От 100 кг', d: 'Работаем с грузами от 100 кг.' },
    { idx: '02', ic: 'boxes', t: 'Сборные грузы', d: 'Объединяем грузы нескольких клиентов в один контейнер, чтобы Вы экономили.' },
    { idx: '03', ic: 'calculator', t: 'От 5000 тонн', d: 'Рассчитываем по индивидуальным ценам до Вашего города.' },
    { idx: '04', ic: 'container', t: 'Контейнерная перевозка', d: 'Наши логисты сформируют самый удобный для Вас маршрут по индивидуальным параметрам.', accent: 'Дешевле? Быстрее? Надёжнее? Сделаем!' },
  ];

  return (
    <section className="pd-section pd-rz">
      <div className="pd-wrap">
        {/* ---- dark stat panel ---- */}
        <div className="pd-rz-panel" ref={panelRef}>
          <span className="pd-rz-bg-grid"></span>
          <svg className="pd-rz-route" viewBox="0 0 1100 260" preserveAspectRatio="none" aria-hidden="true">
            <path d="M40,210 C260,90 460,250 640,120 S960,40 1080,90" fill="none" stroke="#DE2931" strokeWidth="1.6" strokeDasharray="2 10" strokeLinecap="round" opacity="0.55"/>
          </svg>
          <span className="pd-rz-cross" style={{ top: '22%', right: '14%' }}></span>
          <span className="pd-rz-ping" style={{ top: '64%', right: '8%' }}></span>
          <span className="pd-rz-coord">43.2389° N<br/>45.7560° E</span>

          <div className="pd-rz-head">
            <span className="pd-kicker">Результаты PanDao</span>
            <h2>Логистика — это не про&nbsp;«всё&nbsp;идеально».<br/>
              Это про <span className="pd-rz-red">«отвечаем&nbsp;за&nbsp;каждый»</span>.</h2>
          </div>

          <div className="pd-rz-stats">
            {stats.map((s, i) => (
              <div className="pd-rz-stat" key={i}>
                <span className="pd-rz-node"><Icon name={s.ic} /></span>
                <div className="pd-rz-num">
                  {s.num}<span className="u">{s.suffix}</span>
                </div>
                <div className="pd-rz-lab">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- capability cards ---- */}
        <div className="pd-rz-caps">
          {caps.map((c, i) => (
            <div className="pd-rz-cap" key={i}>
              <span className="pd-rz-idx">{c.idx}</span>
              <span className="pd-rz-chip">{c.ic === 'kg' ? <KgIconR /> : <Icon name={c.ic} />}</span>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
              {c.accent && <p className="pd-rz-accent">{c.accent}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Results });
