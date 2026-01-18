import { match } from 'ts-pattern';

import type {
  Precipitation,
  Temperature,
  UnitType,
  WindSpeed,
} from '@/shared/common/types';

export function getTemperatureDisplay(temperature: Temperature) {
  return match(temperature)
    .with('celcius', () => 'Celsius (°C)')
    .with('farenheit', () => 'Fahrenheit (°F)')
    .exhaustive();
}

export function getWindSpeedDisplay(windSpeed: WindSpeed) {
  return match(windSpeed)
    .with('kmh', () => 'km/h')
    .with('mph', () => 'mph')
    .exhaustive();
}

export function getPrecipitationDisplay(precipitation: Precipitation) {
  return match(precipitation)
    .with('mm', () => 'Millimeters (mm)')
    .with('inch', () => 'Inches (in)')
    .exhaustive();
}

export function getUnitTypeDisplay(unitType: UnitType) {
  return match(unitType)
    .with('metric', () => 'Switch to imperial')
    .with('imperial', () => 'Switch to metric')
    .exhaustive();
}
