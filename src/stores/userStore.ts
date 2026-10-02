import { create } from 'zustand';
import { type User } from '../models/User';

interface IUserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export const UserStore = {
  setUser: (user: User) => useUserStore.getState().setUser(user),
};
