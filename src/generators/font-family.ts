import { DEFAULT_FONT_FAMILIES } from '../defaults';
import type { FontFamilyGeneratorOptions } from '../types';
import { buildSelector, serializeCssRule } from './helpers';

function resolveFontFamily(name: string, override?: string): string {
  return override ?? DEFAULT_FONT_FAMILIES[name] ?? `var(--font-family-${name})`;
}

export function generateFontFamilyDeclarations(name: string, options?: FontFamilyGeneratorOptions): Record<string, string> {
  return {
    fontFamily: resolveFontFamily(name, options?.family),
  };
}

export function generateFontFamilyCSS(name: string, options?: FontFamilyGeneratorOptions): string {
  return serializeCssRule(buildSelector(`font-${name}`), generateFontFamilyDeclarations(name, options));
}
