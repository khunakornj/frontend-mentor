import { match } from 'ts-pattern';
import { create } from 'zustand';

import type {
  Precipitation,
  Temperature,
  UnitType,
  WindSpeed,
} from '@/shared/common/types';

type Store = {
  temperature: Temperature;
  windSpeed: WindSpeed;
  precipitation: Precipitation;
};

type StoreActions = {
  setUnit: (unitType: UnitType) => void;
};

export const useUnitStore = create<Store & StoreActions>()((set) => ({
  temperature: 'celsius',
  windSpeed: 'kmh',
  precipitation: 'mm',

  setUnit: (unitType) =>
    set(
      match(unitType)
        .returnType<Store>()
        .with('metric', () => ({
          temperature: 'celsius',
          windSpeed: 'kmh',
          precipitation: 'mm',
        }))
        .with('imperial', () => ({
          temperature: 'fahrenheit',
          windSpeed: 'mph',
          precipitation: 'inch',
        }))
        .exhaustive(),
    ),
}));
