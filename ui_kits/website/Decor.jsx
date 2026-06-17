// Shared decorative helpers: Lucide icon + map background motifs.
function Icon({ name, className, style }) {
  return <i data-lucide={name} className={className} style={style}></i>;
}

// Faint grid + crosshair + coordinate readouts + dashed route. Pure decoration.
function MapBg({ children }) {
  return (
    <div className="pd-mapbg">
      <div className="pd-coord" style={{ right: 28, bottom: 40, textAlign: 'right' }}>43.2389° N<br/>45.7560° E</div>
      <div className="pd-cross" style={{ left: 36, top: 340 }}></div>
      <div className="pd-dot" style={{ left: 200, top: 360 }}></div>
      {children}
    </div>
  );
}

// Photo placeholder — replaces real photography until high-res assets are supplied.
// dark=true for blocks that carry light/white overlays (hero, warehouse).
function Photo({ label, dark, ratio, style }) {
  return (
    <div className={"pd-photo-ph" + (dark ? " is-dark" : "")} style={style}>
      <div className="pd-photo-ph-inner">
        <Icon name="image" />
        {label && <span>{label}</span>}
      </div>
    </div>
  );
}

// Small specialization chip used in section corners
function SpecChip() {
  return (
    <div className="pd-spec">
      <span className="ic"><Icon name="crosshair" /></span>
      <span className="tx">Специализация:
        <b><span>Китай</span> <span className="ar">→</span> Северный Кавказ</b>
      </span>
    </div>
  );
}

Object.assign(window, { Icon, MapBg, SpecChip, Photo });
