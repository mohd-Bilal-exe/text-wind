# Textwind

> A complete typography system for Tailwind with inline scale modifiers. No breakpoints, no config edits, no rebuilds.

Textwind gives you fluid sizing, font family utilities, color utilities, and optical tracking adjustments in one Tailwind plugin.

## Features

- Inline scale modifiers like `text-fluid-heading/80`
- Arbitrary modifier support like `text-fluid-heading/[73]`
- **11 Professional Fluid Types**: `display`, `heading`, `subheading`, `title`, `body`, `label`, `overline`, `callout`, `caption`, `footnote`, `code`
- **Hierarchical Font Families**: Consistent tokens for all 11 types
- **Systematic Colors**: Core tokens like `heading`, `body`, `muted`, `accent`, and `callout`
- Optical tracking that scales with the text size
- **Non-linear easing support**: Custom curvature for fluid growth (`linear`, `in`, `out`, `in-out`)
- Tailwind CSS v3.4+ and v4.x compatible

## Install

```bash
npm install text-wind
```

## Tailwind v3

```ts
// tailwind.config.ts
import textwind from 'text-wind';

export default {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  plugins: [
    textwind(),
  ],
};
```

```css
/* globals.css */
@layer theme {
  --fluid-vw-min: 320px;
  --fluid-vw-max: 1280px;

  --font-family-heading: "Inter", system-ui, sans-serif;
  --font-family-subheading: "Inter", system-ui, sans-serif;
  --font-family-body: "Inter", system-ui, sans-serif;
  --font-family-mono: "Fira Code", "Courier New", monospace;
  --font-family-display: "Playfair Display", serif;

  --color-text-heading: #0a0a0a;
  --color-text-subheading: #1a1a1a;
  --color-text-body: #404040;
  --color-text-muted: #737373;
  --color-text-accent: #3b82f6;

  --fluid-heading-min: 1.75rem;
  --fluid-heading-max: 3.5rem;
  --fluid-heading-lh-min: 1.1;
  --fluid-heading-lh-max: 1.2;
  --fluid-heading-weight: 700;
  --fluid-heading-tracking: -0.02em;
}
```

## Tailwind v4

```css
@import "tailwindcss";
@plugin "text-wind";

@theme {
  --fluid-vw-min: 320px;
  --fluid-vw-max: 1280px;
}
```

## Usage

```tsx
<h1 className="font-heading text-fluid-heading text-heading-color">
  Hero title
</h1>

<h2 className="font-display text-fluid-display/80 text-heading-color/90">
  Extreme Display Case
</h2>

<p className="font-body text-fluid-body text-body-color/80">
  Body copy with fluid line-height and proportional tracking.
</p>

<span className="font-overline text-fluid-overline text-muted-color uppercase tracking-widest">
  Section Divider
</span>
```

## Plugin Options

```ts
textwind({
  scales: [50, 60, 70, 80, 90, 100, 110, 120, 150, 200],
  viewportMin: 320,
  viewportMax: 1280,
  textTypes: {
    hero: {
      minSize: '2.5rem',
      maxSize: '5rem',
      minLineHeight: 1.05,
      maxLineHeight: 1.1,
      weight: 800,
      letterSpacing: '-0.03em',
    },
  },
  fontFamilies: {
    heading: '"Inter", system-ui, sans-serif',
  },
  colors: {
    heading: '#0a0a0a',
    accent: '#3b82f6',
  },
  opacitySteps: [10, 20, 30, 40, 50, 60, 70, 80, 90, 95],
});
```

## Docs

- [Getting Started](./docs/getting-started.md)
- [Text Sizing](./docs/text-sizing.md)
- [Font Families](./docs/font-families.md)
- [Colors](./docs/colors.md)
- [Configuration](./docs/configuration.md)
- [Examples](./docs/examples.md)
- [Migration](./docs/migration.md)
- [Publishing and Local Testing](./docs/publishing.md)

## License

MIT
