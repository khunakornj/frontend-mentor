import type { Dispatch, SetStateAction } from 'react';
import type { TupleOf, UnionToTuple } from 'type-fest';

export type UnionArray<T extends string> = Readonly<
  TupleOf<UnionToTuple<T>['length'] & number, T>
>;

export type SortDirection = 'asc' | 'desc' | null;

export type SetStateFn<T> = Dispatch<SetStateAction<T>>;
export type State<T> = [T, SetStateFn<T>];

export type UnitType = 'imperial' | 'metric';

export type Temperature = 'celcius' | 'farenheit';
export type WindSpeed = 'kmh' | 'mph';
export type Precipitation = 'mm' | 'inch';
export type WeatherType =
  | 'drizzle'
  | 'fog'
  | 'overcast'
  | 'partly-cloudy'
  | 'rain'
  | 'snow'
  | 'storm'
  | 'sunny';
