---
name: pandao-design
description: Use this skill to generate well-branded interfaces and assets for PanDao Logistics Company (cargo / freight forwarding, China → North Caucasus), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and a website UI kit for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

This is the design system for **PanDao Logistics** — a Russian-language cargo company
delivering from China to the North Caucasus. The look is premium-industrial: warm
off-white canvas, heavy black grotesque type, a single hot red accent (`#DE2931`),
crisp near-black "control room" cards, real industrial photography, and a recurring
faint topographic-map motif with red crosshairs and dashed routes.

Key files:
- `README.md` — product context, content voice, full visual foundations, iconography.
- `colors_and_type.css` — color/radius/shadow/spacing tokens + semantic type classes.
- `assets/` — logo (transparent PNG) and reference photography.
- `preview/` — design-system specimen cards (colors, type, components, brand).
- `ui_kits/website/` — high-fidelity recreation of the PanDao landing page (React/JSX
  components + `kit.css`). Reuse `Header`, `Hero`, `Facts`, `Services`, `Warehouse`,
  `Footer`, plus the `Icon`, `MapBg`, `SpecChip` helpers in `Decor.jsx`.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view. If working on production code,
copy assets and read the rules here to become an expert in designing with this brand.

Conventions to keep: sentence-case heavy headlines; UPPERCASE tracked red eyebrows with
a short red dash lead-in; the 64×4px red underline divider; `→` for routes and `·` for
city lists; spaced thousands separators (`1 275 000+ кг`); **no emoji**; red Lucide
line-icons in soft chips; alternate light/dark cards for rhythm.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.
