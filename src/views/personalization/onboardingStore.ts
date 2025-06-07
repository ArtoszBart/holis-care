import { create } from 'zustand';
import { type PersonalizationDTO } from '../../models/User';

interface PersonalizationStore {
  data: Partial<PersonalizationDTO>;
  setData: (newData: Partial<PersonalizationDTO>) => void;
}

export const usePersonalizationStore = create<PersonalizationStore>((set) => ({
  data: {},
  setData: (newData) =>
    set((state) => ({
      data: { ...state.data, ...newData },
    })),
}));
