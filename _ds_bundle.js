/* @ds-bundle: {"format":3,"namespace":"PanDaoDesignSystem_7d45b9","components":[],"sourceHashes":{"ui_kits/website/contactModal.jsx":"946243f5f501","ui_kits/website/contacts.jsx":"529cb60c2087","ui_kits/website/cookieBanner.jsx":"1deb4680557a","ui_kits/website/decor.jsx":"84b98d6e4a69","ui_kits/website/effects.js":"399b95f31efd","ui_kits/website/facts.jsx":"fd53e8b0a0d9","ui_kits/website/faq.jsx":"8e75060be3ad","ui_kits/website/footer.jsx":"82d5cd8cdf71","ui_kits/website/header.jsx":"314edd6198c2","ui_kits/website/hero.jsx":"a3ae0ba3ef4b","ui_kits/website/services.jsx":"a3cfe5302a84","ui_kits/website/siteChrome.jsx":"e2ec8aa555d9","ui_kits/website/warehouse.jsx":"bf7793a6da8e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PanDaoDesignSystem_7d45b9 = window.PanDaoDesignSystem_7d45b9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/contactModal.jsx
try { (() => {
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
    const onOpen = () => {
      setOpen(true);
      setSent(false);
      setTouched(false);
    };
    window.addEventListener('pd-open-form', onOpen);
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('pd-open-form', onOpen);
      window.removeEventListener('keydown', onKey);
    };
  }, []);
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  }, [open, sent]);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);
  if (!open) return null;
  const fmtPhone = raw => {
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
  const submit = e => {
    e.preventDefault();
    setTouched(true);
    if (valid) setSent(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pd-modal-overlay",
    onClick: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-modal",
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pd-modal-close",
    onClick: () => setOpen(false),
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  })), /*#__PURE__*/React.createElement("span", {
    className: "pd-modal-grid",
    "aria-hidden": "true"
  }), !sent ? /*#__PURE__*/React.createElement("div", {
    className: "pd-modal-in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-kicker"
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 PanDao"), /*#__PURE__*/React.createElement("h3", {
    className: "pd-modal-title"
  }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("p", {
    className: "pd-modal-lead"
  }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u2014 \u043B\u043E\u0433\u0438\u0441\u0442 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438, \u0443\u0442\u043E\u0447\u043D\u0438\u0442 \u0434\u0435\u0442\u0430\u043B\u0438 \u0433\u0440\u0443\u0437\u0430 \u0438 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u043C\u0430\u0440\u0448\u0440\u0443\u0442 \u0438\u0437 \u041A\u0438\u0442\u0430\u044F \u043D\u0430 \u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u041A\u0430\u0432\u043A\u0430\u0437."), /*#__PURE__*/React.createElement("form", {
    className: "pd-form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("label", {
    className: "pd-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-field-lab"
  }, "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "\u041A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F",
    className: touched && name.trim().length < 2 ? 'err' : ''
  })), /*#__PURE__*/React.createElement("label", {
    className: "pd-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-field-lab"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: phone,
    onChange: e => setPhone(fmtPhone(e.target.value)),
    placeholder: "+7 (___) ___-__-__",
    className: touched && phone.replace(/\D/g, '').length !== 11 ? 'err' : ''
  })), /*#__PURE__*/React.createElement("label", {
    className: "pd-check" + (touched && !agree ? ' err' : '')
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: agree,
    onChange: e => setAgree(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    className: "pd-check-box"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  })), /*#__PURE__*/React.createElement("span", {
    className: "pd-check-lab"
  }, "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 ", /*#__PURE__*/React.createElement("a", {
    href: "legal/privacy.html",
    target: "_blank",
    rel: "noopener"
  }, "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "pd-btn pd-btn--primary pd-form-submit" + (valid ? '' : ' is-off')
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  })), /*#__PURE__*/React.createElement("p", {
    className: "pd-form-note"
  }, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \xAB\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\xBB, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E 152-\u0424\u0417."))) : /*#__PURE__*/React.createElement("div", {
    className: "pd-modal-in pd-modal-done"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-done-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "pd-modal-title"
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043F\u0440\u0438\u043D\u044F\u0442\u0430"), /*#__PURE__*/React.createElement("p", {
    className: "pd-modal-lead"
  }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E, ", name.trim().split(' ')[0] || 'друг', "! \u041B\u043E\u0433\u0438\u0441\u0442 PanDao \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u0442 \u0432\u0430\u043C \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 ", phone, "."), /*#__PURE__*/React.createElement("button", {
    className: "pd-btn pd-btn--ghost",
    onClick: () => setOpen(false)
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))));
}
Object.assign(window, {
  ContactModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/contactModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/contacts.jsx
try { (() => {
// Brand SVG icons for messengers (native marks, single-color on dark).
function WhatsAppIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
  }));
}
function TelegramIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4Zm5.57 8.2-1.86 8.78c-.14.62-.51.77-1.03.48l-2.85-2.1-1.37 1.32c-.15.15-.28.28-.57.28l.2-2.9 5.27-4.76c.23-.2-.05-.32-.35-.12l-6.51 4.1-2.81-.88c-.61-.19-.62-.61.13-.9l10.98-4.23c.51-.19.96.12.79.86Z"
  }));
}
function Contacts() {
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  }, []);
  const items = [{
    ic: 'phone',
    lab: 'Телефон',
    val: '+7 (985) 071-01-01',
    href: 'tel:+79850710101',
    c: '#1F8A5B',
    bg: 'rgba(31,138,91,.12)'
  }, {
    ic: 'mail',
    lab: 'Почта',
    val: 'pandaologistics@gmail.com',
    href: 'mailto:pandaologistics@gmail.com',
    c: '#2A6FDB',
    bg: 'rgba(42,111,219,.12)'
  }, {
    ic: 'map-pin',
    lab: 'Адрес в Китае',
    val: '广东省佛山市里水镇胜利社区河朱沙上庄上进路6号厂房零一零一',
    href: null,
    c: '#DE2931',
    bg: 'rgba(222,41,49,.12)'
  }, {
    ic: 'clock',
    lab: 'Часы работы',
    val: 'Пн–Сб • 9:00 до 18:00 (МСК)',
    href: null,
    c: '#D97757',
    bg: 'rgba(217,119,87,.15)'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pd-section pd-contacts",
    id: "contacts"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-ct-grid",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("svg", {
    className: "pd-ct-route",
    viewBox: "0 0 1200 300",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M40,210 C300,80 520,250 760,140 S1080,60 1180,120",
    fill: "none",
    stroke: "#DE2931",
    strokeWidth: "1.5",
    strokeDasharray: "2 10",
    strokeLinecap: "round",
    opacity: "0.5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pd-wrap pd-ct-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-ct-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-kicker"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("h2", null, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0435\u043C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443", /*#__PURE__*/React.createElement("br", null), "\u0432\u0430\u0448\u0435\u0433\u043E \u0433\u0440\u0443\u0437\u0430"), /*#__PURE__*/React.createElement("span", {
    className: "pd-divider"
  }), /*#__PURE__*/React.createElement("p", {
    className: "pd-ct-lead"
  }, "\u041D\u0430\u0448\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0430 \u0441\u0432\u044F\u0437\u0438 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0430\u0445 \u0438 \u0441\u043E\u0446\u0441\u0435\u0442\u044F\u0445."), /*#__PURE__*/React.createElement("div", {
    className: "pd-ct-grid-items"
  }, items.map((it, i) => {
    const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "ic",
      style: {
        color: it.c,
        background: it.bg
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": it.ic
    })), /*#__PURE__*/React.createElement("span", {
      className: "pd-ct-txt"
    }, /*#__PURE__*/React.createElement("span", {
      className: "l"
    }, it.lab), /*#__PURE__*/React.createElement("span", {
      className: "v"
    }, it.val)));
    return it.href ? /*#__PURE__*/React.createElement("a", {
      className: "pd-ct-item",
      key: i,
      href: it.href
    }, inner) : /*#__PURE__*/React.createElement("div", {
      className: "pd-ct-item",
      key: i
    }, inner);
  })), /*#__PURE__*/React.createElement("div", {
    className: "pd-ct-msgs"
  }, /*#__PURE__*/React.createElement("a", {
    className: "pd-msg pd-msg--wa",
    href: "https://wa.me/79280000000",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(WhatsAppIcon, null), " WhatsApp"), /*#__PURE__*/React.createElement("a", {
    className: "pd-msg pd-msg--tg",
    href: "https://t.me/pandao",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(TelegramIcon, null), " Telegram"))), /*#__PURE__*/React.createElement("div", {
    className: "pd-ct-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-ct-card-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-ct-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "\u041D\u0430 \u0441\u0432\u044F\u0437\u0438 \u0441\u0435\u0439\u0447\u0430\u0441"), /*#__PURE__*/React.createElement("h3", null, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443")), /*#__PURE__*/React.createElement("button", {
    className: "pd-btn pd-btn--primary pd-ct-cta",
    onClick: () => window.dispatchEvent(new CustomEvent('pd-open-form'))
  }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443 ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pd-ct-route-mini"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ar"
  }, "\u041A\u0438\u0442\u0430\u0439"), /*#__PURE__*/React.createElement("span", {
    className: "line"
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plane"
  }), /*#__PURE__*/React.createElement("span", {
    className: "line"
  }), /*#__PURE__*/React.createElement("span", null, "\u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u041A\u0430\u0432\u043A\u0430\u0437")), /*#__PURE__*/React.createElement("div", {
    className: "pd-ct-cities"
  }, "\u0413\u0440\u043E\u0437\u043D\u044B\u0439 \xB7 \u041F\u044F\u0442\u0438\u0433\u043E\u0440\u0441\u043A \xB7 \u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430 \xB7 \u041C\u0438\u043D. \u0432\u043E\u0434\u044B \xB7 \u041C\u043E\u0441\u043A\u0432\u0430"))));
}
Object.assign(window, {
  Contacts
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/contacts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/cookieBanner.jsx
try { (() => {
// Cookie consent banner — shown on first visit (per 152-ФЗ / Roskomnadzor guidance).
// Stores acceptance in localStorage; links to the cookie policy page.
function CookieBanner() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    let agreed = false;
    try {
      agreed = localStorage.getItem('pd-cookie-consent') === '1';
    } catch (e) {}
    if (!agreed) {
      const t = setTimeout(() => setShow(true), 700);
      return () => clearTimeout(t);
    }
  }, []);
  React.useEffect(() => {
    if (show) window.lucide && lucide.createIcons();
  }, [show]);
  const accept = () => {
    try {
      localStorage.setItem('pd-cookie-consent', '1');
    } catch (e) {}
    setShow(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pd-cookie" + (show ? " in" : ""),
    role: "dialog",
    "aria-label": "\u0424\u0430\u0439\u043B\u044B cookie"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-cookie-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cookie"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pd-cookie-text"
  }, /*#__PURE__*/React.createElement("span", null, "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u0430\u0439\u0442\u043E\u043C, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 cookie \u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 ", /*#__PURE__*/React.createElement("a", {
    href: "legal/cookies.html",
    target: "_blank",
    rel: "noopener"
  }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F cookie"), " \u0438 ", /*#__PURE__*/React.createElement("a", {
    href: "legal/privacy.html",
    target: "_blank",
    rel: "noopener"
  }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "pd-cookie-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "pd-cookie-more",
    href: "legal/cookies.html",
    target: "_blank",
    rel: "noopener"
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"), /*#__PURE__*/React.createElement("button", {
    className: "pd-btn pd-btn--primary pd-btn--sm",
    onClick: accept
  }, "\u041F\u0440\u0438\u043D\u044F\u0442\u044C")));
}
Object.assign(window, {
  CookieBanner
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/cookieBanner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/decor.jsx
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
  }, children);
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/decor.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/effects.js
try { (() => {
/* PanDao site effects — count-up + micro-parallax. Plain JS, no deps.
   Robust: respects prefers-reduced-motion and falls back to final values. */
(function () {
  var reduce = false;
  try {
    reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) {}
  function fmtRu(n) {
    return Math.round(n).toLocaleString('ru-RU').replace(/\u00A0/g, ' ');
  }
  function runCount(el) {
    if (el.dataset.cuDone) return;
    el.dataset.cuDone = '1';
    var target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;
    var dur = parseInt(el.getAttribute('data-dur') || '1500', 10);
    var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
    var start = null;
    function fmt(v) {
      return dec ? v.toFixed(dec).replace('.', ',') : fmtRu(v);
    }
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * e);
      if (p < 1) requestAnimationFrame(step);else el.textContent = fmt(target);
    }
    requestAnimationFrame(step);
  }
  function initCount() {
    var els = [].slice.call(document.querySelectorAll('[data-count]'));
    if (!els.length) return;
    if (reduce || !('IntersectionObserver' in window)) {
      return;
    } /* fallback: keep final text */
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (en.isIntersecting) {
          runCount(en.target);
          io.unobserve(en.target);
        }
      });
    }, {
      threshold: 0.45
    });
    els.forEach(function (el) {
      if (!el.dataset.cuDone) io.observe(el);
    });
  }
  var parallaxInited = false;
  function initParallax() {
    if (reduce || parallaxInited) return;
    var els = [].slice.call(document.querySelectorAll('[data-parallax]'));
    if (!els.length) return;
    parallaxInited = true;
    var ticking = false;
    function update() {
      var vh = window.innerHeight || 800;
      els.forEach(function (el) {
        var r = el.getBoundingClientRect();
        var center = r.top + r.height / 2;
        var rel = (center - vh / 2) / vh; /* ~ -0.6 .. 0.6 */
        var sp = parseFloat(el.getAttribute('data-parallax')) || 0.12;
        var y = Math.max(-18, Math.min(18, -rel * sp * 120));
        el.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,0) scale(1.1)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, {
      passive: true
    });
    window.addEventListener('resize', update, {
      passive: true
    });
    update();
  }
  function init() {
    initCount();
    initParallax();
  }
  if (document.readyState !== 'loading') init();else document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('load', init);
  /* React mounts async — retry a couple times to catch late nodes */
  setTimeout(init, 700);
  setTimeout(init, 1500);
  window.pdEffectsInit = init;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/effects.js", error: String((e && e.message) || e) }); }

// ui_kits/website/facts.jsx
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
  const fmt = n => n.toLocaleString('ru-RU').replace(/\u00A0/g, ' ');
  const ledger = [{
    ic: 'kg',
    count: 100,
    unit: ' кг+',
    lab: 'минимальный вес груза для работы'
  }, {
    ic: 'weight',
    count: 5,
    unit: ' тонн+',
    lab: 'индивидуальные условия для крупных партий'
  }];
  const losses = [{
    ic: 'shield-check',
    count: 600,
    unit: ' кг',
    lab: 'утерянного груза полностью возместили клиентам'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pd-section pd-facts3",
    id: "o-kompanii",
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
    src: "../../assets/hero-port.webp",
    alt: "\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u0440\u0442 PanDao",
    width: "1500",
    height: "844",
    loading: "lazy",
    decoding: "async",
    "data-parallax": "0.14"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-flag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "container"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cu"
  }, "1,275"), /*#__PURE__*/React.createElement("span", {
    className: "u"
  }, "+ \u0442\u043E\u043D\u043D")), /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, "\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432")))), /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-img-sub"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/warehouse.webp",
    alt: "\u0421\u043A\u043B\u0430\u0434 PanDao \u0432 \u041A\u0438\u0442\u0430\u0435",
    width: "1400",
    height: "957",
    loading: "lazy",
    decoding: "async",
    "data-parallax": "0.2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pd-fc3-subchip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cu"
  }, "1200"), "+ \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432"))), /*#__PURE__*/React.createElement("span", {
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
  }, /*#__PURE__*/React.createElement("span", {
    className: "cu",
    "data-count": r.count,
    "data-dur": "1500"
  }, fmt(r.count)), r.unit), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("span", {
    className: "cu",
    "data-count": r.count,
    "data-dur": "1500"
  }, fmt(r.count)), r.unit), /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, r.lab))))))));
}
Object.assign(window, {
  Facts
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/facts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/faq.jsx
try { (() => {
// FAQ — premium accordion. One open at a time; smooth height animation via max-height.
function Faq() {
  const [open, setOpen] = React.useState(0);
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  }, [open]);
  const items = [{
    q: 'За какой срок доставите груз из Китая на Северный Кавказ?',
    a: 'Сроки зависят от маршрута и типа перевозки. В среднем сборные грузы идут 18–30 дней, контейнерные — от 25 дней. Точный срок логист называет при расчёте, учитывая ваш город и характер груза.'
  }, {
    q: 'С каким минимальным весом вы работаете?',
    a: 'Работаем с грузами от 100 кг. Для небольших партий выгодны сборные отправки — объединяем грузы нескольких клиентов в один контейнер, чтобы снизить стоимость.'
  }, {
    q: 'Как происходит оплата и расчёт стоимости?',
    a: 'Стоимость рассчитывается индивидуально по весу, объёму, типу груза и городу назначения. Мы даём честный расчёт до отправки — без скрытых платежей. Для крупных партий от 5 тонн действуют индивидуальные цены.'
  }, {
    q: 'Что будет, если груз повредят или потеряют?',
    a: 'Каждый груз застрахован и находится под нашей ответственностью. Если что-то пойдёт не по плану — мы возмещаем ущерб за свой счёт. Это наша принципиальная позиция: отвечаем за каждый груз.'
  }, {
    q: 'Можно ли отследить груз и склад?',
    a: 'Да. По приёмке груза на склад в Китае мы отправляем фото- и видеоотчёт в рабочий чат. На сайте доступна прямая трансляция со склада, а статус груза вы видите на каждом этапе маршрута.'
  }, {
    q: 'Помогаете ли с выкупом товара в Китае?',
    a: 'Да, оказываем байерские услуги: находим, проверяем и выкупаем товар, ведём переговоры с фабриками и сопровождаем сделку. Вам не нужно лететь в Китай — мы закрываем весь цикл.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pd-section pd-faq",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-wrap pd-faq-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-faq-aside"
  }, /*#__PURE__*/React.createElement("h2", null, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B"), /*#__PURE__*/React.createElement("span", {
    className: "pd-divider"
  }), /*#__PURE__*/React.createElement("p", null, "\u041D\u0443\u0436\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438? \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B PanDao \u043E\u0442\u0432\u0435\u0442\u044F\u0442 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0438 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u044E\u0442 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443 \u043F\u043E\u0434 \u0432\u0430\u0448 \u0433\u0440\u0443\u0437."), /*#__PURE__*/React.createElement("button", {
    className: "pd-btn pd-btn--primary",
    onClick: () => window.dispatchEvent(new CustomEvent('pd-open-form'))
  }, "\u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441 ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pd-faq-list"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "pd-faq-item" + (open === i ? " open" : ""),
    key: i
  }, /*#__PURE__*/React.createElement("button", {
    className: "pd-faq-q",
    onClick: () => setOpen(open === i ? -1 : i),
    "aria-expanded": open === i
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-faq-qnum"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "pd-faq-qtext"
  }, it.q), /*#__PURE__*/React.createElement("span", {
    className: "pd-faq-qchev"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pd-faq-a"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-faq-a-in"
  }, /*#__PURE__*/React.createElement("p", null, it.a))))))));
}
Object.assign(window, {
  Faq
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/faq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/footer.jsx
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
    src: "../../assets/pandao-logo-dark.svg",
    alt: "PanDao Logistics",
    width: "388",
    height: "131"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--pd-on-dark-mut)',
      fontSize: 15,
      lineHeight: 1.5,
      marginTop: 18
    }
  }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0433\u0440\u0443\u0437\u043E\u0432 \u0438\u0437 \u043B\u044E\u0431\u043E\u0433\u043E \u0433\u043E\u0440\u043E\u0434\u0430 \u041A\u0438\u0442\u0430\u044F \u0432 \u0420\u043E\u0441\u0441\u0438\u044E \u0438 \u0421\u041D\u0413.")), /*#__PURE__*/React.createElement("div", {
    className: "cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("a", {
    href: "#uslugi"
  }, "\u0423\u0441\u043B\u0443\u0433\u0438"), /*#__PURE__*/React.createElement("a", {
    href: "#marshruty"
  }, "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "#o-kompanii"
  }, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"), /*#__PURE__*/React.createElement("a", {
    href: "#contacts"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u0413\u0440\u043E\u0437\u043D\u044B\u0439"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u041F\u044F\u0442\u0438\u0433\u043E\u0440\u0441\u043A"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u041C\u0438\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0412\u043E\u0434\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u041C\u043E\u0441\u043A\u0432\u0430")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "legal/privacy.html"
  }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"), /*#__PURE__*/React.createElement("a", {
    href: "legal/consent.html"
  }, "\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u041F\u0414\u043D"), /*#__PURE__*/React.createElement("a", {
    href: "legal/cookies.html"
  }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 cookie"), /*#__PURE__*/React.createElement("a", {
    href: "legal/terms.html"
  }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435")))), /*#__PURE__*/React.createElement("div", {
    className: "bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 PanDao Logistics Company"), /*#__PURE__*/React.createElement("span", null, "\u041A\u0438\u0442\u0430\u0439 \u2192 \u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u041A\u0430\u0432\u043A\u0430\u0437"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/header.jsx
try { (() => {
// Site header: logo, desktop nav, CTA, mobile hamburger + slide-in menu.
function Header() {
  const [open, setOpen] = React.useState(false);
  const links = [{
    l: 'Услуги',
    h: '#uslugi'
  }, {
    l: 'Маршруты',
    h: '#marshruty'
  }, {
    l: 'О компании',
    h: '#o-kompanii'
  }, {
    l: 'Контакты',
    h: '#contacts'
  }];
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  }, [open]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "pd-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-header-in"
  }, /*#__PURE__*/React.createElement("img", {
    className: "pd-logo",
    src: "../../assets/pandao-logo.svg",
    alt: "PanDao Logistics",
    width: "388",
    height: "131"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "pd-nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.l,
    href: l.h
  }, l.l))), /*#__PURE__*/React.createElement("button", {
    className: "pd-btn pd-btn--primary pd-btn--sm",
    onClick: () => window.dispatchEvent(new CustomEvent('pd-open-form'))
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
    src: "../../assets/pandao-logo.svg",
    alt: "PanDao"
  }), /*#__PURE__*/React.createElement("button", {
    className: "pd-burger",
    onClick: () => setOpen(false),
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.l,
    href: l.h,
    onClick: () => setOpen(false)
  }, l.l)), /*#__PURE__*/React.createElement("button", {
    className: "pd-btn pd-btn--primary",
    onClick: () => {
      setOpen(false);
      window.dispatchEvent(new CustomEvent('pd-open-form'));
    }
  }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443 ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  }))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/hero.jsx
try { (() => {
// Hero: eyebrow route, headline, lead, CTAs, port photo with floating cards, stat row.
function Hero() {
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  }, []);
  const fmt = n => n.toLocaleString('ru-RU').replace(/\u00A0/g, ' ');
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
    text: '1200+',
    sub: 'клиентов доверили нам свои грузы'
  }, {
    ic: 'container',
    text: '1,275+ тонн',
    sub: 'успешно доставлено клиентам'
  }, {
    ic: 'warehouse',
    text: 'Склад в Китае',
    sub: 'принимаем, проверяем, маркируем'
  }, {
    ic: 'weight',
    text: 'От 100 кг',
    sub: 'Работаем со средним и крупным оптом'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pd-hero pd-section",
    style: {
      paddingTop: 0,
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0433\u0440\u0443\u0437\u044B \u0438\u0437 \u043B\u044E\u0431\u043E\u0433\u043E \u0433\u043E\u0440\u043E\u0434\u0430 \u041A\u0438\u0442\u0430\u044F \u043F\u0440\u044F\u043C\u043E \u0432 \u0420\u043E\u0441\u0441\u0438\u044E \u0438 \u0421\u041D\u0413."), /*#__PURE__*/React.createElement("p", {
    className: "pd-hero-lead pd-hero-mdest",
    style: {
      marginTop: 16
    }
  }, "\u0413\u043B\u0430\u0432\u043D\u044B\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: ", /*#__PURE__*/React.createElement("b", null, "\u0413\u0440\u043E\u0437\u043D\u044B\u0439, \u041F\u044F\u0442\u0438\u0433\u043E\u0440\u0441\u043A, \u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430, \u041C\u0438\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0412\u043E\u0434\u044B, \u041C\u043E\u0441\u043A\u0432\u0430.")), /*#__PURE__*/React.createElement("p", {
    className: "pd-hero-lead pd-hero-dests",
    style: {
      marginTop: 16
    }
  }, "\u0411\u0435\u0440\u0451\u043C \u043D\u0430 \u0441\u0435\u0431\u044F \u0432\u0435\u0441\u044C \u043F\u0443\u0442\u044C: \u0441\u043A\u043B\u0430\u0434 \u0432 \u041A\u0438\u0442\u0430\u0435, \u0432\u044B\u043A\u0443\u043F, \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B, \u0442\u0430\u043C\u043E\u0436\u043D\u044E \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443. \u0412\u044B \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u0442\u043E\u0432\u0430\u0440."), /*#__PURE__*/React.createElement("div", {
    className: "pd-hero-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pd-btn pd-btn--primary",
    onClick: () => window.dispatchEvent(new CustomEvent('pd-open-form'))
  }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443 ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    className: "pd-btn pd-btn--ghost",
    href: "#uslugi"
  }, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438 ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pd-hero-mapdecor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "pd-rtmap",
    viewBox: "0 0 160 200",
    fill: "none",
    preserveAspectRatio: "xMidYMid meet"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 16 C58 8 96 52 110 102 C118 130 128 150 152 184",
    stroke: "#DE2931",
    strokeWidth: "1.4",
    strokeDasharray: "2.5 6",
    opacity: ".5"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(110 102)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "13",
    fill: "none",
    stroke: "#DE2931",
    strokeWidth: "1.1",
    opacity: ".45"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "6",
    fill: "none",
    stroke: "#DE2931",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "2.1",
    fill: "#DE2931"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "-19",
    y1: "0",
    x2: "-15",
    y2: "0",
    stroke: "#DE2931",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "0",
    x2: "19",
    y2: "0",
    stroke: "#DE2931",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "-19",
    x2: "0",
    y2: "-15",
    stroke: "#DE2931",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "15",
    x2: "0",
    y2: "19",
    stroke: "#DE2931",
    strokeWidth: "1.3"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pd-dest pd-dest--m"
  }, /*#__PURE__*/React.createElement("span", null, "\u0413\u0440\u043E\u0437\u043D\u044B\u0439"), /*#__PURE__*/React.createElement("span", null, "\u041F\u044F\u0442\u0438\u0433\u043E\u0440\u0441\u043A"), /*#__PURE__*/React.createElement("span", null, "\u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430"), /*#__PURE__*/React.createElement("span", null, "\u041C\u0438\u043D. \u0432\u043E\u0434\u044B"), /*#__PURE__*/React.createElement("span", null, "\u041C\u043E\u0441\u043A\u0432\u0430"))))), /*#__PURE__*/React.createElement("div", {
    className: "pd-hero-photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero-port.webp",
    alt: "\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u0440\u0442 PanDao",
    width: "1500",
    height: "844",
    decoding: "async",
    fetchpriority: "high"
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
  }, /*#__PURE__*/React.createElement("span", null, "\u0413\u0440\u043E\u0437\u043D\u044B\u0439"), /*#__PURE__*/React.createElement("span", null, "\u041F\u044F\u0442\u0438\u0433\u043E\u0440\u0441\u043A"), /*#__PURE__*/React.createElement("span", null, "\u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430"), /*#__PURE__*/React.createElement("span", null, "\u041C\u0438\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0412\u043E\u0434\u044B"), /*#__PURE__*/React.createElement("span", null, "\u041C\u043E\u0441\u043A\u0432\u0430")), /*#__PURE__*/React.createElement("div", {
    className: "pd-route-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rt"
  }, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043C\u0430\u0440\u0448\u0440\u0443\u0442: ", /*#__PURE__*/React.createElement("span", {
    className: "ar"
  }, "\u041A\u0438\u0442\u0430\u0439"), " \u2192 \u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u041A\u0430\u0432\u043A\u0430\u0437"), /*#__PURE__*/React.createElement("div", {
    className: "ct"
  }, "\u0413\u0440\u043E\u0437\u043D\u044B\u0439 \xB7 \u041F\u044F\u0442\u0438\u0433\u043E\u0440\u0441\u043A \xB7 \u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430 \xB7 \u041C\u0438\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0412\u043E\u0434\u044B \xB7 \u041C\u043E\u0441\u043A\u0432\u0430"), /*#__PURE__*/React.createElement("div", {
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
  }, s.text ? s.text : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "cu",
    "data-count": s.count,
    "data-dur": "1800"
  }, fmt(s.count)), s.suffix)), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, s.sub)))))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/services.jsx
try { (() => {
// Services section: "Наши услуги" + 6 alternating service cards + route chip.
function Services() {
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  }, []);
  const serv = [{
    em: '🚢',
    anim: 'a-float',
    t: 'Логистика',
    d: 'Контейнерные перевозки, сборные грузы и полное оформление документации — берём весь маршрут под контроль',
    dark: false
  }, {
    em: '🛒',
    anim: 'a-wiggle',
    t: 'Байерские услуги',
    d: 'Найдём, проверим и выкупим любой товар: от одежды и аксессуаров до стройматериалов и автомобилей',
    dark: true
  }, {
    em: '⚙️',
    anim: 'a-pulse',
    t: 'Бизнес-сопровождение «под ключ»',
    d: 'Наладим производство полного цикла: работа напрямую с заводами, СТМ, упаковка и сертификация товара',
    dark: false
  }, {
    em: '✈️',
    anim: 'a-swing',
    t: 'Бизнес-туры',
    d: 'Индивидуальные туры по заводам и рынкам Китая для личного знакомства. Встретим, переведём и всё покажем',
    dark: true
  }, {
    em: '💱',
    anim: 'a-pulse',
    t: 'Обмен валюты',
    d: 'Работаем с юанями, долларами и криптовалютой — удобный обмен и расчёты под задачи вашего бизнеса',
    dark: false
  }, {
    em: '🤝',
    anim: 'a-pulse',
    t: 'Сопровождение в Китае',
    d: 'Встретим, переведём, поможем на переговорах и на производстве. Ваш человек на месте, когда нужно',
    dark: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pd-section pd-services",
    id: "uslugi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-svc-bg"
  }, /*#__PURE__*/React.createElement("img", {
    className: "pd-svc-port",
    src: "../../assets/hero-port.webp",
    alt: "",
    "aria-hidden": "true",
    loading: "lazy",
    decoding: "async",
    "data-parallax": "0.08"
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
    className: "pd-svc-ping"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pd-wrap"
  }, /*#__PURE__*/React.createElement(SpecChip, null), /*#__PURE__*/React.createElement("div", {
    className: "pd-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-kicker"
  }, "\u0423\u0441\u043B\u0443\u0433\u0438 PanDao"), /*#__PURE__*/React.createElement("h2", null, "\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438")), /*#__PURE__*/React.createElement("div", {
    className: "pd-grid3"
  }, serv.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "pd-card pd-serv " + (s.dark ? "pd-card--dark" : "pd-card--light")
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-emoji " + s.anim
  }, s.em)), /*#__PURE__*/React.createElement("div", {
    className: "pd-serv-body"
  }, /*#__PURE__*/React.createElement("h3", null, s.t), /*#__PURE__*/React.createElement("span", {
    className: "pd-serv-line"
  }), /*#__PURE__*/React.createElement("p", null, s.d)))))));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/siteChrome.jsx
try { (() => {
// Site chrome: route-style scroll progress bar (top) + mobile sticky CTA
// with native WhatsApp / Telegram marks.
function ScrollProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    let ticking = false;
    const upd = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(upd);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    upd();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "pd-progress",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-progress-track"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pd-progress-fill",
    style: {
      width: (p * 100).toFixed(2) + '%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-progress-plane"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "truck"
  }))));
}
function WAIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
  }));
}
function TGIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
  }));
}
function StickyCTA() {
  React.useEffect(() => {
    const tick = () => window.lucide && lucide.createIcons();
    tick();
    const id = setTimeout(tick, 600);
    return () => clearTimeout(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "pd-sticky-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pd-sticky-calc",
    onClick: () => window.dispatchEvent(new CustomEvent('pd-open-form'))
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "calculator"
  }), " \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C"), /*#__PURE__*/React.createElement("a", {
    className: "pd-sticky-msg pd-sticky-wa",
    href: "https://wa.me/79280000000",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "WhatsApp"
  }, /*#__PURE__*/React.createElement(WAIcon, null)), /*#__PURE__*/React.createElement("a", {
    className: "pd-sticky-msg pd-sticky-tg",
    href: "https://t.me/pandao",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Telegram"
  }, /*#__PURE__*/React.createElement(TGIcon, null)));
}
Object.assign(window, {
  ScrollProgress,
  StickyCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/siteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/warehouse.jsx
try { (() => {
// Warehouse & control section: copy + features + CTA, photo with stat strip, process timeline.
function Warehouse() {
  const [playing, setPlaying] = React.useState(false);
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  }, [playing]);
  const feats = [{
    em: '🏭',
    anim: 'a-float',
    t: 'Собственный склад в Китае',
    d: 'Принимаем товар из любого города Китая'
  }, {
    em: '🔍',
    anim: 'a-swing',
    t: 'Проверка и фотоотчёт',
    d: 'Проверяем качество и соответствие заказа'
  }, {
    em: '🛡️',
    anim: 'a-pulse',
    t: 'Страхование и безопасность',
    d: 'Ваш груз застрахован и под нашей ответственностью'
  }, {
    em: '🎥',
    anim: 'a-bounce',
    t: 'Видеоотчёт в рабочий чат',
    d: 'По получению груза на склад отправляем видеоотчёт'
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
    ic: 'package-check',
    no: '1',
    tt: 'Приём груза',
    dd: 'Принимаем товар от поставщика из любого города Китая',
    img: '../../assets/warehouse.webp'
  }, {
    ic: 'search-check',
    no: '2',
    tt: 'Проверка',
    dd: 'Проверяем качество и соответствие вашего заказа',
    img: 'https://plus.unsplash.com/premium_photo-1661933130869-eba2d7e28332?fm=jpg&q=80&w=900&auto=format&fit=crop'
  }, {
    ic: 'package',
    no: '3',
    tt: 'Упаковка и маркировка',
    dd: 'Надёжно упакуем и промаркируем каждую единицу',
    img: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=900&auto=format&fit=crop'
  }, {
    ic: 'warehouse',
    no: '4',
    tt: 'Хранение',
    dd: 'Бережное хранение до отправки без лишних рисков',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=900&auto=format&fit=crop'
  }, {
    ic: 'truck',
    no: '5',
    tt: 'Отправка',
    dd: 'Формируем маршрут и отправляем на Северный Кавказ',
    img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=900&auto=format&fit=crop'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pd-section pd-wh-section",
    id: "marshruty"
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
  }, "\u041F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C \u0442\u043E\u0432\u0430\u0440 \u043E\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430, \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C, \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u0443\u0435\u043C \u0438 \u0433\u043E\u0442\u043E\u0432\u0438\u043C \u043A \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435."), /*#__PURE__*/React.createElement("div", {
    className: "pd-feat"
  }, feats.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-emoji " + f.anim
  }, f.em)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, f.t), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, f.d))))), /*#__PURE__*/React.createElement("button", {
    className: "pd-btn pd-btn--primary",
    onClick: () => window.dispatchEvent(new CustomEvent('pd-open-form'))
  }, "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pd-wh-photo pd-wh-live"
  }, !playing ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "pd-live-frame",
    onClick: () => setPlaying(true),
    "aria-label": "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u044F\u043C\u0443\u044E \u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u044E"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/warehouse.webp",
    alt: "\u041F\u0440\u044F\u043C\u0430\u044F \u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u044F \u0441\u043E \u0441\u043A\u043B\u0430\u0434\u0430 PanDao",
    width: "1400",
    height: "957",
    loading: "lazy",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pd-live-scrim"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pd-live-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "\u041F\u0440\u044F\u043C\u0430\u044F \u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u044F \u0441\u043E \u0441\u043A\u043B\u0430\u0434\u0430 PanDao"), /*#__PURE__*/React.createElement("span", {
    className: "pd-live-play"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play"
  }))) : /*#__PURE__*/React.createElement("iframe", {
    className: "pd-live-iframe",
    src: "https://www.youtube.com/embed/LJgXwC-AKu8?autoplay=1&rel=0&modestbranding=1",
    title: "\u041F\u0440\u044F\u043C\u0430\u044F \u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u044F \u0441\u043E \u0441\u043A\u043B\u0430\u0434\u0430 PanDao",
    allow: "autoplay; encrypted-media; picture-in-picture; fullscreen",
    allowFullScreen: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "pd-wh-stats"
  }, whstats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "c",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-wh-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.ic
  })), /*#__PURE__*/React.createElement("span", {
    className: "big"
  }, s.big)), /*#__PURE__*/React.createElement("div", {
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
    className: "ph",
    style: {
      '--ph-img': `url(${p.img})`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-proc-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.ic
  })), /*#__PURE__*/React.createElement("span", {
    className: "pd-proc-wm"
  }, p.no)), /*#__PURE__*/React.createElement("div", {
    className: "ttl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "no"
  }, p.no), /*#__PURE__*/React.createElement("span", {
    className: "tt"
  }, p.tt)), /*#__PURE__*/React.createElement("div", {
    className: "dd"
  }, p.dd))))))));
}
Object.assign(window, {
  Warehouse
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/warehouse.jsx", error: String((e && e.message) || e) }); }

})();
