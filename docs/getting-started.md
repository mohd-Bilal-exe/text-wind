# Getting Started

Install `fluidwind`, add the plugin to Tailwind, and define your design tokens with CSS variables.

```ts
import fluidwind from 'fluidwind';

export default {
  plugins: [fluidwind()],
};
```

Use the generated utilities in your markup:

```tsx
<h1 className="font-heading text-fluid-heading text-heading-color">
  Fluid type
</h1>
```
