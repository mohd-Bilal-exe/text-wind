import type { CssPrimitive, EasingCurve } from '../types';

export function formatDecimal(value: number): string {
  if (!Number.isFinite(value)) {
    return '1';
  }

  const rounded = Number(value.toFixed(6));
  return String(rounded).replace(/\.0+$/, '').replace(/(\.\d*?)0+$/, '$1');
}

export function toCssValue(value: CssPrimitive): string {
  return typeof value === 'number' ? formatDecimal(value) : value.trim();
}

export function toViewportBound(value: CssPrimitive | undefined, fallback: string): string {
  if (value === undefined) {
    return fallback;
  }

  if (typeof value === 'number') {
    return `${formatDecimal(value)}px`;
  }

  const trimmed = value.trim();
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
    return `${trimmed}px`;
  }

  return trimmed;
}

export function normalizeScaleModifier(modifier: string | number | undefined | null): number {
  if (modifier === undefined || modifier === null) {
    return 1;
  }

  if (typeof modifier === 'number') {
    return modifier >= 10 ? modifier / 100 : modifier;
  }

  let value = modifier.trim();

  if (value.startsWith('[') && value.endsWith(']')) {
    value = value.slice(1, -1).trim();
  }

  if (value.endsWith('%')) {
    value = value.slice(0, -1).trim();
  }

  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return 1;
  }

  return parsed >= 10 ? parsed / 100 : parsed;
}

export function formatScaleModifierLabel(modifier: string | number | undefined | null): string {
  if (modifier === undefined || modifier === null) {
    return '';
  }

  if (typeof modifier === 'string') {
    const trimmed = modifier.trim();
    if (trimmed === '1') {
      return '';
    }

    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      return trimmed;
    }

    const parsed = Number(trimmed.replace(/%$/, ''));
    if (Number.isFinite(parsed)) {
      return formatDecimal((parsed >= 10 ? parsed / 100 : parsed) * 100);
    }
  }

  const factor = normalizeScaleModifier(modifier);

  if (factor === 1) {
    return '';
  }

  return formatDecimal(factor * 100);
}

export function scaledCalc(value: string, factor: number): string {
  if (factor === 1) {
    return value;
  }

  return `calc(${value} * ${formatDecimal(factor)})`;
}

export function buildFluidClamp(
  min: string,
  max: string,
  viewportMin: string,
  viewportMax: string,
  factor: number,
  easing: EasingCurve = 'linear',
): string {
  const scaledMin = scaledCalc(min, factor);
  const scaledMax = scaledCalc(max, factor);

  const p = `((100vw - ${viewportMin}) / (${viewportMax} - ${viewportMin}))`;

  let easedP = p;

  if (easing === 'in') {
    easedP = `(${p} * ${p})`;
  } else if (easing === 'out') {
    easedP = `(1 - (1 - ${p}) * (1 - ${p}))`;
  } else if (easing === 'in-out') {
    easedP = `(${p} * ${p} * (3 - 2 * ${p}))`;
  }

  return `clamp(${scaledMin}, calc(${scaledMin} + (${scaledMax} - ${scaledMin}) * ${easedP}), ${scaledMax})`;
}

export function buildOpacityColor(color: string, opacity: number): string {
  if (opacity >= 1) {
    return color;
  }

  return `rgb(from ${color} r g b / ${formatDecimal(opacity)})`;
}

export function escapeClassName(className: string): string {
  return className.replace(/[^A-Za-z0-9_-]/g, (char) => `\\${char}`);
}

export function buildSelector(className: string): string {
  return `.${escapeClassName(className)}`;
}

export function toKebabCase(value: string): string {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

export function serializeCssRule(selector: string, declarations: Record<string, string | number>): string {
  const body = Object.entries(declarations)
    .map(([property, value]) => `  ${toKebabCase(property)}: ${value};`)
    .join('\n');

  return `${selector} {\n${body}\n}`;
}
