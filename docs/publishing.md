# Publishing and Local Testing

Use this guide when you want to verify `fluidwind` locally before publishing it to npm.

## Local Setup

Install dependencies:

```bash
npm install
```

Build the package:

```bash
npm run build
```

Run tests:

```bash
npm test
```

Type-check the source:

```bash
npm run typecheck
```

## Test the Package Locally

### Option 1: Use `npm pack`

Create a tarball from the built package:

```bash
npm pack
```

This produces a file like:

```bash
fluidwind-0.1.0.tgz
```

Install the tarball into another project:

```bash
npm install /full/path/to/fluidwind-0.1.0.tgz
```

### Option 2: Use `npm link`

From this repository:

```bash
npm link
```

Then in the consuming project:

```bash
npm link fluidwind
```

Use `npm pack` if you want to test the exact publish artifact. Use `npm link` if you want fast iteration while developing.

## Verify Tailwind Integration

### Tailwind v3.4+

```ts
import fluidwind from 'fluidwind';

export default {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  plugins: [fluidwind()],
};
```

### Tailwind v4.x

```css
@import "tailwindcss";
@plugin "fluidwind";
```

Then use classes like:

```tsx
<h1 className="font-heading text-fluid-heading/80 text-heading-color">
  Hello
</h1>
```

## Publish to npm

Make sure the package is ready:

```bash
npm run build
npm test
npm run typecheck
```

Confirm the files that will be published:

```bash
npm pack --dry-run
```

Publish:

```bash
npm publish --access public
```

If this is the first release, tag it after publishing:

```bash
git tag v0.1.0
git push origin v0.1.0
```

## Release Checklist

- `README.md` is current
- `LICENSE` is present
- `CHANGELOG.md` includes the release entry
- `dist/` builds successfully
- Package works with `npm pack`
- Tailwind v3.4+ and v4.x examples load correctly
