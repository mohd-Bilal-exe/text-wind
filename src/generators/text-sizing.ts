import { DEFAULT_TEXT_TYPE_TEMPLATE, DEFAULT_TEXT_TYPES } from '../defaults';
import type { FluidTextTypeConfig, TextGeneratorOptions } from '../types';
import {
  buildFluidClamp,
  formatDecimal,
  formatScaleModifierLabel,
  normalizeScaleModifier,
  buildSelector,
  serializeCssRule,
  toCssValue,
  toViewportBound,
} from './helpers';

function resolveTextType(typeName: string, override?: Partial<FluidTextTypeConfig>): FluidTextTypeConfig {
  return {
    ...DEFAULT_TEXT_TYPE_TEMPLATE,
    ...(DEFAULT_TEXT_TYPES[typeName] ?? {}),
    ...(override ?? {}),
  };
}

function resolveViewport(options?: TextGeneratorOptions): { min: string; max: string } {
  return {
    min: toViewportBound(options?.viewportMin, 'var(--fluid-vw-min)'),
    max: toViewportBound(options?.viewportMax, 'var(--fluid-vw-max)'),
  };
}

export function generateFluidTextDeclarations(
  typeName: string,
  scaleModifier: string | number = 1,
  options?: TextGeneratorOptions,
): Record<string, string | number> {
  const type = resolveTextType(typeName, options?.type);
  const viewport = resolveViewport(options);
  const scale = normalizeScaleModifier(scaleModifier);

  return {
    fontSize: buildFluidClamp(type.minSize, type.maxSize, viewport.min, viewport.max, scale, options?.easing ?? type.easing),
    lineHeight: buildFluidClamp(
      toCssValue(type.minLineHeight),
      toCssValue(type.maxLineHeight),
      viewport.min,
      viewport.max,
      scale,
      options?.easing ?? type.easing,
    ),
    fontWeight: toCssValue(type.weight),
    letterSpacing: scale === 1 ? type.letterSpacing : `calc(${type.letterSpacing} * ${formatDecimal(scale)})`,
  };
}

export function generateFluidTextCSS(
  typeName: string,
  scaleModifier: string | number = 1,
  options?: TextGeneratorOptions,
): string {
  const declarations = generateFluidTextDeclarations(typeName, scaleModifier, options);
  const suffix = formatScaleModifierLabel(scaleModifier);
  const className = suffix ? `text-fluid-${typeName}/${suffix}` : `text-fluid-${typeName}`;
  return serializeCssRule(buildSelector(className), declarations);
}
