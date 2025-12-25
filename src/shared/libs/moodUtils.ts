import happyIconUrl from '@shared/assets/happy-icon.svg';
import neutralIconUrl from '@shared/assets/neutral-icon.svg';
import sadIconUrl from '@shared/assets/sad-icon.svg';
import veryHappyIconUrl from '@shared/assets/very-happy-icon.svg';
import verySadIconUrl from '@shared/assets/very-sad-icon.svg';
import { match } from 'ts-pattern';

import type { Mood } from '../common/types';

type MoodData = {
  iconUrl: string;
  alt: string;
  color:
    | 'var(--color-indigo-200)'
    | 'var(--color-green-300)'
    | 'var(--color-red-300)'
    | 'var(--color-amber-300)'
    | 'var(--color-blue-300)';
};
export function getMoodData(mood: Mood) {
  return match<Mood, MoodData>(mood)
    .with('veryHappy', () => ({
      iconUrl: veryHappyIconUrl,
      alt: 'very-happy',
      color: 'var(--color-amber-300)',
    }))
    .with('happy', () => ({
      iconUrl: happyIconUrl,
      alt: 'happy',
      color: 'var(--color-green-300)',
    }))
    .with('neutral', () => ({
      iconUrl: neutralIconUrl,
      alt: 'neutral',
      color: 'var(--color-blue-300)',
    }))
    .with('sad', () => ({
      iconUrl: sadIconUrl,
      alt: 'sad',
      color: 'var(--color-indigo-200)',
    }))
    .with('verySad', () => ({
      iconUrl: verySadIconUrl,
      alt: 'very-sad',
      color: 'var(--color-red-300)',
    }))
    .exhaustive();
}
