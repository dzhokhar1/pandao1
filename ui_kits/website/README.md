# PanDao — Website UI Kit

A high-fidelity React/JSX recreation of the **PanDao Logistics** single-page landing
site (Russian), rebuilt from the supplied mobile + desktop screenshots.

## Files
| File | What |
|---|---|
| `index.html` | Assembles the full page (open this). React + Babel + Lucide via CDN. |
| `kit.css` | All component styles; imports root `../../colors_and_type.css` tokens. |
| `Decor.jsx` | `Icon` (Lucide), `MapBg` (grid + crosshair + coordinates), `SpecChip`. |
| `Header.jsx` | Sticky header, desktop nav, primary CTA, mobile hamburger + slide-in menu. |
| `Hero.jsx` | Eyebrow route, headline, lead, CTAs, port photo w/ floating cards + route tracker, 4-stat row. |
| `Facts.jsx` | "Мы говорим не словами, а фактами" — alternating light/dark stat cards. |
| `Services.jsx` | "Наши услуги" — 6 alternating service cards + route chip. |
| `Warehouse.jsx` | Split copy/photo, overlaid stat strip, 5-step process timeline. |
| `Footer.jsx` | Compact footer (see note below). |

## Interaction
- Mobile hamburger opens a full-screen slide-in nav (resize the preview narrow to see it).
- Buttons have hover-lift + press states; cards lift on hover.
- The route tracker shows stage 1 ("Склад в Китае") active.

## Notes / caveats
- **Photography** (`assets/photo-port.jpg`, `photo-warehouse.jpg`, `proc-0*.jpg`) was
  **cropped out of the screenshots** — low-resolution. Replace with the original
  high-res assets for production.
- **Footer** is not present in the source screenshots; it's an understated, on-brand
  addition so the page closes properly. Remove or adjust freely.
- **Icons** are Lucide (CDN) — the closest open match to PanDao's red line-icon set.
  See README → ICONOGRAPHY. Swap if original SVGs become available.
- **Headline font** is Onest (substitute). The original looks slightly heavier.
