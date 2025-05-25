import { create } from 'zustand';

// TMP solution
interface IsAuthStore {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

export const useIsAuthStore = create<IsAuthStore>((set) => ({
  isAuth: false,
  setIsAuth: (isAuth: boolean) => set(() => ({ isAuth })),
}));
