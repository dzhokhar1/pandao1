// Brand SVG icons for messengers (native marks, single-color on dark).
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}
function TelegramIcon() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="currentColor" d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4Zm5.57 8.2-1.86 8.78c-.14.62-.51.77-1.03.48l-2.85-2.1-1.37 1.32c-.15.15-.28.28-.57.28l.2-2.9 5.27-4.76c.23-.2-.05-.32-.35-.12l-6.51 4.1-2.81-.88c-.61-.19-.62-.61.13-.9l10.98-4.23c.51-.19.96.12.79.86Z"/>
    </svg>
  );
}

function Contacts() {
  React.useEffect(() => { window.lucide && lucide.createIcons(); }, []);
  const items = [
    { ic: 'phone', lab: 'Телефон', val: '+7 (985) 071-01-01', href: 'tel:+79850710101', c: '#1F8A5B', bg: 'rgba(31,138,91,.12)' },
    { ic: 'mail', lab: 'Почта', val: 'pandaologistics@gmail.com', href: 'mailto:pandaologistics@gmail.com', c: '#2A6FDB', bg: 'rgba(42,111,219,.12)' },
    { ic: 'map-pin', lab: 'Адрес в Китае', val: '广东省佛山市里水镇胜利社区河朱沙上庄上进路6号厂房零一零一', href: null, c: '#DE2931', bg: 'rgba(222,41,49,.12)' },
    { ic: 'clock', lab: 'Часы работы', val: 'Пн–Сб • 9:00 до 18:00 (МСК)', href: null, c: '#D97757', bg: 'rgba(217,119,87,.15)' },
  ];
  return (
    <section className="pd-section pd-contacts" id="contacts">
      <span className="pd-ct-grid" aria-hidden="true"></span>
      <svg className="pd-ct-route" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true">
        <path d="M40,210 C300,80 520,250 760,140 S1080,60 1180,120" fill="none" stroke="#DE2931" strokeWidth="1.5" strokeDasharray="2 10" strokeLinecap="round" opacity="0.5"/>
      </svg>

      <div className="pd-wrap pd-ct-wrap">
        <div className="pd-ct-left">
          <span className="pd-kicker">Контакты</span>
          <h2>Рассчитаем доставку<br/>вашего груза</h2>
          <span className="pd-divider"></span>
          <p className="pd-ct-lead">Наши менеджеры всегда на связи в мессенджерах и соцсетях.</p>

          <div className="pd-ct-grid-items">
            {items.map((it, i) => {
              const inner = (
                <React.Fragment>
                  <span className="ic" style={{ color: it.c, background: it.bg }}><i data-lucide={it.ic}></i></span>
                  <span className="pd-ct-txt"><span className="l">{it.lab}</span><span className="v">{it.val}</span></span>
                </React.Fragment>
              );
              return it.href
                ? <a className="pd-ct-item" key={i} href={it.href}>{inner}</a>
                : <div className="pd-ct-item" key={i}>{inner}</div>;
            })}
          </div>

          <div className="pd-ct-msgs">
            <a className="pd-msg pd-msg--wa" href="https://wa.me/79850710101" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> WhatsApp
            </a>
            <a className="pd-msg pd-msg--tg" href="https://t.me/pandaologistics" target="_blank" rel="noopener noreferrer">
              <TelegramIcon /> Telegram
            </a>
          </div>
        </div>

        <div className="pd-ct-card">
          <div className="pd-ct-card-top">
            <span className="pd-ct-badge"><span className="dot"></span>На связи сейчас</span>
            <h3>Оставьте заявку</h3>
          </div>
          <button className="pd-btn pd-btn--primary pd-ct-cta" onClick={() => window.dispatchEvent(new CustomEvent('pd-open-form'))}>
            Рассчитать доставку <i data-lucide="arrow-right"></i>
          </button>
          <div className="pd-ct-route-mini">
            <span className="ar">Китай</span>
            <span className="line"></span>
            <i data-lucide="plane"></i>
            <span className="line"></span>
            <span>Северный Кавказ</span>
          </div>
          <div className="pd-ct-cities">Грозный · Пятигорск · Махачкала · Мин. воды · Москва</div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Contacts });
