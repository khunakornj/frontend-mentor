import type {
  Precipitation,
  Temperature,
  UnionArray,
  UnitType,
  WindSpeed,
} from './types';

export const META_INVALIDATE_QUERY_KEY = 'invalidatesQuery';

export const UNIT_TYPES: UnionArray<UnitType> = ['metric', 'imperial'];
export const TEMPERATURES: UnionArray<Temperature> = [
  'celsius',
  'fahrenheit',
] as const;
export const WIND_SPEEDS: UnionArray<WindSpeed> = ['kmh', 'mph'] as const;
export const PRECIPITATION: UnionArray<Precipitation> = ['mm', 'inch'] as const;
