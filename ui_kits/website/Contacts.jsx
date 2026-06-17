// Brand SVG icons for messengers (native marks, single-color on dark).
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="currentColor" d="M16.04 4C9.96 4 5.02 8.94 5.02 15.02c0 2.12.6 4.1 1.64 5.8L5 28l7.36-1.62a11 11 0 0 0 3.68.64h.01c6.08 0 11.02-4.94 11.02-11.02C27.07 8.94 22.12 4 16.04 4Zm0 20.18h-.01c-1.1 0-2.18-.3-3.12-.86l-.22-.13-3.7.97.99-3.61-.15-.23a8.97 8.97 0 0 1-1.38-4.78c0-4.96 4.04-9 9-9 2.4 0 4.66.94 6.36 2.64a8.94 8.94 0 0 1 2.64 6.36c0 4.96-4.04 9-8.99 9Zm4.94-6.73c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.8-.72-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.46-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.84.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z"/>
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
    { ic: 'phone', lab: 'Телефон', val: '+7 (928) 000-00-00', href: 'tel:+79280000000' },
    { ic: 'mail', lab: 'Почта', val: 'info@pandao.example', href: 'mailto:info@pandao.example' },
    { ic: 'map-pin', lab: 'Склад в Китае', val: 'г. Гуанчжоу, район Байюнь', href: null },
    { ic: 'clock', lab: 'Часы работы', val: 'Пн–Сб · 9:00–20:00 (МСК)', href: null },
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
          <p className="pd-ct-lead">Свяжитесь удобным способом — логист на связи в мессенджерах и по телефону. Ответим, рассчитаем маршрут и сроки из Китая на Северный Кавказ.</p>

          <div className="pd-ct-grid-items">
            {items.map((it, i) => {
              const inner = (
                <React.Fragment>
                  <span className="ic"><i data-lucide={it.ic}></i></span>
                  <span className="pd-ct-txt"><span className="l">{it.lab}</span><span className="v">{it.val}</span></span>
                </React.Fragment>
              );
              return it.href
                ? <a className="pd-ct-item" key={i} href={it.href}>{inner}</a>
                : <div className="pd-ct-item" key={i}>{inner}</div>;
            })}
          </div>

          <div className="pd-ct-msgs">
            <a className="pd-msg pd-msg--wa" href="https://wa.me/79280000000" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> WhatsApp
            </a>
            <a className="pd-msg pd-msg--tg" href="https://t.me/pandao" target="_blank" rel="noopener noreferrer">
              <TelegramIcon /> Telegram
            </a>
          </div>
        </div>

        <div className="pd-ct-card">
          <div className="pd-ct-card-top">
            <span className="pd-ct-badge"><span className="dot"></span>На связи сейчас</span>
            <h3>Оставьте заявку</h3>
            <p>Перезвоним в течение 15 минут в рабочее время и рассчитаем стоимость.</p>
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
          <div className="pd-ct-cities">Грозный · Пятигорск · Махачкала · Минеральные Воды</div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Contacts });
