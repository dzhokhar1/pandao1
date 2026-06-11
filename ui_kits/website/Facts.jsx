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

  const ledger = [
    { ic: 'kg', num: '100 кг+', lab: 'минимальный вес груза для работы' },
    { ic: 'boxes', num: '5 тонн+', lab: 'индивидуальные условия для крупных партий' },
  ];
  const losses = [
    { ic: 'shield-check', num: '600 кг', lab: 'утерянного груза полностью возместили клиентам' },
    { ic: 'package-check', num: '1000+ товаров', lab: 'повреждено в дороге — ущерб закрыли за свой счёт' },
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
              <img src="../../assets/hero-port.png" alt="Контейнерный порт PanDao" />
              <span className="pd-fc3-coord">43.2389° N<br/>45.7560° E</span>
              <span className="pd-fc3-cross"></span>
              <div className="pd-fc3-flag">
                <span className="chip"><Icon name="container" /></span>
                <div>
                  <div className="num">1 275 000<span className="u">+ кг</span></div>
                  <div className="lab">успешно доставленных товаров</div>
                </div>
              </div>
            </div>
            <div className="pd-fc3-img-sub">
              <img src="../../assets/warehouse.png" alt="Склад PanDao в Китае" />
              <div className="pd-fc3-subchip"><span className="dot"></span>1 200+ клиентов</div>
            </div>
            <span className="pd-fc3-ping"></span>
          </div>

          {/* ledger */}
          <div className="pd-fc3-ledger">
            {ledger.map((r, i) => (
              <div className="pd-fc3-row reveal" key={i}>
                <span className="chip">{r.ic === 'kg' ? <KgIconF /> : <Icon name={r.ic} />}</span>
                <div className="pd-fc3-rowtext">
                  <div className="num">{r.num}</div>
                  <div className="lab">{r.lab}</div>
                </div>
              </div>
            ))}
            <div className="pd-fc3-losslabel reveal"><span className="ic"><Icon name="shield-alert" /></span>Честно о потерях</div>
            {losses.map((r, i) => (
              <div className="pd-fc3-row pd-fc3-row--loss reveal" key={i}>
                <span className="chip">{r.ic === 'kg' ? <KgIconF /> : <Icon name={r.ic} />}</span>
                <div className="pd-fc3-rowtext">
                  <div className="num">{r.num}</div>
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
