import type { CSSProperties } from 'react';

/**
 * Creates a type-safe helper for managing CSS variables in TSX.
 * @param mapping - An object mapping friendly keys to CSS variable names
 */
export function createCustomVars<T extends Record<string, string>>(mapping: T) {
  return (values: Partial<Record<keyof T, string | number>>): CSSProperties => {
    const style: Record<string, string | number> = {};

    for (const [key, value] of Object.entries(values)) {
      if (value !== undefined) {
        const cssVarName = mapping[key as keyof T];
        style[cssVarName] = value;
      }
    }

    return style as CSSProperties;
  };
}
