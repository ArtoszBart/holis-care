import { create } from 'zustand';

interface OnboardingNavStore {
  currentNo: number;
  setCurrentNo: (newCurrent: number) => void;
}

const useOnboardingNavStore = create<OnboardingNavStore>((set) => ({
  currentNo: 0,
  setCurrentNo: (newCurrent) => set(() => ({ currentNo: newCurrent })),
}));

export default useOnboardingNavStore;
