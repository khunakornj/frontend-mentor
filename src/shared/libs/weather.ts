import drizzleIcon from '@assets/icon-drizzle.webp';
import fogIcon from '@assets/icon-fog.webp';
import overcastIcon from '@assets/icon-overcast.webp';
import partlyIcon from '@assets/icon-partly-cloudy.webp';
import rainIcon from '@assets/icon-rain.webp';
import snowIcon from '@assets/icon-snow.webp';
import stormIcon from '@assets/icon-storm.webp';
import sunnyIcon from '@assets/icon-sunny.webp';
import { match, P } from 'ts-pattern';

import type { WeatherType } from '../common/types';

// sunny	0	Clear sky
// partly-cloudy	1, 2	Mainly clear and partly cloudy
// overcast	3	Full cloud cover
// fog	45, 48	Foggy conditions
// drizzle	51 – 57	Light precipitation
// rain	61 – 67, 80 – 82	Rain and heavy showers
// snow	71 – 77, 85 – 86	Snow fall and snow showers
// storm	95 – 99	Thunderstorms
export function getWeatherType(weatherCode: number) {
  return match(weatherCode)
    .returnType<WeatherType>()
    .with(0, () => 'sunny')
    .with(P.union(1, 2), () => 'partly-cloudy')
    .with(3, () => 'overcast')
    .with(P.union(45, 48), () => 'fog')
    .with(P.number.between(51, 57), () => 'drizzle')
    .with(
      P.union(P.number.between(61, 67), P.number.between(80, 82)),
      () => 'rain',
    )
    .with(
      P.union(P.number.between(71, 77), P.number.between(85, 86)),
      () => 'snow',
    )
    .with(P.union(95, 96, 99), () => 'storm')
    .otherwise(() => 'sunny');
}

export function getWeatherIcon(weatherType: WeatherType) {
  return match(weatherType)
    .with('drizzle', () => drizzleIcon)
    .with('fog', () => fogIcon)
    .with('overcast', () => overcastIcon)
    .with('partly-cloudy', () => partlyIcon)
    .with('rain', () => rainIcon)
    .with('snow', () => snowIcon)
    .with('storm', () => stormIcon)
    .with('sunny', () => sunnyIcon)
    .exhaustive();
}

export function getWeatherInfo(weatherCode: number) {
  const weatherType = getWeatherType(weatherCode);
  const weatherIcon = getWeatherIcon(weatherType);

  return {
    weatherType,
    weatherIcon,
  };
}
