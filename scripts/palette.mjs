/**
 * DUAL-THEME PALETTE — ahmadmedo1012 profile · v4 "SIGNAL RED"
 * ------------------------------------------------------------
 * Every SVG asset exists in TWO variants (-dark / -light) with a fully
 * TRANSPARENT canvas (no full-bleed background rect). Panels are rounded
 * cards that float on the GitHub page background, tuned per theme.
 * Switching is done with GitHub's native image fragments:
 *   asset-light.svg#gh-light-mode-only  /  asset-dark.svg#gh-dark-mode-only
 *
 * Identity (IDENTITY.md): ink / SIGNAL RED / paper — no gradients.
 * DISCIPLINE: ONE accent (red) across the ENTIRE profile — including
 * project cards. Structure is carried by the neutral scale only.
 */

export const THEMES = {
  dark: {
    name: 'dark',
    card: '#15171C',      // panel fill
    card2: '#1B1E24',     // lifted panel / icon wells
    line: '#2C3038',      // hairline border
    line2: '#23262D',     // softer hairline / grid
    grid: '#16181D',      // in-panel grid texture
    ink: '#F5F6F8',       // primary text
    mute: '#C8CBD2',      // secondary text
    dim: '#7E848E',       // tertiary text
    red: '#FF4D5E',       // THE accent
    redDeep: '#FF5C6A',   // accent used for small text
    redDim: '#8C2A34',
    shadow: 'rgba(0,0,0,0.5)',
    // contribution heatmap ramp (0 → max)
    heat: ['#1B1E24', '#3A2228', '#6E2A32', '#B03740', '#FF4D5E'],
    heatZero: '#1B1E24',
  },
  light: {
    name: 'light',
    card: '#FFFFFF',      // clean panel
    card2: '#F6F7F9',     // lifted panel / icon wells
    line: '#E4E6EB',      // hairline border
    line2: '#EDEFF2',     // softer hairline / grid
    grid: '#F8F9FB',      // in-panel grid texture
    ink: '#0F1115',       // primary text
    mute: '#43474F',      // secondary text
    dim: '#8A8F98',       // tertiary text
    red: '#D92638',       // THE accent (deep signal red for light bg)
    redDeep: '#B41F2E',   // accent for small text on light bg
    redDim: '#F2B4BB',
    shadow: 'rgba(15,17,21,0.10)',
    heat: ['#F0F1F3', '#F8D8DC', '#F0ABB3', '#E15564', '#C92230'],
    heatZero: '#F0F1F3',
  },
};

export const MONO = 'Cascadia Code, SF Mono, Menlo, Consolas, DejaVu Sans Mono, monospace';
export const AR = 'Segoe UI, Tahoma, Noto Sans Arabic, Geeza Pro, sans-serif';

export const esc = s => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
