// Renders public/og.png (1200x630) for link previews.
// Run with: npm run og
//
// sharp's SVG renderer ignores @font-face, so this uses Georgia and a system
// mono -- the same fallbacks declared in --font-body / --font-mono, which keeps
// the card on-brand without shipping a font pipeline.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const W = 1200;
const H = 630;

const paper = '#f3f2f2';
const ink = '#201e1d';
const cyan = '#0088b0';
const magenta = '#d6006c';
const magentaTint = '#ffdee6';
const ink3 = '#605d5d';

const serif = "Georgia, 'Times New Roman', serif";
const mono = "Consolas, 'DejaVu Sans Mono', monospace";

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${paper}"/>
  <rect x="6" y="6" width="${W - 12}" height="${H - 12}" fill="none" stroke="${ink}" stroke-width="12"/>

  <!-- open-to-work badge: hard shadow, then plate, matching .badge -->
  <rect x="77" y="79" width="437" height="52" fill="${ink}"/>
  <rect x="72" y="74" width="437" height="52" fill="${magentaTint}" stroke="${ink}" stroke-width="3"/>
  <circle cx="100" cy="100" r="7" fill="${magenta}"/>
  <text x="121" y="108" font-family="${mono}" font-size="19" letter-spacing="1.6" fill="${ink}">OPEN TO WORK — REMOTE / JAKARTA</text>

  <!-- headline -->
  <text x="72" y="273" font-family="${serif}" font-size="82" font-weight="bold" fill="${ink}" letter-spacing="-2">DevOps engineer</text>
  <text x="72" y="371" font-family="${serif}" font-size="82" font-weight="bold" fill="${ink}" letter-spacing="-2">${esc('& full-stack developer')}<tspan fill="${cyan}">.</tspan></text>

  <text x="72" y="432" font-family="${serif}" font-size="27" fill="${ink3}">${esc('Kubernetes, pipelines, observability — and the interfaces on top of them.')}</text>

  <rect x="72" y="486" width="${W - 144}" height="6" fill="${ink}"/>

  <text x="72" y="551" font-family="${serif}" font-size="34" font-weight="bold" fill="${ink}" letter-spacing="-0.5">Yudhistira<tspan fill="${magenta}">.</tspan></text>
  <text x="${W - 72}" y="549" text-anchor="end" font-family="${mono}" font-size="21" letter-spacing="1.4" fill="${cyan}">yuyudhistira.my.id</text>
</svg>`;

await mkdir('public', { recursive: true });
const info = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og.png');
console.log(`public/og.png ${info.width}x${info.height} ${(info.size / 1024).toFixed(1)}kB`);
