import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import fluidwind from '../src';

describe('Integration fixtures', () => {
  it('exports a Tailwind plugin function', () => {
    expect(typeof fluidwind).toBe('function');
  });

  it('contains a v3 build fixture', () => {
    const fixture = readFileSync(join(process.cwd(), 'tests', 'fixtures', 'v3.config.ts'), 'utf8');

    expect(fixture).toContain('fluidwind()');
    expect(fixture).toContain('text-fluid-heading/80');
  });

  it('contains a v4 build fixture', () => {
    const fixture = readFileSync(join(process.cwd(), 'tests', 'fixtures', 'v4.app.css'), 'utf8');

    expect(fixture).toContain('@plugin "../../src/index.ts"');
    expect(fixture).toContain('@import "tailwindcss"');
  });
});
