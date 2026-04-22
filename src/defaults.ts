import type { FluidTextTypeConfig, ResolvedTextwindOptions } from './types';

export const DEFAULT_VIEWPORT_MIN = 'var(--fluid-vw-min)';
export const DEFAULT_VIEWPORT_MAX = 'var(--fluid-vw-max)';

export const DEFAULT_SCALES = [50, 60, 70, 80, 85, 90, 95, 100, 105, 110, 115, 120, 130, 140, 150, 200];

export const DEFAULT_OPACITY_STEPS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95];

export const DEFAULT_TEXT_TYPE_TEMPLATE: FluidTextTypeConfig = {
  minSize: '1rem',
  maxSize: '1.25rem',
  minLineHeight: 1.2,
  maxLineHeight: 1.4,
  weight: 400,
  letterSpacing: '0em',
};

export const DEFAULT_TEXT_TYPES: Record<string, FluidTextTypeConfig> = {
  heading: {
    minSize: 'var(--fluid-heading-min)',
    maxSize: 'var(--fluid-heading-max)',
    minLineHeight: 'var(--fluid-heading-lh-min)',
    maxLineHeight: 'var(--fluid-heading-lh-max)',
    weight: 'var(--fluid-heading-weight)',
    letterSpacing: 'var(--fluid-heading-tracking)',
  },
  subheading: {
    minSize: 'var(--fluid-subheading-min)',
    maxSize: 'var(--fluid-subheading-max)',
    minLineHeight: 'var(--fluid-subheading-lh-min)',
    maxLineHeight: 'var(--fluid-subheading-lh-max)',
    weight: 'var(--fluid-subheading-weight)',
    letterSpacing: 'var(--fluid-subheading-tracking)',
  },
  body: {
    minSize: 'var(--fluid-body-min)',
    maxSize: 'var(--fluid-body-max)',
    minLineHeight: 'var(--fluid-body-lh-min)',
    maxLineHeight: 'var(--fluid-body-lh-max)',
    weight: 'var(--fluid-body-weight)',
    letterSpacing: 'var(--fluid-body-tracking)',
  },
  caption: {
    minSize: 'var(--fluid-caption-min)',
    maxSize: 'var(--fluid-caption-max)',
    minLineHeight: 'var(--fluid-caption-lh-min)',
    maxLineHeight: 'var(--fluid-caption-lh-max)',
    weight: 'var(--fluid-caption-weight)',
    letterSpacing: 'var(--fluid-caption-tracking)',
  },
};

export const DEFAULT_FONT_FAMILIES: Record<string, string> = {
  heading: 'var(--font-family-heading)',
  subheading: 'var(--font-family-subheading)',
  body: 'var(--font-family-body)',
  mono: 'var(--font-family-mono)',
  display: 'var(--font-family-display)',
};

export const DEFAULT_COLORS: Record<string, string> = {
  heading: 'var(--color-fluid-heading)',
  subheading: 'var(--color-fluid-subheading)',
  body: 'var(--color-fluid-body)',
  muted: 'var(--color-fluid-muted)',
  accent: 'var(--color-fluid-accent)',
};

export const DEFAULT_TEXTWIND_OPTIONS: ResolvedTextwindOptions = {
  scales: DEFAULT_SCALES,
  viewportMin: DEFAULT_VIEWPORT_MIN,
  viewportMax: DEFAULT_VIEWPORT_MAX,
  textTypes: DEFAULT_TEXT_TYPES,
  fontFamilies: DEFAULT_FONT_FAMILIES,
  colors: DEFAULT_COLORS,
  opacitySteps: DEFAULT_OPACITY_STEPS,
};
