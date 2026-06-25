// FAQ — premium accordion. One open at a time; smooth height animation via max-height.
function Faq() {
  const [open, setOpen] = React.useState(0);
  React.useEffect(() => { window.lucide && lucide.createIcons(); }, [open]);
  const items = [
    { q: 'За какой срок доставите груз из Китая на Северный Кавказ?',
      a: 'Сроки зависят от маршрута и типа перевозки. В среднем сборные грузы идут 18–30 дней, контейнерные — от 25 дней. Точный срок логист называет при расчёте, учитывая ваш город и характер груза.' },
    { q: 'С каким минимальным весом вы работаете?',
      a: 'Работаем с грузами от 100 кг. Для небольших партий выгодны сборные отправки — объединяем грузы нескольких клиентов в один контейнер, чтобы снизить стоимость.' },
    { q: 'Как происходит оплата и расчёт стоимости?',
      a: 'Стоимость рассчитывается индивидуально по весу, объёму, типу груза и городу назначения. Мы даём честный расчёт до отправки — без скрытых платежей. Для крупных партий от 5 тонн действуют индивидуальные цены.' },
    { q: 'Что будет, если груз повредят или потеряют?',
      a: 'Каждый груз застрахован и находится под нашей ответственностью. Если что-то пойдёт не по плану — мы возмещаем ущерб за свой счёт. Это наша принципиальная позиция: отвечаем за каждый груз.' },
    { q: 'Можно ли отследить груз и склад?',
      a: 'Да. По приёмке груза на склад в Китае мы отправляем фото- и видеоотчёт в рабочий чат. На сайте доступна прямая трансляция со склада, а статус груза вы видите на каждом этапе маршрута.' },
    { q: 'Помогаете ли с выкупом товара в Китае?',
      a: 'Да, оказываем байерские услуги: находим, проверяем и выкупаем товар, ведём переговоры с фабриками и сопровождаем сделку. Вам не нужно лететь в Китай — мы закрываем весь цикл.' },
  ];
  return (
    <section className="pd-section pd-faq" id="faq">
      <div className="pd-wrap pd-faq-wrap">
        <div className="pd-faq-aside">
          <h2>Вопросы и ответы</h2>
          <span className="pd-divider"></span>
          <p>Нужно больше информации? Менеджеры PanDao ответят на любой вопрос и рассчитают доставку под ваш груз.</p>
          <button className="pd-btn pd-btn--primary" onClick={() => window.dispatchEvent(new CustomEvent('pd-open-form'))}>
            Задать вопрос <i data-lucide="arrow-right"></i>
          </button>
        </div>

        <div className="pd-faq-list">
          {items.map((it, i) => (
            <div className={"pd-faq-item" + (open === i ? " open" : "")} key={i}>
              <button className="pd-faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className="pd-faq-qnum">{String(i + 1).padStart(2, '0')}</span>
                <span className="pd-faq-qtext">{it.q}</span>
                <span className="pd-faq-qchev"><i data-lucide="plus"></i></span>
              </button>
              <div className="pd-faq-a"><div className="pd-faq-a-in"><p>{it.a}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Faq });
