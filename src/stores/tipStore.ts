import { create } from 'zustand';
import { likeTipRequest, unlikeTipRequest } from '../api/tips';
import { type Tip } from '../models/Tip';
import { showToast } from '../views/common/toast';

type TipStore = {
  tips: Tip[] | undefined;
  setTips: (newTips: Tip[]) => Promise<void>;
  toggleLikeTip: (id: string, value: boolean) => Promise<boolean>;
};

export const useTipStore = create<TipStore>((set, get) => ({
  tips: [],

  setTips: async (newTips: Tip[]) => {
    set({ tips: newTips });
  },

  toggleLikeTip: async (id: string, newValue: boolean) => {
    const response = newValue
      ? await likeTipRequest(id)
      : await unlikeTipRequest(id);

    if (!response.ok) {
      showToast();
      return false;
    }

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
