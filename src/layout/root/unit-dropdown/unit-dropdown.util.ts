import { match } from 'ts-pattern';

import type {
  Precipitation,
  Temperature,
  UnitType,
  WindSpeed,
} from '@/shared/common/types';

export function getTemperatureLabel(temperature: Temperature) {
  return match(temperature)
    .with('celcius', () => 'Celsius (°C)')
    .with('farenheit', () => 'Fahrenheit (°F)')
    .exhaustive();
}

export function getWindSpeedLabel(windSpeed: WindSpeed) {
  return match(windSpeed)
    .with('kmh', () => 'km/h')
    .with('mph', () => 'mph')
    .exhaustive();
}

export function getPrecipitationLabel(precipitation: Precipitation) {
  return match(precipitation)
    .with('mm', () => 'Millimeters (mm)')
    .with('inch', () => 'Inches (in)')
    .exhaustive();
}

export function getUnitTypeLabel(unitType: UnitType) {
  return match(unitType)
    .with('metric', () => 'Switch to Imperial')
    .with('imperial', () => 'Switch to Metric')
    .exhaustive();
}
