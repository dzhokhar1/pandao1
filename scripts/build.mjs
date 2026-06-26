// PanDao production build — turns the in-browser UI kit (ui_kits/website) into a
// fast, static, Beget-ready site in docs/.
//   - compiles all JSX offline (no @babel/standalone in the browser)
//   - ships React production build + a 4KB icon shim (instead of 4.6MB of CDN JS)
//   - flat structure (index.html + assets/ at root) for shared hosting / public_html
//   - real domain + contacts, wired contact form -> api/lead.php
//   - robots.txt, sitemap.xml, .htaccess (gzip + caching)
// Re-run after importing a new design-system zip:  npm run build  (or: node scripts/build.mjs)

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'ui_kits', 'website');
const OUT = path.join(ROOT, 'docs');

// ---- site config (single place to change for go-live) ----
const DOMAIN = 'https://pandaologistics.com';
const PHONE_DISPLAY = '+7 (985) 071-01-01';
const PHONE_LD = '+7-985-071-01-01';
const LEAD_EMAIL = 'pandaologistics@gmail.com'; // inbox shown in the site contacts block

const rd = (p) => fs.readFileSync(p, 'utf8');
const wr = (p, s) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); };
const kb = (p) => Math.round(fs.statSync(p).size / 1024);

// 1) clean output
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

// 2) assets the live site actually uses (already webp/svg; unused png/jpg are dropped)
const ASSETS = ['hero-port.webp', 'warehouse.webp', 'pandao-logo.svg', 'pandao-logo-dark.svg'];
for (const a of ASSETS) fs.cpSync(path.join(ROOT, 'assets', a), path.join(OUT, 'assets', a));

// 3) css foundation, effects, favicon, legal, vendor
// colors_and_type.css holds the CSS variables + type classes + the Onest @font-face import.
// It lives at repo root and kit.css/legal.css pull it via ../../ paths that DON'T resolve in
// the flat build — so we copy it to the site root and rewrite every import to a flat path.
fs.cpSync(path.join(ROOT, 'colors_and_type.css'), path.join(OUT, 'colors_and_type.css'));
wr(path.join(OUT, 'kit.css'), rd(path.join(SRC, 'kit.css'))
  .replaceAll('../../assets/', 'assets/')
  .replace('../../colors_and_type.css', 'colors_and_type.css'));
fs.cpSync(path.join(SRC, 'effects.js'), path.join(OUT, 'effects.js'));
fs.cpSync(path.join(SRC, 'favicon.svg'), path.join(OUT, 'favicon.svg'));
for (const v of ['react.production.min.js', 'react-dom.production.min.js'])
  fs.cpSync(path.join(SRC, 'vendor', v), path.join(OUT, 'vendor', v));

// legal pages: copy, then fix flat-build paths (logo, foundation css) + wire the icon shim
const FONT_LINK = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&display=swap">';
fs.mkdirSync(path.join(OUT, 'legal'), { recursive: true });
for (const lf of fs.readdirSync(path.join(SRC, 'legal'))) {
  let c = rd(path.join(SRC, 'legal', lf));
  if (lf.endsWith('.css')) {
    c = c.replace('../../../colors_and_type.css', '../colors_and_type.css');
  } else if (lf.endsWith('.html')) {
    c = c.replaceAll('../../../assets/', '../assets/')
      .replace('</head>', `<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n${FONT_LINK}\n</head>`)
      .replace('</body>', '<script src="../vendor/icons.js"></script><script>window.lucide&&lucide.createIcons();</script>\n</body>');
  }
  wr(path.join(OUT, 'legal', lf), c);
}

// 3.5) icon shim — auto-detect every Lucide icon the components use, pull each from a
// local cache (fetch+cache on first use), and emit a tiny replacement for lucide.createIcons().
const NOT_ICONS = new Set(['kg']); // handled by a custom component, not Lucide
const CACHE = path.join(ROOT, 'scripts', 'lucide-cache');
fs.mkdirSync(CACHE, { recursive: true });
const iconNames = new Set();
for (const c of fs.readdirSync(SRC)) {
  if (!c.endsWith('.jsx')) continue;
  const t = rd(path.join(SRC, c));
  for (const re of [/data-lucide="([a-z][a-z0-9-]*)"/g, /name="([a-z][a-z0-9-]*)"/g, /\b(?:ic|icon|name):\s*['"]([a-z][a-z0-9-]*)['"]/g]) {
    let m; while ((m = re.exec(t))) if (!NOT_ICONS.has(m[1])) iconNames.add(m[1]);
  }
}
const icons = {};
const missing = [];
for (const n of [...iconNames].sort()) {
  const f = path.join(CACHE, `${n}.svg`);
  if (!fs.existsSync(f)) {
    try { execSync(`curl -sfL "https://unpkg.com/lucide-static@1.21.0/icons/${n}.svg" -o "${f}"`); } catch { /* keep going */ }
  }
  if (!fs.existsSync(f) || !rd(f).includes('<svg')) { missing.push(n); continue; }
  const s = rd(f);
  icons[n] = s.slice(s.indexOf('>', s.indexOf('<svg')) + 1, s.lastIndexOf('</svg>')).replace(/\s+/g, ' ').trim();
}
if (missing.length) console.warn('  ⚠ icons not found in Lucide (rendered blank):', missing.join(', '));
wr(path.join(OUT, 'vendor', 'icons.js'),
`/* Tiny Lucide replacement — only the ${Object.keys(icons).length} icons this site uses (vs the 399KB UMD build).
   Renders <i data-lucide="name"> into inline <svg>. Auto-generated from lucide-static v1.21.0 (ISC). */
(function(){
  var I=${JSON.stringify(icons)};
  function createIcons(){
    var els=document.querySelectorAll("[data-lucide]");
    for(var i=0;i<els.length;i++){
      var el=els[i], n=el.getAttribute("data-lucide"), body=I[n];
      if(!body){ if(window.console) console.warn("[icons] missing:", n); continue; }
      var svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
      svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
      svg.setAttribute("width","24"); svg.setAttribute("height","24");
      svg.setAttribute("viewBox","0 0 24 24"); svg.setAttribute("fill","none");
      svg.setAttribute("stroke","currentColor"); svg.setAttribute("stroke-width","2");
      svg.setAttribute("stroke-linecap","round"); svg.setAttribute("stroke-linejoin","round");
      svg.setAttribute("class",("lucide lucide-"+n+" "+(el.getAttribute("class")||"")).trim());
      if(el.getAttribute("style")) svg.setAttribute("style",el.getAttribute("style"));
      svg.innerHTML=body;
      el.parentNode.replaceChild(svg,el);
    }
  }
  window.lucide={createIcons:createIcons};
})();`);
console.log(`  icons: ${Object.keys(icons).length} bundled` + (missing.length ? `, ${missing.length} missing` : ''));

// 4) app bundle: concat components in load order + the inline App bootstrap, compile + minify
const ORDER = ['decor', 'header', 'hero', 'facts', 'services', 'warehouse', 'faq',
  'contacts', 'footer', 'contactModal', 'cookieBanner', 'siteChrome'];
let appSrc = ORDER.map((c) => rd(path.join(SRC, `${c}.jsx`))).join('\n');

// extract the inline <script type="text/babel"> ... App ... </script> bootstrap from index.html
const srcHtml = rd(path.join(SRC, 'index.html'));
const boot = srcHtml.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);
if (!boot) throw new Error('App bootstrap script not found in source index.html');
appSrc += '\n' + boot[1] + '\n';

// wire the contact form to the real PHP endpoint (keeps optimistic UI)
const FAKE = 'if (valid) setSent(true);';
const REAL = "if (valid) { setSent(true); try { fetch('api/lead.php',{method:'POST'," +
  "headers:{'Content-Type':'application/x-www-form-urlencoded'}," +
  "body:new URLSearchParams({name:name,phone:phone})}); } catch(e){} }";
if (!appSrc.includes(FAKE)) throw new Error('Contact-form submit line not found — form wiring would silently fail');
appSrc = appSrc.replace(FAKE, REAL);

const tmp = path.join(OUT, '_app.src.jsx');
wr(tmp, appSrc);
execSync(`npx --yes esbuild "${tmp}" --minify --legal-comments=none --charset=utf8 --outfile="${path.join(OUT, 'app.js')}"`, { stdio: 'inherit' });
fs.rmSync(tmp);

// 5) index.html — strip CDN/babel, wire compiled bundle, fix paths/domain/contacts
let html = srcHtml
  // drop the in-browser toolchain
  .replace(/\s*<script src="https:\/\/unpkg\.com\/[^"]+"[^>]*><\/script>/g, '')
  // drop the per-component babel script tags
  .replace(/\s*<script type="text\/babel" src="[^"]+\.jsx"><\/script>/g, '')
  // drop the inline babel bootstrap (now compiled into app.js)
  .replace(/\s*<script type="text\/babel">[\s\S]*?<\/script>/, '');

// inject production scripts right before effects.js
html = html.replace('<script src="effects.js"></script>',
  '<script src="vendor/react.production.min.js"></script>\n' +
  '<script src="vendor/react-dom.production.min.js"></script>\n' +
  '<script src="vendor/icons.js"></script>\n' +
  '<script src="app.js"></script>\n' +
  '<script src="effects.js"></script>');

// load the Onest font directly (parallel) instead of only via the colors_and_type.css @import chain
html = html.replace('<link rel="stylesheet" href="kit.css">',
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&display=swap">\n<link rel="stylesheet" href="kit.css">');

// flat asset paths, real domain, real contacts
html = html
  .replaceAll('../../assets/', 'assets/')
  .replaceAll('https://pandao.ru', DOMAIN)
  .replaceAll('+7-928-000-00-00', PHONE_LD)
  .replaceAll('+7 (928) 000-00-00', PHONE_DISPLAY);
wr(path.join(OUT, 'index.html'), html);

// 6) robots.txt
wr(path.join(OUT, 'robots.txt'),
`User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${DOMAIN}/sitemap.xml
`);

// 7) sitemap.xml — all real pages, with lastmod
const today = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);
const pages = [
  ['/', 'weekly', '1.0'],
  ['/legal/privacy.html', 'yearly', '0.3'],
  ['/legal/terms.html', 'yearly', '0.3'],
  ['/legal/cookies.html', 'yearly', '0.3'],
  ['/legal/consent.html', 'yearly', '0.3'],
];
wr(path.join(OUT, 'sitemap.xml'),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([loc, cf, pr]) =>
`  <url>
    <loc>${DOMAIN}${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${cf}</changefreq>
    <priority>${pr}</priority>
  </url>`).join('\n')}
</urlset>
`);

// 8) .htaccess — gzip + long cache for static, no-store for the API
wr(path.join(OUT, '.htaccess'),
`# PanDao — Apache/LiteSpeed config for Beget shared hosting
Options -Indexes
DirectoryIndex index.html

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json image/svg+xml application/xml
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\\.(webp|svg|css|js)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.html$">
    Header set Cache-Control "no-cache"
  </FilesMatch>
</IfModule>

# Protect collected leads — never serve the CSV log over HTTP
<FilesMatch "\\.csv$">
  Require all denied
</FilesMatch>
`);

// 9) api/lead.php — receives the contact form, emails + appends to a CSV log
wr(path.join(OUT, 'api', 'lead.php'),
`<?php
// PanDao lead handler. Receives name+phone from the contact form.
header('Content-Type: application/json; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['ok'=>false]); exit; }

$name  = trim($_POST['name']  ?? '');
$phone = trim($_POST['phone'] ?? '');
if ($name === '' || $phone === '') {
  http_response_code(422);
  echo json_encode(['ok'=>false,'error'=>'Заполните имя и телефон']); exit;
}

$to   = '${LEAD_EMAIL}';
$body = "Новая заявка с сайта PanDao\\n\\nИмя: $name\\nТелефон: $phone\\nДата: " . date('Y-m-d H:i');
$head = "From: site@${DOMAIN.replace(/^https?:\/\//, '')}\\r\\nContent-Type: text/plain; charset=utf-8";
@mail($to, '=?UTF-8?B?'.base64_encode('Заявка с сайта PanDao').'?=', $body, $head);

// append to a CSV the admin panel can read (one row per lead)
$row = date('c').';'.str_replace(';', ',', $name).';'.str_replace(';', ',', $phone)."\\n";
@file_put_contents(__DIR__.'/leads.csv', $row, FILE_APPEND | LOCK_EX);

echo json_encode(['ok'=>true]);
`);

// 10) report
console.log('\\n=== build complete -> docs/ ===');
const list = [
  'index.html', 'app.js', 'kit.css', 'effects.js',
  'vendor/react.production.min.js', 'vendor/react-dom.production.min.js', 'vendor/icons.js',
  'assets/hero-port.webp', 'assets/warehouse.webp',
];
let total = 0;
for (const f of list) { const p = path.join(OUT, f); const s = kb(p); total += fs.statSync(p).size; console.log(String(s).padStart(5) + ' KB  ' + f); }
console.log('  JS payload (react+reactdom+icons+app): ' +
  Math.round(['vendor/react.production.min.js','vendor/react-dom.production.min.js','vendor/icons.js','app.js']
    .reduce((n,f)=>n+fs.statSync(path.join(OUT,f)).size,0)/1024) + ' KB (was ~4600 KB)');
