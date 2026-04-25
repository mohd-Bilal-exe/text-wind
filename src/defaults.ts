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
  easing: 'linear',
};

export const DEFAULT_TEXT_TYPES: Record<string, FluidTextTypeConfig> = {
  display: {
    minSize: 'var(--fluid-display-min)',
    maxSize: 'var(--fluid-display-max)',
    minLineHeight: 'var(--fluid-display-lh-min)',
    maxLineHeight: 'var(--fluid-display-lh-max)',
    weight: 'var(--fluid-display-weight)',
    letterSpacing: 'var(--fluid-display-tracking)',
  },
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
  title: {
    minSize: 'var(--fluid-title-min)',
    maxSize: 'var(--fluid-title-max)',
    minLineHeight: 'var(--fluid-title-lh-min)',
    maxLineHeight: 'var(--fluid-title-lh-max)',
    weight: 'var(--fluid-title-weight)',
    letterSpacing: 'var(--fluid-title-tracking)',
  },
  body: {
    minSize: 'var(--fluid-body-min)',
    maxSize: 'var(--fluid-body-max)',
    minLineHeight: 'var(--fluid-body-lh-min)',
    maxLineHeight: 'var(--fluid-body-lh-max)',
    weight: 'var(--fluid-body-weight)',
    letterSpacing: 'var(--fluid-body-tracking)',
  },
  label: {
    minSize: 'var(--fluid-label-min)',
    maxSize: 'var(--fluid-label-max)',
    minLineHeight: 'var(--fluid-label-lh-min)',
    maxLineHeight: 'var(--fluid-label-lh-max)',
    weight: 'var(--fluid-label-weight)',
    letterSpacing: 'var(--fluid-label-tracking)',
  },
  callout: {
    minSize: 'var(--fluid-callout-min)',
    maxSize: 'var(--fluid-callout-max)',
    minLineHeight: 'var(--fluid-callout-lh-min)',
    maxLineHeight: 'var(--fluid-callout-lh-max)',
    weight: 'var(--fluid-callout-weight)',
    letterSpacing: 'var(--fluid-callout-tracking)',
  },
  caption: {
    minSize: 'var(--fluid-caption-min)',
    maxSize: 'var(--fluid-caption-max)',
    minLineHeight: 'var(--fluid-caption-lh-min)',
    maxLineHeight: 'var(--fluid-caption-lh-max)',
    weight: 'var(--fluid-caption-weight)',
    letterSpacing: 'var(--fluid-caption-tracking)',
  },
  overline: {
    minSize: 'var(--fluid-overline-min)',
    maxSize: 'var(--fluid-overline-max)',
    minLineHeight: 'var(--fluid-overline-lh-min)',
    maxLineHeight: 'var(--fluid-overline-lh-max)',
    weight: 'var(--fluid-overline-weight)',
    letterSpacing: 'var(--fluid-overline-tracking)',
  },
  footnote: {
    minSize: 'var(--fluid-footnote-min)',
    maxSize: 'var(--fluid-footnote-max)',
    minLineHeight: 'var(--fluid-footnote-lh-min)',
    maxLineHeight: 'var(--fluid-footnote-lh-max)',
    weight: 'var(--fluid-footnote-weight)',
    letterSpacing: 'var(--fluid-footnote-tracking)',
  },
  code: {
    minSize: 'var(--fluid-code-min)',
    maxSize: 'var(--fluid-code-max)',
    minLineHeight: 'var(--fluid-code-lh-min)',
    maxLineHeight: 'var(--fluid-code-lh-max)',
    weight: 'var(--fluid-code-weight)',
    letterSpacing: 'var(--fluid-code-tracking)',
  },
};

export const DEFAULT_FONT_FAMILIES: Record<string, string> = {
  display: 'var(--font-family-display)',
  heading: 'var(--font-family-heading)',
  subheading: 'var(--font-family-subheading)',
  title: 'var(--font-family-heading)',
  body: 'var(--font-family-body)',
  label: 'var(--font-family-body)',
  callout: 'var(--font-family-body)',
  caption: 'var(--font-family-body)',
  overline: 'var(--font-family-body)',
  footnote: 'var(--font-family-body)',
  mono: 'var(--font-family-mono)',
  code: 'var(--font-family-mono)',
};

export const DEFAULT_COLORS: Record<string, string> = {
  display: 'var(--color-fluid-heading)',
  heading: 'var(--color-fluid-heading)',
  subheading: 'var(--color-fluid-subheading)',
  title: 'var(--color-fluid-heading)',
  body: 'var(--color-fluid-body)',
  label: 'var(--color-fluid-body)',
  callout: 'var(--color-fluid-accent)',
  caption: 'var(--color-fluid-body)',
  overline: 'var(--color-fluid-muted)',
  footnote: 'var(--color-fluid-muted)',
  muted: 'var(--color-fluid-muted)',
  accent: 'var(--color-fluid-accent)',
  code: 'var(--color-fluid-body)',
};

export const DEFAULT_BASE_VARIABLES: Record<string, string> = {
  '--fluid-vw-min': '320px',
  '--fluid-vw-max': '1536px',

  /* Display */
  '--fluid-display-min': '3.5rem',
  '--fluid-display-max': '10rem',
  '--fluid-display-lh-min': '1.1',
  '--fluid-display-lh-max': '1.05',
  '--fluid-display-weight': '800',
  '--fluid-display-tracking': '-0.02em',

  /* Heading */
  '--fluid-heading-min': '2.5rem',
  '--fluid-heading-max': '5rem',
  '--fluid-heading-lh-min': '1.2',
  '--fluid-heading-lh-max': '1.1',
  '--fluid-heading-weight': '700',
  '--fluid-heading-tracking': '-0.01em',

  /* Subheading */
  '--fluid-subheading-min': '1.5rem',
  '--fluid-subheading-max': '2.5rem',
  '--fluid-subheading-lh-min': '1.3',
  '--fluid-subheading-lh-max': '1.2',
  '--fluid-subheading-weight': '600',
  '--fluid-subheading-tracking': '0em',

  /* Title */
  '--fluid-title-min': '1.25rem',
  '--fluid-title-max': '1.75rem',
  '--fluid-title-lh-min': '1.4',
  '--fluid-title-lh-max': '1.3',
  '--fluid-title-weight': '600',
  '--fluid-title-tracking': '0em',

  /* Body */
  '--fluid-body-min': '1rem',
  '--fluid-body-max': '1.125rem',
  '--fluid-body-lh-min': '1.6',
  '--fluid-body-lh-max': '1.55',
  '--fluid-body-weight': '400',
  '--fluid-body-tracking': '0em',

  /* Label */
  '--fluid-label-min': '0.875rem',
  '--fluid-label-max': '1rem',
  '--fluid-label-lh-min': '1.5',
  '--fluid-label-lh-max': '1.4',
  '--fluid-label-weight': '500',
  '--fluid-label-tracking': '0.01em',

  /* Callout */
  '--fluid-callout-min': '1rem',
  '--fluid-callout-max': '1.125rem',
  '--fluid-callout-lh-min': '1.5',
  '--fluid-callout-lh-max': '1.4',
  '--fluid-callout-weight': '500',
  '--fluid-callout-tracking': '0em',

  /* Caption */
  '--fluid-caption-min': '0.75rem',
  '--fluid-caption-max': '0.875rem',
  '--fluid-caption-lh-min': '1.4',
  '--fluid-caption-lh-max': '1.3',
  '--fluid-caption-weight': '400',
  '--fluid-caption-tracking': '0em',

  /* Overline */
  '--fluid-overline-min': '0.75rem',
  '--fluid-overline-max': '0.875rem',
  '--fluid-overline-lh-min': '1.2',
  '--fluid-overline-lh-max': '1.2',
  '--fluid-overline-weight': '700',
  '--fluid-overline-tracking': '0.1em',

  /* Footnote */
  '--fluid-footnote-min': '0.75rem',
  '--fluid-footnote-max': '0.8125rem',
  '--fluid-footnote-lh-min': '1.3',
  '--fluid-footnote-lh-max': '1.3',
  '--fluid-footnote-weight': '400',
  '--fluid-footnote-tracking': '0em',

  /* Code */
  '--fluid-code-min': '0.875rem',
  '--fluid-code-max': '1rem',
  '--fluid-code-lh-min': '1.5',
  '--fluid-code-lh-max': '1.5',
  '--fluid-code-weight': '400',
  '--fluid-code-tracking': '0em',

  /* Colors */
  '--color-fluid-heading': '#111827',
  '--color-fluid-subheading': '#4b5563',
  '--color-fluid-body': '#374151',
  '--color-fluid-muted': '#6b7280',
  '--color-fluid-accent': '#2563eb',

  /* Font Families */
  '--font-family-display': 'system-ui, sans-serif',
  '--font-family-heading': 'system-ui, sans-serif',
  '--font-family-subheading': 'system-ui, sans-serif',
  '--font-family-body': 'system-ui, sans-serif',
  '--font-family-mono': 'ui-monospace, monospace',
};

export const DEFAULT_TEXTWIND_OPTIONS: ResolvedTextwindOptions = {
  scales: DEFAULT_SCALES,
  viewportMin: DEFAULT_VIEWPORT_MIN,
  viewportMax: DEFAULT_VIEWPORT_MAX,
  textTypes: DEFAULT_TEXT_TYPES,
  fontFamilies: DEFAULT_FONT_FAMILIES,
  colors: DEFAULT_COLORS,
  opacitySteps: DEFAULT_OPACITY_STEPS,
  easing: 'linear',
};
