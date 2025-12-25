import { uuidV4 } from '@/shared/libs/utils';

export type CardLeftDatum = {
  id: string;
  title: {
    heading: string;
    details: string;
  };
  card: {
    heading: string;
    details: string;
  };
};

export const CARD_LEFT_DATA: CardLeftDatum[] = [
  {
    id: uuidV4(),
    title: {
      heading: 'Average Mood',
      details: '(Last 5 Check-ins)',
    },
    card: {
      heading: 'Keep tracking! ',
      details: 'Log 5 check-ins to see your average mood.',
    },
  },
  {
    id: uuidV4(),
    title: {
      heading: 'Average Sleep',
      details: '(Last 5 Check-ins)',
    },
    card: {
      heading: 'Not enough data yet!',
      details: 'Track 5 nights to view average sleep.',
    },
  },
];
