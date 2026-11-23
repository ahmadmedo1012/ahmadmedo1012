#!/usr/bin/env node
/**
 * CARD ANIMATOR — injects SMIL motion into the 8 project identity cards.
 * Per card (accent color auto-detected from its underline rect):
 *   1. shimmer sweep across the card (clipped, skewed)
 *   2. pulsing ring around the project icon box
 *   3. accent underline draws itself in
 *   4. bottom separator line becomes marching dashes
 * Idempotent: skips files already carrying the injection marker.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'assets', 'projects');
const MARK = 'card-anim-v1';
const files = readdirSync(DIR).filter(f => f.endsWith('.svg'));

for (const f of files) {
  const p = join(DIR, f);
  let s = readFileSync(p, 'utf8');
  if (s.includes(MARK)) { console.log(`  skip ${f} (already animated)`); continue; }

  const m = s.match(/<rect x="456" y="116" width="60" height="3" rx="1\.5" fill="(#[0-9A-Fa-f]+)"/);
  const accent = m ? m[1] : '#E2A93B';
  const id = f.replace(/[^a-z0-9]/gi, '');

  /* 3) underline draws in */
  s = s.replace(
    /<rect x="456" y="116" width="60" height="3" rx="1\.5" fill="(#[0-9A-Fa-f]+)"\s*\/>/,
    `<rect x="456" y="116" width="60" height="3" rx="1.5" fill="$1"><animate attributeName="width" values="0;60" begin="0.4s" dur="0.7s" calcMode="spline" keySplines="0.22 0.9 0.28 1" keyTimes="0;1" fill="freeze"/></rect>`
  );

  /* 4) bottom separator → marching dashes */
  s = s.replace(
    /<line x1="36" y1="246" x2="524" y2="246" stroke="#232A38" stroke-width="1"\s*\/>/,
    `<line x1="36" y1="246" x2="524" y2="246" stroke="#232A38" stroke-width="1" stroke-dasharray="5 7"><animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.8s" repeatCount="indefinite"/></line>`
  );

  /* 1+2) shimmer + icon pulse ring, inserted before </svg> */
  const inject = `
  <!-- ${MARK}: shimmer + icon pulse (auto-injected) -->
  <defs><clipPath id="clip-${id}"><rect width="560" height="300" rx="14"/></clipPath></defs>
  <g clip-path="url(#clip-${id})"><g transform="skewX(-18)"><rect x="-70" y="-30" width="44" height="360" fill="#F2EFE6" opacity="0.05">
    <animateTransform attributeName="transform" type="translate" values="0 0;660 0;660 0" keyTimes="0;0.14;1" dur="7s" begin="0.8s" repeatCount="indefinite"/>
  </rect></g></g>
  <circle cx="80" cy="80" r="44" fill="none" stroke="${accent}" stroke-width="1.3" opacity="0">
    <animate attributeName="r" values="42;58" dur="2.8s" begin="0.3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0" dur="2.8s" begin="0.3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="80" cy="80" r="44" fill="none" stroke="${accent}" stroke-width="1.3" opacity="0">
    <animate attributeName="r" values="42;58" dur="2.8s" begin="1.7s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0" dur="2.8s" begin="1.7s" repeatCount="indefinite"/>
  </circle>
</svg>`;
  s = s.replace(/<\/svg>\s*$/, inject);

  writeFileSync(p, s);
  console.log(`  animated ${f} (accent ${accent})`);
}
console.log('done.');
