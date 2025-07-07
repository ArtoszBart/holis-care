import { create } from 'zustand';
import AppStorage, { STORAGE_KEYS } from '../lib/storage';

interface IAuthStore {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuth: false,
  setIsAuth: async (isAuth: boolean) => {
    set({ isAuth });
    await AppStorage.set(STORAGE_KEYS.IS_AUTH, isAuth);
  },
}));
