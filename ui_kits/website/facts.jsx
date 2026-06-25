// Facts section — premium image-stack + animated ledger (distinct from Results).
// Two real photos in an overlapping stack with floating glass chips and map
// graphics, beside an editorial "ledger" of facts that reveals on scroll.

function KgIconF() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M11 9.5C11 7.6 13.2 6 16 6s5 1.6 5 3.5c0 .9-.6 1.6-1.4 2.2 2.5 1 4.4 2.9 5 5.4l1.3 5.6c.5 2.2-1.1 4.3-3.3 4.3H9.4c-2.2 0-3.8-2.1-3.3-4.3l1.3-5.6c.6-2.5 2.5-4.4 5-5.4C11.6 11.1 11 10.4 11 9.5Z"
        stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <text x="16" y="22.3" textAnchor="middle" fontFamily="Onest, sans-serif" fontWeight="800" fontSize="7.4" fill="currentColor" letterSpacing="-.3">KG</text>
    </svg>
  );
}

function Facts() {
  const secRef = React.useRef(null);
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
    const sec = secRef.current;
    if (!sec) return;
    sec.classList.add('pd-anim-ready');
    const reveals = [...sec.querySelectorAll('.reveal')];
    let done = false;
    const trig = () => {
      if (done) return;
      const r = sec.getBoundingClientRect();
      if (r.top < (window.innerHeight || 800) * 0.82 && r.bottom > 0) {
        done = true;
        reveals.forEach((el, i) => { el.style.transitionDelay = (i * 0.08) + 's'; el.classList.add('in'); });
        window.removeEventListener('scroll', trig);
      }
    };
    trig();
    window.addEventListener('scroll', trig, { passive: true });
    return () => window.removeEventListener('scroll', trig);
  }, []);

  const fmt = (n) => n.toLocaleString('ru-RU').replace(/\u00A0/g, ' ');
  const ledger = [
    { ic: 'kg', count: 100, unit: ' кг+', lab: 'минимальный вес груза для работы' },
    { ic: 'weight', count: 5, unit: ' тонн+', lab: 'индивидуальные условия для крупных партий' },
  ];
  const losses = [
    { ic: 'shield-check', count: 600, unit: ' кг', lab: 'утерянного груза полностью возместили клиентам' },
  ];

  return (
    <section className="pd-section pd-facts3" ref={secRef}>
      <span className="pd-fc3-bg-grid"></span>
      <svg className="pd-fc3-bg-route" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-20,250 C260,120 480,300 700,170 S1080,80 1240,150" fill="none" stroke="#DE2931" strokeWidth="1.4" strokeDasharray="2 11" strokeLinecap="round" opacity="0.4"/>
      </svg>

      <div className="pd-wrap">
        {/* editorial heading */}
        <div className="pd-fc3-head">
          <div className="reveal">
            <span className="pd-kicker">Факты PanDao</span>
            <h2>Мы говорим не словами,<br/>а фактами</h2>
          </div>
          <p className="pd-fc3-intro reveal">Логистика — это не про обещания, что всё всегда будет идеально.
            Это про контроль, честный расчёт и ответственность, если что-то пошло не по плану.</p>
        </div>

        <div className="pd-fc3-body">
          {/* image stack */}
          <div className="pd-fc3-stack reveal">
            <div className="pd-fc3-img-main">
              <img src="../../assets/hero-port.webp" alt="Контейнерный порт PanDao" width="1500" height="844" loading="lazy" decoding="async" data-parallax="0.14" />
              <div className="pd-fc3-flag">
                <span className="chip"><Icon name="container" /></span>
                <div>
                  <div className="num"><span className="cu">1,275</span><span className="u">+ тонн</span></div>
                  <div className="lab">успешно доставленных товаров</div>
                </div>
              </div>
            </div>
            <div className="pd-fc3-img-sub">
              <img src="../../assets/warehouse.webp" alt="Склад PanDao в Китае" width="1400" height="957" loading="lazy" decoding="async" data-parallax="0.2" />
              <div className="pd-fc3-subchip"><span className="dot"></span><span className="cu">1200</span>+ клиентов</div>
            </div>
            <span className="pd-fc3-ping"></span>
          </div>

          {/* ledger */}
          <div className="pd-fc3-ledger">
            {ledger.map((r, i) => (
              <div className="pd-fc3-row reveal" key={i}>
                <span className="chip">{r.ic === 'kg' ? <KgIconF /> : <Icon name={r.ic} />}</span>
                <div className="pd-fc3-rowtext">
                  <div className="num"><span className="cu" data-count={r.count} data-dur="1500">{fmt(r.count)}</span>{r.unit}</div>
                  <div className="lab">{r.lab}</div>
                </div>
              </div>
            ))}
            <div className="pd-fc3-losslabel reveal"><span className="ic"><Icon name="shield-alert" /></span>Честно о потерях</div>
            {losses.map((r, i) => (
              <div className="pd-fc3-row pd-fc3-row--loss reveal" key={i}>
                <span className="chip">{r.ic === 'kg' ? <KgIconF /> : <Icon name={r.ic} />}</span>
                <div className="pd-fc3-rowtext">
                  <div className="num"><span className="cu" data-count={r.count} data-dur="1500">{fmt(r.count)}</span>{r.unit}</div>
                  <div className="lab">{r.lab}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Facts });
