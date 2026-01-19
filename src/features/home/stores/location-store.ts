import { create } from 'zustand';

type Store = {
  latitude: number;
  longtitude: number;
  country: string;
};

type StoreAction = {
  setLocation: (latLong: Store) => void;
};

export const useLocationStore = create<Store & StoreAction>()((set) => ({
  // default to bangkok
  latitude: 13.75,
  longtitude: 100.5,
  country: 'Bangkok, Thailand',

  setLocation: (location) => set(location),
}));
