# Text Sizing

Fluidwind ships four core text utilities:

- `text-fluid-heading`
- `text-fluid-subheading`
- `text-fluid-body`
- `text-fluid-caption`

Use inline scale modifiers for quick adjustments:

```tsx
<h1 className="text-fluid-heading/80">Smaller hero</h1>
<h1 className="text-fluid-heading/[73]">Arbitrary scale</h1>
```

The scale changes font size, line-height, and letter-spacing together.
