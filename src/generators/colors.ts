import { DEFAULT_COLORS } from '../defaults';
import type { ColorGeneratorOptions } from '../types';
import { buildOpacityColor, buildSelector, formatScaleModifierLabel, normalizeScaleModifier, serializeCssRule } from './helpers';

function resolveColor(name: string, override?: string): string {
  return override ?? DEFAULT_COLORS[name] ?? `var(--color-text-${name})`;
}

export function generateColorDeclarations(
  name: string,
  opacity: string | number = 1,
  options?: ColorGeneratorOptions,
): Record<string, string> {
  const color = resolveColor(name, options?.color);
  const resolvedOpacity = normalizeScaleModifier(opacity);

  return {
    color: buildOpacityColor(color, resolvedOpacity),
  };
}

export function generateColorCSS(
  name: string,
  opacity: string | number = 1,
  options?: ColorGeneratorOptions,
): string {
  const suffix = formatScaleModifierLabel(opacity);
  const className = suffix ? `text-${name}-color/${suffix}` : `text-${name}-color`;
  return serializeCssRule(buildSelector(className), generateColorDeclarations(name, opacity, options));
}
