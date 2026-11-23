/**
 * DUAL-THEME PALETTE — ahmadmedo1012 profile
 * -------------------------------------------
 * Every SVG asset exists in TWO variants (-dark / -light) with a fully
 * TRANSPARENT canvas (no full-bleed background rect). Panels are rounded
 * cards that float on the GitHub page background, tuned per theme.
 * Switching is done with GitHub's native image fragments:
 *   asset-light.svg#gh-light-mode-only  /  asset-dark.svg#gh-dark-mode-only
 *
 * Identity (IDENTITY.md): ink / amber / paper — no gradients.
 * DISCIPLINE: ONE accent (amber) across the ENTIRE profile — including
 * project cards. Structure is carried by the monochrome scale only.
 */

export const THEMES = {
  dark: {
    name: 'dark',
    card: '#11151E',      // panel fill
    card2: '#161D29',     // lifted panel / icon wells
    line: '#2A3242',      // hairline border
    line2: '#232A38',     // softer hairline / grid
    grid: '#151B26',      // in-panel grid texture
    ink: '#F2EFE6',       // primary text
    mute: '#C7CEDB',      // secondary text
    dim: '#7E8798',       // tertiary text
    amber: '#E2A93B',     // THE accent
    amberDeep: '#E2A93B', // accent used for small text
    amberDim: '#8A6420',
    shadow: 'rgba(0,0,0,0.5)',
    // contribution heatmap ramp (0 → max)
    heat: ['#161D29', '#232A38', '#2A3242', '#8A6420', '#E2A93B'],
    heatZero: '#161D29',
  },
  light: {
    name: 'light',
    card: '#FBFAF6',      // warm paper panel
    card2: '#F1EEE5',     // lifted panel / icon wells
    line: '#E2DCCB',      // warm hairline border
    line2: '#E8E3D6',     // softer hairline / grid
    grid: '#F3F0E8',      // in-panel grid texture
    ink: '#0D1017',       // primary text
    mute: '#444C5C',      // secondary text
    dim: '#8B93A3',       // tertiary text
    amber: '#B87D1F',     // THE accent (deeper amber for light bg)
    amberDeep: '#8F6212', // accent for small text on light bg
    amberDim: '#D9B36A',
    shadow: 'rgba(13,16,23,0.12)',
    heat: ['#EDEAE0', '#DCCB9C', '#C9922B', '#A66E14', '#7C5410'],
    heatZero: '#E6E1D0',   // zero-level cell (slightly deeper than ramp base)
  },
};

export const MONO = 'Cascadia Code, SF Mono, Menlo, Consolas, DejaVu Sans Mono, monospace';
export const AR = 'Segoe UI, Tahoma, Noto Sans Arabic, Geeza Pro, sans-serif';

export const esc = s => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
