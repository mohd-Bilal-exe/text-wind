export type CssPrimitive = string | number;

export interface FluidTextTypeConfig {
  minSize: string;
  maxSize: string;
  minLineHeight: CssPrimitive;
  maxLineHeight: CssPrimitive;
  weight: CssPrimitive;
  letterSpacing: string;
}

export interface TextwindOptions {
  scales?: number[];
  viewportMin?: CssPrimitive;
  viewportMax?: CssPrimitive;
  textTypes?: Record<string, Partial<FluidTextTypeConfig>>;
  fontFamilies?: Record<string, string>;
  colors?: Record<string, string>;
  opacitySteps?: number[];
}

export interface ResolvedTextwindOptions {
  scales: number[];
  viewportMin: string;
  viewportMax: string;
  textTypes: Record<string, FluidTextTypeConfig>;
  fontFamilies: Record<string, string>;
  colors: Record<string, string>;
  opacitySteps: number[];
}

export interface TextGeneratorOptions {
  viewportMin?: CssPrimitive;
  viewportMax?: CssPrimitive;
  type?: Partial<FluidTextTypeConfig>;
}

export interface FontFamilyGeneratorOptions {
  family?: string;
}

export interface ColorGeneratorOptions {
  color?: string;
}
