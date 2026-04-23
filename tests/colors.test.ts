import { describe, expect, it } from 'vitest';
import { generateColorCSS } from '../src/generators/colors';

describe('Color utilities', () => {
  it('generates the base utility', () => {
    const css = generateColorCSS('heading');

    expect(css).toContain('color: var(--color-fluid-heading);');
  });

  it('generates opacity modifiers', () => {
    const css = generateColorCSS('heading', 0.8);

    expect(css).toContain('rgb(from var(--color-fluid-heading) r g b / 0.8)');
  });

  it('supports arbitrary opacity modifiers', () => {
    const css = generateColorCSS('accent', '[45]');

    expect(css).toContain('rgb(from var(--color-fluid-accent) r g b / 0.45)');
  });
});
