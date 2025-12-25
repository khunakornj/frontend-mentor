import type { Dayjs as DayjsLib } from 'dayjs';
import type { Dispatch, SetStateAction } from 'react';

export type SortDirection = 'asc' | 'desc' | null;

export type SetStateFn<T> = Dispatch<SetStateAction<T>>;
export type State<T> = [T, SetStateFn<T>];

export type Mood = 'veryHappy' | 'happy' | 'neutral' | 'sad' | 'verySad';
export type Dayjs = DayjsLib;
