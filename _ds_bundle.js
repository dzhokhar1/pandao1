/* @ds-bundle: {"format":3,"namespace":"PanDaoDesignSystem_7d45b9","components":[],"sourceHashes":{"ui_kits/website/Decor.jsx":"99c5b570373f","ui_kits/website/Facts.jsx":"997565dd0e12","ui_kits/website/Footer.jsx":"39cee844dad9","ui_kits/website/Header.jsx":"d68bc4b8ebf4","ui_kits/website/Hero.jsx":"d6e2e0a08d39","ui_kits/website/Results.jsx":"cb2cbcb15e46","ui_kits/website/Services.jsx":"9269ad3270cd","ui_kits/website/Warehouse.jsx":"2d77ce22b744"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PanDaoDesignSystem_7d45b9 = window.PanDaoDesignSystem_7d45b9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/Decor.jsx
try { (() => {
// Shared decorative helpers: Lucide icon + map background motifs.
function Icon({
  name,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    className: className,
    style: style
  });
}

// Faint grid + crosshair + coordinate readouts + dashed route. Pure decoration.
function MapBg({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pd-mapbg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-coord",
    style: {
      right: 28,
      bottom: 40,
      textAlign: 'right'
    }
  }, "43.2389\xB0 N", /*#__PURE__*/React.createElement("br", null), "45.7560\xB0 E"), /*#__PURE__*/React.createElement("div", {
    className: "pd-cross",
    style: {
      left: 36,
      top: 340
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pd-dot",
    style: {
      left: 200,
      top: 360
    }
  }), children);
}

// Photo placeholder — replaces real photography until high-res assets are supplied.
// dark=true for blocks that carry light/white overlays (hero, warehouse).
function Photo({
  label,
  dark,
  ratio,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pd-photo-ph" + (dark ? " is-dark" : ""),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-photo-ph-inner"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image"
  }), label && /*#__PURE__*/React.createElement("span", null, label)));
}

// Small specialization chip used in section corners
function SpecChip() {
  return /*#__PURE__*/React.createElement("div", {
    className: "pd-spec"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "crosshair"
  })), /*#__PURE__*/React.createElement("span", {
    className: "tx"
  }, "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F:", /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("span", null, "\u041A\u0438\u0442\u0430\u0439"), " ", /*#__PURE__*/React.createElement("span", {
    className: "ar"
  }, "\u2192"), " \u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u041A\u0430\u0432\u043A\u0430\u0437")));
}
Object.assign(window, {
  Icon,
  MapBg,
  SpecChip,
  Photo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Decor.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Facts.jsx
try { (() => {
// Facts section — premium image-stack + animated ledger (distinct from Results).
// Two real photos in an overlapping stack with floating glass chips and map
// graphics, beside an editorial "ledger" of facts that reveals on scroll.

function KgIconF() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 9.5C11 7.6 13.2 6 16 6s5 1.6 5 3.5c0 .9-.6 1.6-1.4 2.2 2.5 1 4.4 2.9 5 5.4l1.3 5.6c.5 2.2-1.1 4.3-3.3 4.3H9.4c-2.2 0-3.8-2.1-3.3-4.3l1.3-5.6c.6-2.5 2.5-4.4 5-5.4C11.6 11.1 11 10.4 11 9.5Z",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("text", {
    x: "16",
    y: "22.3",
    textAnchor: "middle",
    fontFamily: "Onest, sans-serif",
    fontWeight: "800",
    fontSize: "7.4",
    fill: "currentColor",
    letterSpacing: "-.3"
  }, "KG"));
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
        reveals.forEach((el, i) => {
          el.style.transitionDelay = i * 0.08 + 's';
          el.classList.add('in');
        });
        window.removeEventListener('scroll', trig);
      }
    };
    trig();
    window.addEventListener('scroll', trig, {
      passive: true
    });
    return () => window.removeEventListener('scroll', trig);
  }, []);
  const ledger = [{
    ic: 'kg',
    num: '100 кг+',
    lab: 'минимальный вес груза для работы'
  }, {
    ic: 'boxes',
    num: '5 тонн+',
    lab: 'индивидуальные условия для крупных партий'
  }];
  const losses = [{
    ic: 'shield-check',
    num: '600 кг',
    lab: 'утерянного груза полностью возместили клиентам'
  }, {
    ic: 'package-check',
    num: '1000+ товаров',
    lab: 'повреждено в дороге — ущерб закрыли за свой счёт'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pd-section pd-facts3",
    ref: secRef
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-fc3-bg-grid"
  }), /*#__PURE__*/React.createElement("svg", {
    className: "pd-fc3-bg-route",
    viewBox: "0 0 1200 400",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M-20,250 C260,120 480,300 700,170 S1080,80 1240,150",
    fill: "none",
    stroke: "#DE2931",
    strokeWidth: "1.4",
    strokeDasharray: "2 11",
    strokeLinecap: "round",
    opacity: "0.4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pd-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-kicker"
  }, "\u0424\u0430\u043A\u0442\u044B PanDao"), /*#__PURE__*/React.createElement("h2", null, "\u041C\u044B \u0433\u043E\u0432\u043E\u0440\u0438\u043C \u043D\u0435 \u0441\u043B\u043E\u0432\u0430\u043C\u0438,", /*#__PURE__*/React.createElement("br", null), "\u0430 \u0444\u0430\u043A\u0442\u0430\u043C\u0438")), /*#__PURE__*/React.createElement("p", {
    className: "pd-fc3-intro reveal"
  }, "\u041B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0430 \u2014 \u044D\u0442\u043E \u043D\u0435 \u043F\u0440\u043E \u043E\u0431\u0435\u0449\u0430\u043D\u0438\u044F, \u0447\u0442\u043E \u0432\u0441\u0451 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E. \u042D\u0442\u043E \u043F\u0440\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C, \u0447\u0435\u0441\u0442\u043D\u044B\u0439 \u0440\u0430\u0441\u0447\u0451\u0442 \u0438 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C, \u0435\u0441\u043B\u0438 \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u043F\u043E \u043F\u043B\u0430\u043D\u0443.")), /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-stack reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-img-main"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero-port.png",
    alt: "\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u0440\u0442 PanDao"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pd-fc3-coord"
  }, "43.2389\xB0 N", /*#__PURE__*/React.createElement("br", null), "45.7560\xB0 E"), /*#__PURE__*/React.createElement("span", {
    className: "pd-fc3-cross"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-flag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "container"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "1 275 000", /*#__PURE__*/React.createElement("span", {
    className: "u"
  }, "+ \u043A\u0433")), /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, "\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432")))), /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-img-sub"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/warehouse.png",
    alt: "\u0421\u043A\u043B\u0430\u0434 PanDao \u0432 \u041A\u0438\u0442\u0430\u0435"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-subchip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "1 200+ \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432")), /*#__PURE__*/React.createElement("span", {
    className: "pd-fc3-ping"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-ledger"
  }, ledger.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-row reveal",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, r.ic === 'kg' ? /*#__PURE__*/React.createElement(KgIconF, null) : /*#__PURE__*/React.createElement(Icon, {
    name: r.ic
  })), /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-rowtext"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, r.num), /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, r.lab)))), /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-losslabel reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-alert"
  })), "\u0427\u0435\u0441\u0442\u043D\u043E \u043E \u043F\u043E\u0442\u0435\u0440\u044F\u0445"), losses.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-row pd-fc3-row--loss reveal",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, r.ic === 'kg' ? /*#__PURE__*/React.createElement(KgIconF, null) : /*#__PURE__*/React.createElement(Icon, {
    name: r.ic
  })), /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-rowtext"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, r.num), /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, r.lab))))))));
}
Object.assign(window, {
  Facts
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Facts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Footer — compact, on-brand. NOTE: not present in source screenshots; added as a
// reasonable, understated extension so the page has a proper close.
function Footer() {
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  }, []);
  return /*#__PURE__*/React.createElement("footer", {
    className: "pd-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "logo",
    src: "../../assets/pandao-logo.png",
    alt: "PanDao"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--pd-on-dark-mut)',
      fontSize: 15,
      lineHeight: 1.5,
      marginTop: 18
    }
  }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0433\u0440\u0443\u0437\u043E\u0432 \u0438\u0437 \u043B\u044E\u0431\u043E\u0433\u043E \u0433\u043E\u0440\u043E\u0434\u0430 \u041A\u0438\u0442\u0430\u044F \u043D\u0430 \u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u041A\u0430\u0432\u043A\u0430\u0437.")), /*#__PURE__*/React.createElement("div", {
    className: "cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u0423\u0441\u043B\u0443\u0433\u0438"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u0413\u0440\u043E\u0437\u043D\u044B\u0439"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u041F\u044F\u0442\u0438\u0433\u043E\u0440\u0441\u043A"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u041C\u0438\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0412\u043E\u0434\u044B")))), /*#__PURE__*/React.createElement("div", {
    className: "bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 PanDao Logistics Company"), /*#__PURE__*/React.createElement("span", null, "\u041A\u0438\u0442\u0430\u0439 \u2192 \u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u041A\u0430\u0432\u043A\u0430\u0437"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Site header: logo, desktop nav, CTA, mobile hamburger + slide-in menu.
function Header() {
  const [open, setOpen] = React.useState(false);
  const links = ['Услуги', 'Маршруты', 'О компании', 'Контакты'];
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  }, [open]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "pd-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-header-in"
  }, /*#__PURE__*/React.createElement("img", {
    className: "pd-logo",
    src: "../../assets/pandao-logo.png",
    alt: "PanDao Logistics"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "pd-nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#"
  }, l))), /*#__PURE__*/React.createElement("button", {
    className: "pd-btn pd-btn--primary pd-btn--sm"
  }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("button", {
    className: "pd-burger",
    onClick: () => setOpen(true),
    "aria-label": "\u041C\u0435\u043D\u044E"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pd-mobnav" + (open ? " open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-mobnav-top"
  }, /*#__PURE__*/React.createElement("img", {
    className: "pd-logo",
    src: "../../assets/pandao-logo.png",
    alt: "PanDao"
  }), /*#__PURE__*/React.createElement("button", {
    className: "pd-burger",
    onClick: () => setOpen(false),
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: () => setOpen(false)
  }, l)), /*#__PURE__*/React.createElement("button", {
    className: "pd-btn pd-btn--primary",
    onClick: () => setOpen(false)
  }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443 ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  }))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero: eyebrow route, headline, lead, CTAs, port photo with floating cards, stat row.
function Hero() {
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  }, []);
  const track = [{
    name: 'warehouse',
    lab: 'Склад в Китае',
    on: true
  }, {
    name: 'truck',
    lab: 'Транспортировка',
    on: false
  }, {
    name: 'scan-line',
    lab: 'Таможня',
    on: false
  }, {
    name: 'check',
    lab: 'Доставка',
    on: false
  }];
  const stats = [{
    ic: 'users',
    big: '1 200+',
    sub: 'доверили нам свои грузы'
  }, {
    ic: 'container',
    big: '1 275 000+ кг',
    sub: 'успешно доставлено'
  }, {
    ic: 'warehouse',
    big: 'Склад в Китае',
    sub: 'принимаем, проверяем, маркируем'
  }, {
    ic: 'weight',
    big: 'От 100 кг',
    sub: 'работаем с бизнесом и оптом'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pd-hero pd-section",
    style: {
      paddingTop: 0,
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-hero-coord"
  }, "43.2389\xB0 N", /*#__PURE__*/React.createElement("br", null), "45.7560\xB0 E"), /*#__PURE__*/React.createElement("div", {
    className: "pd-hero-cross"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pd-hero-photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero-port.png",
    alt: "\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u0440\u0442 PanDao"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pd-chip-accept"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "warehouse"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "\u0413\u0440\u0443\u0437 \u043F\u0440\u0438\u043D\u044F\u0442 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C, \u043C\u0430\u0440\u043A\u0438\u0440\u0443\u0435\u043C \u0438 \u0433\u043E\u0442\u043E\u0432\u0438\u043C \u043A \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435"), /*#__PURE__*/React.createElement("div", {
    className: "bar"
  }, /*#__PURE__*/React.createElement("i", null)))), /*#__PURE__*/React.createElement("div", {
    className: "pd-dest"
  }, /*#__PURE__*/React.createElement("span", null, "\u0413\u0440\u043E\u0437\u043D\u044B\u0439"), /*#__PURE__*/React.createElement("span", null, "\u041F\u044F\u0442\u0438\u0433\u043E\u0440\u0441\u043A"), /*#__PURE__*/React.createElement("span", null, "\u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430"), /*#__PURE__*/React.createElement("span", null, "\u041C\u0438\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0412\u043E\u0434\u044B")), /*#__PURE__*/React.createElement("div", {
    className: "pd-route-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rt"
  }, "\u041C\u0430\u0440\u0448\u0440\u0443\u0442: ", /*#__PURE__*/React.createElement("span", {
    className: "ar"
  }, "\u041A\u0438\u0442\u0430\u0439"), " \u2192 \u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u041A\u0430\u0432\u043A\u0430\u0437"), /*#__PURE__*/React.createElement("div", {
    className: "ct"
  }, "\u0413\u0440\u043E\u0437\u043D\u044B\u0439 \xB7 \u041F\u044F\u0442\u0438\u0433\u043E\u0440\u0441\u043A \xB7 \u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430 \xB7 \u041C\u0438\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0412\u043E\u0434\u044B"), /*#__PURE__*/React.createElement("div", {
    className: "pd-track"
  }, track.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "st" + (s.on ? " on" : "")
  }, i < track.length - 1 && /*#__PURE__*/React.createElement("div", {
    className: "ln"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dot"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.name
  })), /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, s.lab)))))), /*#__PURE__*/React.createElement("div", {
    className: "pd-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-hero-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-hero-route"
  }, "\u041A\u0438\u0442\u0430\u0439 ", /*#__PURE__*/React.createElement("span", {
    className: "ar"
  }, "\u2192"), " \u0420\u043E\u0441\u0441\u0438\u044F / \u0421\u041D\u0413 / \u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u041A\u0430\u0432\u043A\u0430\u0437"), /*#__PURE__*/React.createElement("h1", null, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438\u0437 \u041A\u0438\u0442\u0430\u044F", /*#__PURE__*/React.createElement("br", null), "\u043D\u0430 \u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u041A\u0430\u0432\u043A\u0430\u0437"), /*#__PURE__*/React.createElement("div", {
    className: "pd-divider"
  }), /*#__PURE__*/React.createElement("p", {
    className: "pd-hero-lead"
  }, "PanDao Logistics \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043D\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0435 \u0433\u0440\u0443\u0437\u043E\u0432 \u0438\u0437 \u043B\u044E\u0431\u043E\u0433\u043E \u0433\u043E\u0440\u043E\u0434\u0430 \u041A\u0438\u0442\u0430\u044F \u043D\u0430 \u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u041A\u0430\u0432\u043A\u0430\u0437. \u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: ", /*#__PURE__*/React.createElement("b", null, "\u0413\u0440\u043E\u0437\u043D\u044B\u0439, \u041F\u044F\u0442\u0438\u0433\u043E\u0440\u0441\u043A, \u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430, \u041C\u0438\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0412\u043E\u0434\u044B.")), /*#__PURE__*/React.createElement("p", {
    className: "pd-hero-lead",
    style: {
      marginTop: 16
    }
  }, "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 \u0440\u044B\u043D\u043A\u0430\u043C\u0438 \u0420\u043E\u0441\u0441\u0438\u0438 \u0438 \u0421\u041D\u0413, \u043D\u043E \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0433\u043B\u0443\u0431\u043E\u043A\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C\u0441\u044F \u043D\u0430 \u044D\u0442\u0438\u0445 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430\u0445."), /*#__PURE__*/React.createElement("div", {
    className: "pd-hero-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pd-btn pd-btn--primary"
  }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443 ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  })), /*#__PURE__*/React.createElement("button", {
    className: "pd-btn pd-btn--ghost"
  }, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438 ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pd-herostats"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "cell",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.ic
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, s.big), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, s.sub)))))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Results.jsx
try { (() => {
// Results section — premium dark stat panel + capability cards.
// Brand "control-room" treatment: dark panel with map/route graphics,
// animated count-up numbers, and numbered capability cards below.

function KgIconR() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 9.5C11 7.6 13.2 6 16 6s5 1.6 5 3.5c0 .9-.6 1.6-1.4 2.2 2.5 1 4.4 2.9 5 5.4l1.3 5.6c.5 2.2-1.1 4.3-3.3 4.3H9.4c-2.2 0-3.8-2.1-3.3-4.3l1.3-5.6c.6-2.5 2.5-4.4 5-5.4C11.6 11.1 11 10.4 11 9.5Z",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("text", {
    x: "16",
    y: "22.3",
    textAnchor: "middle",
    fontFamily: "Onest, sans-serif",
    fontWeight: "800",
    fontSize: "7.4",
    fill: "currentColor",
    letterSpacing: "-.3"
  }, "KG"));
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
    window.addEventListener('scroll', trigger, {
      passive: true
    });
    return () => window.removeEventListener('scroll', trigger);
  }, []);
  const stats = [{
    ic: 'users',
    num: '500',
    suffix: '+',
    label: 'довольных клиентов'
  }, {
    ic: 'container',
    num: '1 275 000',
    suffix: ' кг+',
    label: 'успешно доставленных грузов'
  }, {
    ic: 'shield-check',
    num: '600',
    suffix: ' кг+',
    label: 'потерянных грузов, за которые мы полностью возместили ущерб'
  }];
  const caps = [{
    idx: '01',
    ic: 'kg',
    t: 'От 100 кг',
    d: 'Работаем с грузами от 100 кг.'
  }, {
    idx: '02',
    ic: 'boxes',
    t: 'Сборные грузы',
    d: 'Объединяем грузы нескольких клиентов в один контейнер, чтобы Вы экономили.'
  }, {
    idx: '03',
    ic: 'calculator',
    t: 'От 5000 тонн',
    d: 'Рассчитываем по индивидуальным ценам до Вашего города.'
  }, {
    idx: '04',
    ic: 'container',
    t: 'Контейнерная перевозка',
    d: 'Наши логисты сформируют самый удобный для Вас маршрут по индивидуальным параметрам.',
    accent: 'Дешевле? Быстрее? Надёжнее? Сделаем!'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pd-section pd-rz"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-rz-panel",
    ref: panelRef
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-rz-bg-grid"
  }), /*#__PURE__*/React.createElement("svg", {
    className: "pd-rz-route",
    viewBox: "0 0 1100 260",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M40,210 C260,90 460,250 640,120 S960,40 1080,90",
    fill: "none",
    stroke: "#DE2931",
    strokeWidth: "1.6",
    strokeDasharray: "2 10",
    strokeLinecap: "round",
    opacity: "0.55"
  })), /*#__PURE__*/React.createElement("span", {
    className: "pd-rz-cross",
    style: {
      top: '22%',
      right: '14%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "pd-rz-ping",
    style: {
      top: '64%',
      right: '8%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "pd-rz-coord"
  }, "43.2389\xB0 N", /*#__PURE__*/React.createElement("br", null), "45.7560\xB0 E"), /*#__PURE__*/React.createElement("div", {
    className: "pd-rz-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-kicker"
  }, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B PanDao"), /*#__PURE__*/React.createElement("h2", null, "\u041B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0430 \u2014 \u044D\u0442\u043E \u043D\u0435 \u043F\u0440\u043E\xA0\xAB\u0432\u0441\u0451\xA0\u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\xBB.", /*#__PURE__*/React.createElement("br", null), "\u042D\u0442\u043E \u043F\u0440\u043E ", /*#__PURE__*/React.createElement("span", {
    className: "pd-rz-red"
  }, "\xAB\u043E\u0442\u0432\u0435\u0447\u0430\u0435\u043C\xA0\u0437\u0430\xA0\u043A\u0430\u0436\u0434\u044B\u0439\xBB"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "pd-rz-stats"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "pd-rz-stat",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-rz-node"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.ic
  })), /*#__PURE__*/React.createElement("div", {
    className: "pd-rz-num"
  }, s.num, /*#__PURE__*/React.createElement("span", {
    className: "u"
  }, s.suffix)), /*#__PURE__*/React.createElement("div", {
    className: "pd-rz-lab"
  }, s.label))))), /*#__PURE__*/React.createElement("div", {
    className: "pd-rz-caps"
  }, caps.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "pd-rz-cap",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-rz-idx"
  }, c.idx), /*#__PURE__*/React.createElement("span", {
    className: "pd-rz-chip"
  }, c.ic === 'kg' ? /*#__PURE__*/React.createElement(KgIconR, null) : /*#__PURE__*/React.createElement(Icon, {
    name: c.ic
  })), /*#__PURE__*/React.createElement("h3", null, c.t), /*#__PURE__*/React.createElement("p", null, c.d), c.accent && /*#__PURE__*/React.createElement("p", {
    className: "pd-rz-accent"
  }, c.accent))))));
}
Object.assign(window, {
  Results
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Results.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
// Services section: "Наши услуги" + 6 alternating service cards + route chip.
function Services() {
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  }, []);
  const serv = [{
    ic: 'key-round',
    t: 'Доставка под ключ',
    d: 'От приёмки груза в Китае до доставки на Северный Кавказ.',
    dark: false
  }, {
    ic: 'container',
    t: 'Контейнерные перевозки',
    d: 'Подбираем маршрут под задачу: дешевле, быстрее или надёжнее.',
    dark: true
  }, {
    ic: 'boxes',
    t: 'Сборные грузы',
    d: 'Объединяем грузы клиентов, чтобы снизить стоимость перевозки.',
    dark: false
  }, {
    ic: 'warehouse',
    t: 'Склад в Китае',
    d: 'Принимаем, проверяем, маркируем и готовим груз к отправке.',
    dark: true
  }, {
    ic: 'shopping-cart',
    t: 'Байерские услуги',
    d: 'Помогаем найти, проверить и выкупить товар в Китае.',
    dark: false
  }, {
    ic: 'users',
    t: 'Сопровождение в Китае',
    d: 'Встречаем, переводим, ведём переговоры и помогаем с фабриками.',
    dark: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pd-section pd-services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-svc-bg"
  }, /*#__PURE__*/React.createElement("img", {
    className: "pd-svc-port",
    src: "../../assets/hero-port.png",
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("svg", {
    className: "pd-svc-route",
    viewBox: "0 0 1000 360",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M250,150 C400,60 560,250 760,150",
    fill: "none",
    stroke: "#DE2931",
    strokeWidth: "2",
    strokeDasharray: "2 9",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pd-svc-cross"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pd-svc-ping"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pd-coord pd-svc-coord"
  }, "43.2389\xB0 N", /*#__PURE__*/React.createElement("br", null), "45.7560\xB0 E")), /*#__PURE__*/React.createElement("div", {
    className: "pd-wrap"
  }, /*#__PURE__*/React.createElement(SpecChip, null), /*#__PURE__*/React.createElement("div", {
    className: "pd-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-kicker"
  }, "\u0423\u0441\u043B\u0443\u0433\u0438 PanDao"), /*#__PURE__*/React.createElement("h2", null, "\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438"), /*#__PURE__*/React.createElement("p", null, "\u041C\u044B \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u043C \u0433\u0440\u0443\u0437 \u0434\u0430\u043B\u044C\u0448\u0435. \u041C\u044B \u0441\u0442\u0440\u043E\u0438\u043C \u043C\u0430\u0440\u0448\u0440\u0443\u0442, \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0435\u043C \u0441\u043A\u043B\u0430\u0434, \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443, \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0438 \u0434\u043E\u0432\u043E\u0434\u0438\u043C \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0443 \u0434\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430.")), /*#__PURE__*/React.createElement("div", {
    className: "pd-grid3"
  }, serv.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "pd-card pd-serv " + (s.dark ? "pd-card--dark" : "pd-card--light")
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.ic
  })), /*#__PURE__*/React.createElement("div", {
    className: "pd-serv-body"
  }, /*#__PURE__*/React.createElement("h3", null, s.t), /*#__PURE__*/React.createElement("span", {
    className: "pd-serv-line"
  }), /*#__PURE__*/React.createElement("p", null, s.d))))), /*#__PURE__*/React.createElement("div", {
    className: "pd-rchip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin"
  })), /*#__PURE__*/React.createElement("span", null, "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u044B: ", /*#__PURE__*/React.createElement("span", {
    className: "ar"
  }, "\u041A\u0438\u0442\u0430\u0439"), " ", /*#__PURE__*/React.createElement("span", {
    className: "ar"
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, " \u0413\u0440\u043E\u0437\u043D\u044B\u0439 / \u041F\u044F\u0442\u0438\u0433\u043E\u0440\u0441\u043A / \u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430 / \u041C\u0438\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0412\u043E\u0434\u044B")), /*#__PURE__*/React.createElement("span", {
    className: "pd-rchip-sep"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pd-rchip-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-days"
  })), /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0440\u0435\u0439\u0441\u044B \u0438 \u0433\u0438\u0431\u043A\u0438\u0435 \u0441\u0440\u043E\u043A\u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")))));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Warehouse.jsx
try { (() => {
// Warehouse & control section: copy + features + CTA, photo with stat strip, process timeline.
function Warehouse() {
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  }, []);
  const feats = [{
    ic: 'building-2',
    t: 'Собственный склад в Китае',
    d: 'Принимаем товар из любого города Китая'
  }, {
    ic: 'search-check',
    t: 'Проверка и фотоотчёт',
    d: 'Проверяем качество и соответствие заказа'
  }, {
    ic: 'package',
    t: 'Упаковка и маркировка',
    d: 'Надёжно упакуем и промаркируем груз'
  }, {
    ic: 'shield-check',
    t: 'Страхование и безопасность',
    d: 'Ваш груз застрахован и под нашей ответственностью'
  }, {
    ic: 'video',
    t: 'Видеоотчёт в рабочий чат',
    d: 'По получению груза на склад отправляем видеоотчёт'
  }, {
    ic: 'headset',
    t: 'Быстрая поддержка 24/7',
    d: 'Быстрые ответы от техподдержки в любое время'
  }];
  const whstats = [{
    ic: 'warehouse',
    big: '1000 м²',
    sub: 'рабочая площадь склада в Китае'
  }, {
    ic: 'cctv',
    big: '24/7',
    sub: 'видеонаблюдение и контроль'
  }, {
    ic: 'users',
    big: '100%',
    sub: 'проверка каждого груза'
  }, {
    ic: 'shield-check',
    big: '0',
    sub: 'потерянных грузов за 5 лет работы'
  }];
  const proc = [{
    img: '01',
    no: '01',
    tt: 'Приём груза',
    dd: 'Принимаем товар от поставщика из любого города Китая'
  }, {
    img: '02',
    no: '02',
    tt: 'Проверка',
    dd: 'Проверяем качество и соответствие вашего заказа'
  }, {
    img: '03',
    no: '03',
    tt: 'Упаковка и маркировка',
    dd: 'Надёжно упакуем и промаркируем каждую единицу'
  }, {
    img: '04',
    no: '04',
    tt: 'Хранение',
    dd: 'Бережное хранение до отправки без лишних рисков'
  }, {
    img: '05',
    no: '05',
    tt: 'Отправка',
    dd: 'Формируем маршрут и отправляем на Северный Кавказ'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pd-section pd-wh-section"
  }, /*#__PURE__*/React.createElement(MapBg, null), /*#__PURE__*/React.createElement("div", {
    className: "pd-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-wh-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "pd-kicker"
  }, "\u041D\u0430\u0448 \u0441\u043A\u043B\u0430\u0434 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontWeight: 800,
      fontSize: 'clamp(30px,3.6vw,48px)',
      lineHeight: 1.04,
      letterSpacing: '-.02em',
      margin: '18px 0 0'
    }
  }, "\u041F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C, \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u0438 \u0433\u043E\u0442\u043E\u0432\u0438\u043C \u0432\u0430\u0448 \u0433\u0440\u0443\u0437 \u0432 \u041A\u0438\u0442\u0430\u0435"), /*#__PURE__*/React.createElement("p", {
    className: "pd-hero-lead",
    style: {
      marginTop: 20
    }
  }, "\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0441\u043A\u043B\u0430\u0434 \u0432 \u041A\u0438\u0442\u0430\u0435 \u2014 \u044D\u0442\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430, \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0438 \u043F\u043E\u043B\u043D\u0430\u044F \u0433\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C \u0433\u0440\u0443\u0437\u0430 \u043A \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u043D\u0430 \u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u041A\u0430\u0432\u043A\u0430\u0437."), /*#__PURE__*/React.createElement("div", {
    className: "pd-feat"
  }, feats.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.ic
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, f.t), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, f.d))))), /*#__PURE__*/React.createElement("button", {
    className: "pd-btn pd-btn--primary"
  }, "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pd-wh-photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/warehouse.png",
    alt: "\u0421\u043A\u043B\u0430\u0434 PanDao \u0432 \u041A\u0438\u0442\u0430\u0435"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pd-wh-stats"
  }, whstats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "c",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.ic
  })), /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, s.big), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, s.sub)))))), /*#__PURE__*/React.createElement("div", {
    className: "pd-proc-wrap"
  }, /*#__PURE__*/React.createElement("h3", null, "\u0422\u0430\u043A \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435"), /*#__PURE__*/React.createElement("div", {
    className: "pd-proc"
  }, proc.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    className: "pd-proc-arrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  })), /*#__PURE__*/React.createElement("div", {
    className: "step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/proc-${p.img}.jpg`,
    alt: p.tt
  })), /*#__PURE__*/React.createElement("div", {
    className: "no"
  }, p.no), /*#__PURE__*/React.createElement("div", {
    className: "tt"
  }, p.tt), /*#__PURE__*/React.createElement("div", {
    className: "dd"
  }, p.dd))))))));
}
Object.assign(window, {
  Warehouse
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Warehouse.jsx", error: String((e && e.message) || e) }); }

})();
