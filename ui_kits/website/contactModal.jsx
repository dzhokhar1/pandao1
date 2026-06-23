// Contact form modal — opened by any "Рассчитать доставку" button via the
// global 'pd-open-form' event. Fields: имя + телефон + consent checkbox.
function ContactModal() {
  const [open, setOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [agree, setAgree] = React.useState(false);
  const [touched, setTouched] = React.useState(false);

  React.useEffect(() => {
    const onOpen = () => { setOpen(true); setSent(false); setTouched(false); };
    window.addEventListener('pd-open-form', onOpen);
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('pd-open-form', onOpen); window.removeEventListener('keydown', onKey); };
  }, []);
  React.useEffect(() => { window.lucide && lucide.createIcons(); }, [open, sent]);
  React.useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  if (!open) return null;

  const fmtPhone = (raw) => {
    let d = raw.replace(/\D/g, '');
    if (d.startsWith('8')) d = '7' + d.slice(1);
    if (!d.startsWith('7')) d = '7' + d;
    d = d.slice(0, 11);
    let out = '+7';
    if (d.length > 1) out += ' (' + d.slice(1, 4);
    if (d.length >= 4) out += ') ' + d.slice(4, 7);
    if (d.length >= 7) out += '-' + d.slice(7, 9);
    if (d.length >= 9) out += '-' + d.slice(9, 11);
    return out;
  };
  const valid = name.trim().length > 1 && phone.replace(/\D/g, '').length === 11 && agree;
  const submit = (e) => { e.preventDefault(); setTouched(true); if (valid) setSent(true); };

  return (
    <div className="pd-modal-overlay" onClick={() => setOpen(false)}>
      <div className="pd-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="pd-modal-close" onClick={() => setOpen(false)} aria-label="Закрыть"><Icon name="x" /></button>
        <span className="pd-modal-grid" aria-hidden="true"></span>

        {!sent ? (
          <div className="pd-modal-in">
            <span className="pd-kicker">Заявка PanDao</span>
            <h3 className="pd-modal-title">Рассчитать доставку</h3>
            <p className="pd-modal-lead">Оставьте контакты — логист свяжется с вами, уточнит детали груза и рассчитает маршрут из Китая на Северный Кавказ.</p>

            <form className="pd-form" onSubmit={submit} noValidate>
              <label className="pd-field">
                <span className="pd-field-lab">Ваше имя</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Как к вам обращаться" className={touched && name.trim().length < 2 ? 'err' : ''} />
              </label>
              <label className="pd-field">
                <span className="pd-field-lab">Телефон</span>
                <input type="tel" value={phone} onChange={(e) => setPhone(fmtPhone(e.target.value))}
                  placeholder="+7 (___) ___-__-__" className={touched && phone.replace(/\D/g,'').length !== 11 ? 'err' : ''} />
              </label>

              <label className={"pd-check" + (touched && !agree ? ' err' : '')}>
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                <span className="pd-check-box"><Icon name="check" /></span>
                <span className="pd-check-lab">Согласен с <a href="legal/privacy.html" target="_blank" rel="noopener">политикой конфиденциальности</a></span>
              </label>

              <button type="submit" className={"pd-btn pd-btn--primary pd-form-submit" + (valid ? '' : ' is-off')}>
                Отправить заявку <Icon name="arrow-right" />
              </button>
              <p className="pd-form-note">Нажимая «Отправить», вы соглашаетесь на обработку персональных данных согласно 152-ФЗ.</p>
            </form>
          </div>
        ) : (
          <div className="pd-modal-in pd-modal-done">
            <span className="pd-done-ic"><Icon name="check" /></span>
            <h3 className="pd-modal-title">Заявка принята</h3>
            <p className="pd-modal-lead">Спасибо, {name.trim().split(' ')[0] || 'друг'}! Логист PanDao перезвонит вам в ближайшее время по номеру {phone}.</p>
            <button className="pd-btn pd-btn--ghost" onClick={() => setOpen(false)}>Закрыть</button>
          </div>
        )}
      </div>
    </div>
  );
}
Object.assign(window, { ContactModal });
