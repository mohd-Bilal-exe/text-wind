# Text Sizing

Fluidwind ships four core text utilities:

- `text-fluid-display`
- `text-fluid-heading`
- `text-fluid-subheading`
- `text-fluid-title`
- `text-fluid-body`
- `text-fluid-label`
- `text-fluid-overline`
- `text-fluid-callout`
- `text-fluid-caption`
- `text-fluid-footnote`
- `text-fluid-code`

Use inline scale modifiers for quick adjustments:

```tsx
<h1 className="text-fluid-heading/80">Smaller hero</h1>
<h1 className="text-fluid-heading/73">Arbitrary scale</h1>
```

The scale changes font size, line-height, and letter-spacing together.

## Fluid Curvature (Easing)

By default, text scales **linearly** between viewports. You can change this "curvature" to make growth more dramatic or smooth using the `easing` option:

- `linear`: Standard linear scaling (Default)
- `in`: Starts slow, ends fast (Quadratic)
- `out`: Starts fast, ends slow (Quadratic)
- `in-out`: Smooth start and end (Smoothstep)

Configure it in your Tailwind config or CSS:

```css
@plugin "text-wind" {
  easing: "in-out"
}
```
