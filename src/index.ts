import plugin from 'tailwindcss/plugin';
import { DEFAULT_COLORS, DEFAULT_FONT_FAMILIES, DEFAULT_OPACITY_STEPS, DEFAULT_SCALES, DEFAULT_TEXT_TYPES } from './defaults';
import { generateColorDeclarations, generateColorCSS } from './generators/colors';
import { generateFontFamilyDeclarations, generateFontFamilyCSS } from './generators/font-family';
import { generateFluidTextDeclarations, generateFluidTextCSS } from './generators/text-sizing';
import {
  buildSelector,
  escapeClassName,
  formatDecimal,
  normalizeScaleModifier,
  toCssValue,
  toViewportBound,
} from './generators/helpers';
import type {
  FluidTextTypeConfig,
  TextwindOptions,
  ResolvedTextwindOptions,
} from './types';

export type {
  ColorGeneratorOptions,
  CssPrimitive,
  FluidTextTypeConfig,
  TextwindOptions,
  ResolvedTextwindOptions,
  TextGeneratorOptions,
} from './types';

export {
  DEFAULT_COLORS,
  DEFAULT_FONT_FAMILIES,
  DEFAULT_OPACITY_STEPS,
  DEFAULT_SCALES,
  DEFAULT_TEXT_TYPES,
  generateColorCSS,
  generateColorDeclarations,
  generateFontFamilyCSS,
  generateFontFamilyDeclarations,
  generateFluidTextCSS,
  generateFluidTextDeclarations,
  buildSelector,
  escapeClassName,
  formatDecimal,
  normalizeScaleModifier,
  toCssValue,
  toViewportBound,
};

function normalizeTextTypeConfig(
  typeName: string,
  override?: Partial<FluidTextTypeConfig>,
): FluidTextTypeConfig {
  const fallback = DEFAULT_TEXT_TYPES[typeName] ?? {
    minSize: '1rem',
    maxSize: '1.25rem',
    minLineHeight: 1.2,
    maxLineHeight: 1.4,
    weight: 400,
    letterSpacing: '0em',
  };

  return {
    ...fallback,
    ...(override ?? {}),
  };
}

function resolveOptions(options: TextwindOptions = {}): ResolvedTextwindOptions {
  const scales = (options.scales?.length ? options.scales : DEFAULT_SCALES).map((value) => Number(value)).filter((value) => Number.isFinite(value));
  const opacitySteps = (options.opacitySteps?.length ? options.opacitySteps : DEFAULT_OPACITY_STEPS)
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value));

  const textTypeNames = new Set<string>([
    ...Object.keys(DEFAULT_TEXT_TYPES),
    ...Object.keys(options.textTypes ?? {}),
  ]);

  const textTypes = Object.fromEntries(
    Array.from(textTypeNames, (typeName) => [
      typeName,
      normalizeTextTypeConfig(typeName, options.textTypes?.[typeName]),
    ]),
  ) as Record<string, FluidTextTypeConfig>;

  const fontFamilies = {
    ...DEFAULT_FONT_FAMILIES,
    ...(options.fontFamilies ?? {}),
  };

  const colors = {
    ...DEFAULT_COLORS,
    ...(options.colors ?? {}),
  };

  return {
    scales,
    opacitySteps,
    viewportMin: toViewportBound(options.viewportMin, 'var(--fluid-vw-min)'),
    viewportMax: toViewportBound(options.viewportMax, 'var(--fluid-vw-max)'),
    textTypes,
    fontFamilies,
    colors,
  };
}

function buildFontFamilyUtilities(resolved: ResolvedTextwindOptions): Record<string, Record<string, string>> {
  return Object.fromEntries(
    Object.entries(resolved.fontFamilies).map(([name, family]) => [
      buildSelector(`font-${name}`),
      generateFontFamilyDeclarations(name, { family }),
    ]),
  );
}

const textwind: any = plugin.withOptions<TextwindOptions>(
  (options = {}) => {
    const resolved = resolveOptions(options);
    const utilities = buildFontFamilyUtilities(resolved);

    return ({ addUtilities, matchUtilities }: any) => {
      addUtilities(utilities as any);

      for (const [typeName, typeConfig] of Object.entries(resolved.textTypes)) {
        const matchers: any = {
          [`text-fluid-${typeName}`]: (_value: string, { modifier }: { modifier: string | null }) =>
            generateFluidTextDeclarations(typeName, modifier ?? 1, {
              type: typeConfig,
              viewportMin: resolved.viewportMin,
              viewportMax: resolved.viewportMax,
            }),
        };

        matchUtilities(
          matchers,
          {
            values: { DEFAULT: '' },
            modifiers: 'any',
          } as any,
        );
      }

      for (const [name, color] of Object.entries(resolved.colors)) {
        const matchers: any = {
          [`text-${name}-color`]: (_value: string, { modifier }: { modifier: string | null }) =>
            generateColorDeclarations(name, modifier ?? 1, { color }),
        };

        matchUtilities(
          matchers,
          {
            values: { DEFAULT: '' },
            modifiers: 'any',
          } as any,
        );
      }
    };
  },
);

export default textwind;
