import AppStorage from '../lib/storage';
import { AuthStore } from '../stores/authStore';

export const unauth = async () => {
  AuthStore.unauth();
  await AppStorage.removeAll();
};
