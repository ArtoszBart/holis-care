import { create } from 'zustand';
import { tips as tipsMock } from '../mocks/tips';
import { type Tip } from '../models/Tip';

type TipStore = {
  tips: Tip[] | undefined;
  setTips: (newTips: Tip[]) => Promise<void>;
  toggleLikeTip: (id: string, value: boolean) => Promise<boolean>;
};

export const useTipStore = create<TipStore>((set, get) => ({
  tips: tipsMock,

  setTips: async (newTips: Tip[]) => {
    set({ tips: newTips });
  },

  toggleLikeTip: async (id: string, newValue: boolean) => {
    const { tips } = get();
    const newTips = [...(tips ?? [])];
    const index = newTips.findIndex((tip) => tip.id === id);
    if (index !== -1) {
      newTips[index] = { ...newTips[index], userLiked: newValue };
    }

    set({ tips: [...newTips] });
    return true;
  },
}));
