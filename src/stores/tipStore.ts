import { create } from 'zustand';
import { getTipsRequest, likeTipRequest, unlikeTipRequest } from '../api/tips';
import { type Tip } from '../models/Tip';
import { showToast } from '../views/common/toast';

type TipStore = {
  tips: Tip[] | undefined;
  isFetching: boolean;
  isRefreshing: boolean;
  fetchTips: () => Promise<void>;
  toggleLikeTip: (id: string, value: boolean) => Promise<boolean>;
};

export const useTipStore = create<TipStore>((set, get) => ({
  tips: [],
  isFetching: true,
  isRefreshing: false,

  fetchTips: async () => {
    const { isFetching } = get();
    if (!isFetching) {
      set({ isRefreshing: true });
    }

    const response = await getTipsRequest();

    if (!isFetching) {
      set({ isRefreshing: false });
    } else {
      set({ isFetching: false });
    }

    if (response.ok) {
      set({ tips: response.data });
    }
  },

  toggleLikeTip: async (id: string, newValue: boolean) => {
    const response = newValue
      ? await likeTipRequest(id)
      : await unlikeTipRequest(id);

    if (!response.ok) {
      showToast('Wystąpił nieoczekiwany błąd');
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
