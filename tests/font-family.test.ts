import { describe, expect, it } from 'vitest';
import { generateFontFamilyCSS } from '../src/generators/font-family';

describe('Font family utilities', () => {
  it('generates the base heading utility', () => {
    const css = generateFontFamilyCSS('heading');

    expect(css).toContain('font-family');
    expect(css).toContain('var(--font-family-heading)');
  });

  it('supports explicit overrides', () => {
    const css = generateFontFamilyCSS('display', {
      family: '"Playfair Display", serif',
    });

    expect(css).toContain('"Playfair Display", serif');
  });
});
