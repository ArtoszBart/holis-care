export const COLORS = Object.freeze({
  defaultText: '#1e1e1e',
  typo1: '#202229',
  typo2: '#4c4f59',
  typo3: '#797b80',
  typo4: '#8f9bb3',
  orange400: '#fdc8b5',
  primary600: '#fb8156',
  stroke: '#ced3de',
  purple: '#9000ff',
  blue: '#0095ff',
  yellow: '#fbbc05',
  red: '#e03616',
  babyBlue: '#e5eefb',
  errorRed: '#ff5a5f',
});

type ColorKey = keyof typeof COLORS;
export type ColorValue = (typeof COLORS)[ColorKey];
