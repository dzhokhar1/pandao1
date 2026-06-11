# PanDao Logistics — Design System

> Brand & UI system for **PanDao Logistics Company** — a cargo / freight-forwarding
> company specialising in delivery **from China to the North Caucasus** (Russia / CIS).
> Key destinations: Грозный, Пятигорск, Махачкала, Минеральные Воды.

This system reconstructs the PanDao single-page marketing site (Russian-language)
from the supplied mobile + desktop screenshots and the brand logo.

---

## Sources

| Source | Location | Status |
|--------|----------|--------|
| Brand logo (PanDao · Logistics Company) | `uploads/WhatsApp Image 2026-05-14 at 14.12.07.jpeg` → extracted to `assets/pandao-logo.png` | ✅ used |
| Landing page screenshots (mobile + desktop) | `uploads/WhatsApp Image 2026-05-28 …` → copied to `refs/` | ✅ used |
| GitHub repo `dzhokhar1/pandao` | https://github.com/dzhokhar1/pandao | ⚠️ **empty** (no commits) |
| Local codebase `pandao/` | mounted folder | ⚠️ contains only `.DS_Store` |

> **Note for future iterations:** Both code sources were empty at build time, so this
> system was reconstructed from screenshots per the user's explicit request. If the
> repo gets populated, re-import it (`github_import_files`) and lift exact tokens,
> component markup and the real headline font — screenshots are lossier than code.

---

## What's in here (index)

| File / folder | What it is |
|---|---|
| `README.md` | This file — context, content & visual foundations, iconography. |
| `colors_and_type.css` | CSS variables: colors, radii, shadows, spacing, semantic type classes. |
| `SKILL.md` | Agent-Skill manifest (works in Claude Code). |
| `assets/` | Logo (transparent PNG) + reference imagery. |
| `refs/` | Original screenshots (clean filenames) used as visual reference. |
| `preview/` | Design-system cards (colors, type, components) shown in the DS tab. |
| `ui_kits/website/` | High-fidelity recreation of the PanDao landing page + JSX components. |

---

## The product

PanDao runs **one long marketing landing page** (no app, no separate sites observed).
Major sections, top → bottom:

1. **Header** — logo left; nav (Услуги · Маршруты · О компании · Контакты) + red
   "Рассчитать доставку" CTA right. On mobile collapses to a hamburger.
2. **Hero** — eyebrow `КИТАЙ → РОССИЯ / СНГ / СЕВЕРНЫЙ КАВКАЗ`, huge headline
   "Доставка из Китая на Северный Кавказ", lead paragraph, primary + secondary CTA,
   and a large photo of a container port with two floating cards (a "Груз принят на
   складе" progress chip and a dark route-tracker panel). A row of 4 stat blocks sits
   beneath.
3. **Facts** ("Мы говорим не словами, а фактами") — eyebrow `ФАКТЫ PANDAO`, headline,
   intro, and a grid of stat cards alternating **light** and **dark** treatments,
   each with a red line icon. Footer chip: "Специализация: Китай → Северный Кавказ".
4. **Services** ("Наши услуги") — 6 service cards (alternating light/dark) with red
   line icons + title + description. Footer route chip.
5. **Warehouse / control** ("Принимаем, проверяем и готовим ваш груз в Китае") — split
   layout: copy + feature list + CTA on the left, a warehouse photo with an overlaid
   4-cell stat strip on the right, and a 5-step "process on the warehouse" photo
   timeline (01–05) below.

A faint **topographic map of the Caucasus region** with **red crosshair / radar-ping
markers**, **dashed red route lines**, and **coordinate labels** (`43.2389° N /
45.7560° E`) runs as a recurring background motif throughout.

---

## CONTENT FUNDAMENTALS

**Language:** Russian. **Voice:** confident, direct, operations-first — sells *control
and accountability*, not hype.

- **Person:** "Мы" (we) for the company, "ваш груз / вам" (your) for the customer.
  Collective + service-oriented: "**Мы** строим маршрут, контролируем склад…"
- **Tone:** plain-spoken and honest, almost anti-marketing. The Facts section literally
  leads with *"Логистика — это не про обещания, что всё всегда будет идеально. Это про
  контроль, честный расчёт и ответственность."* They even publish **negative** numbers
  as proof of accountability ("600 кг утерянного груза полностью возместили клиентам",
  "1000+ товаров повреждено в дороге — ущерб закрыли за свой счёт").
- **Casing:** Headlines in **sentence case** (only first word capitalised), set very
  large and heavy. Eyebrows / kickers in **UPPERCASE** with wide tracking, in red
  (`ФАКТЫ PANDAO`, `УСЛУГИ PANDAO`, `НАШ СКЛАД И КОНТРОЛЬ`). Proper nouns capitalised
  (Китай, Северный Кавказ, the four city names).
- **Numbers:** Space as thousands separator (`1 275 000+ кг`, `1 200+ клиентов`).
  Liberal use of `+` for "and up". Units always shown (кг, м², тонн, %).
- **Punctuation:** Em-dashes for emphasis ("ущерб закрыли — за свой счёт"). Arrow glyph
  `→` for routes ("Китай → Северный Кавказ"). Middots `·` between city lists.
- **Emoji:** **None.** Never. Iconography carries all visual meaning.
- **CTA copy:** action verbs — "Рассчитать доставку", "Посмотреть услуги", "Узнать
  подробнее".
- **Card titles:** short noun phrases — "Доставка под ключ", "Контейнерные перевозки",
  "Сборные грузы", "Склад в Китае", "Байерские услуги", "Сопровождение в Китае".
  Descriptions are 1–2 tight sentences.

---

## VISUAL FOUNDATIONS

**Overall vibe:** premium-industrial. Clean warm-white canvas, heavy black typography,
a single hot red accent, and crisp near-black "control room" cards. Feels engineered,
precise, trustworthy — like a logistics dashboard turned into a brochure.

- **Color:** Three-color discipline. **Red `#DE2931`** (logo, CTAs, icons, accents),
  **near-black `#15161A`** (headlines + dark cards), **warm off-white `#F4F3F1`**
  (page). Indigo `#392F6D` is reserved for the "LOGISTICS COMPANY" lockup only. Greys
  for body. No other hues; no rainbow data-viz.
- **Type:** One heavy grotesque (here **Onest**) does everything. Headlines are
  **800–900 weight**, sentence case, tight `-0.02em` tracking, line-height ~1.0 —
  they dominate. Body is 400–500, 1.55 line-height, grey. Eyebrows are tracked-out
  uppercase red.
- **Backgrounds:** Solid warm off-white, NOT gradients. A **faint topographic map**
  of the Caucasus sits behind sections at very low contrast, decorated with red
  **crosshair markers**, **concentric radar pings**, **dashed red route arcs**, and
  small **coordinate read-outs**. Photographic sections (hero, warehouse) use real
  desaturated/cool industrial photography (ports, containers, trucks, warehouses).
- **Cards:** Two flavours, alternated for rhythm:
  - *Light* — `#FBFBFA`, radius **22px**, hairline `#E6E5E2` + soft shadow
    (`0 14px 36px rgba(20,21,26,.08)`).
  - *Dark* — `#14151A`, same radius, faint map texture inside, red icon, white text.
  Big hero/photo panels use radius **30px**.
- **Icon chips:** red line icon inside a soft circular/rounded tile (light-grey on
  light cards, `#1C1D22` on dark cards).
- **Buttons:**
  - *Primary* — solid red `#DE2931`, white text, radius ~14px, right-aligned arrow `→`,
    red glow shadow. Hover → deepen to `#C01620` + lift; press → scale .98.
  - *Secondary* — transparent with `#15161A` hairline border, ink text + arrow.
    Hover → fill subtle / border darkens.
- **Accent divider:** a short thick **red underline** (≈64×4px) sits under headlines /
  eyebrows as a signature device.
- **Borders:** 1px hairlines (`#E6E5E2` light, `#2A2B31` dark). Generous rounding
  everywhere; nothing sharp.
- **Shadows:** soft, large-radius, low-opacity, neutral (never colored except the red
  CTA glow). Elevation = bigger blur, not darker.
- **Spacing:** roomy. 4px base scale; section padding ~96px desktop. Cards padded
  24–32px. Strong grid alignment.
- **Motion:** restrained. Fades + short upward reveals on scroll; CTA hover lift; the
  route-tracker progress bar animates fill. Easing ~`cubic-bezier(.2,.7,.2,1)`. No
  bounces, no infinite loops on content. Radar pings may pulse subtly.
- **Transparency / blur:** floating hero cards use solid fills with strong shadow
  (not glassmorphism). The dark route panel is solid near-black.
- **Imagery mood:** cool, slightly desaturated, real industrial photography (steel
  blues + container reds). High detail, never illustrative.

---

## ICONOGRAPHY

PanDao uses a **single-weight red line-icon set** — thin (~1.75px) outlined glyphs,
rounded joins, drawn in brand red `#DE2931`, each sitting in a soft circular/rounded
chip. Subjects are logistics-literal: shipping container, warehouse, truck, box /
parcel, key, shopping cart, people / client, shield (insurance), weight bag (KG),
map-pin, calendar, globe, and a recurring **crosshair / target** used as a map marker.

- **System used here:** [**Lucide**](https://lucide.dev) via CDN — closest open match
  for the thin rounded-stroke style. **Substitution flagged** — originals may be a
  custom or paid set; swap if real SVGs become available.
  Mapping: container→`container`, warehouse→`warehouse`, truck→`truck`, parcel→`package`
  / `package-check`, key→`key-round`, cart→`shopping-cart`, client→`users`/`user`,
  insurance→`shield-check`, weight→`weight`, pin→`map-pin`, route target→`crosshair`,
  globe→`globe`, calendar→`calendar-days`.
- **No emoji, ever.** No unicode pictographs except the arrow `→` (used in route copy)
  and middot `·` (city separators).
- Icons are always **monochrome red** on both light and dark cards (never filled,
  never multicolor).

---

## Fonts

- **Onest** (Google Fonts, weights 400–900) — used for *everything*. Loaded via
  `@import` in `colors_and_type.css`.
- ⚠️ The original headline face looks like a slightly heavier proprietary grotesque.
  Onest is the substitute. **Please share the real font files** if you have them and
  I'll swap them in.
