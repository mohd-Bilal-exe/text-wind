# Textwind Documentation Site

This is the interactive documentation and reference site for Textwind.

## Features

- **Interactive Registry**: Live preview of all 11 fluid typography types.
- **Modifier Testing**: Visual test suite for scale and opacity modifiers.
- **Fluid Curvature (Easing)**: Support for `linear`, `in`, `out`, and `in-out` scaling.
- **Design System Reference**: Technical details on variables and tokens.

## Development

```bash
cd doc-site
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

## Structure

- `src/components/SECTIONS/`: Individual reference and showcase sections.
- `src/App.tsx`: Main layout and vertical scrolling choreography.
- `src/index.css`: Design tokens and custom scroll styles for the registry.
