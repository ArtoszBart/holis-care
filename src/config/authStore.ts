import { create } from 'zustand';

interface IAuthStore {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuth: false,
  setIsAuth: (isAuth: boolean) => set(() => ({ isAuth })),
}));
