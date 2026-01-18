import { match } from 'ts-pattern';
import { create } from 'zustand';

import type {
  Precipitation,
  Temperature,
  UnitType,
  WindSpeed,
} from '../common/types';

type Store = {
  temperature: Temperature;
  windSpeed: WindSpeed;
  precipitation: Precipitation;
};

type StoreActions = {
  setUnit: (unitType: UnitType) => void;
};

export const useUnitStore = create<Store & StoreActions>()((set) => ({
  temperature: 'celcius',
  windSpeed: 'kmh',
  precipitation: 'mm',

  setUnit: (unitType) =>
    set(
      match(unitType)
        .returnType<Store>()
        .with('metric', () => ({
          temperature: 'celcius',
          windSpeed: 'kmh',
          precipitation: 'mm',
        }))
        .with('imperial', () => ({
          temperature: 'farenheit',
          windSpeed: 'mph',
          precipitation: 'inch',
        }))
        .exhaustive(),
    ),
}));
