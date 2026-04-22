import { describe, expect, it } from 'vitest';
import { generateFluidTextCSS } from '../src/generators/text-sizing';

describe('Fluid text sizing', () => {
  it('generates the base utility', () => {
    const css = generateFluidTextCSS('heading', 1);

    expect(css).toContain('clamp(');
    expect(css).toContain('var(--fluid-heading-min)');
    expect(css).toContain('var(--fluid-heading-weight)');
  });

  it('scales all values proportionally', () => {
    const css = generateFluidTextCSS('heading', 0.8);

    expect(css).toContain('calc(var(--fluid-heading-min) * 0.8)');
    expect(css).toContain('calc(var(--fluid-heading-lh-min) * 0.8)');
    expect(css).toContain('calc(var(--fluid-heading-tracking) * 0.8)');
  });

  it('handles arbitrary values', () => {
    const css = generateFluidTextCSS('heading', '[73]');

    expect(css).toContain('* 0.73');
  });

  it('supports custom type overrides', () => {
    const css = generateFluidTextCSS('hero', 1, {
      type: {
        minSize: '2.5rem',
        maxSize: '5rem',
        minLineHeight: 1.05,
        maxLineHeight: 1.1,
        weight: 800,
        letterSpacing: '-0.03em',
      },
      viewportMin: 360,
      viewportMax: 1440,
    });

    expect(css).toContain('2.5rem');
    expect(css).toContain('5rem');
    expect(css).toContain('360px');
    expect(css).toContain('1440px');
  });
});
