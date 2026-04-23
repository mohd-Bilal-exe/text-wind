# Migration

If you are replacing a stack of ad hoc responsive text classes, map each role to a Fluidwind token:

- `heading` for hero titles
- `subheading` for section headers
- `body` for paragraphs
- `caption` for helper text

Then swap breakpoints for inline scale modifiers where you need local adjustments.

## From v1.5.0 to v1.6.0

v1.6.0 is a non-breaking minor update that introduces 7 new typography categories.

1. **New Types**: You can now use `display`, `title`, `label`, `overline`, `callout`, `footnote`, and `code`.
2. **CSS Variables**: If you are using custom themes, you may want to define variables for the new types (e.g. `--fluid-display-min`) to take full advantage of the expansion.
