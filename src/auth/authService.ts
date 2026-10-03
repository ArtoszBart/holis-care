import { DEMO_USERS } from '../demo/credentials';
import AppStorage, { STORAGE_KEYS } from '../lib/storage';
import { type LoginDTO } from '../models/Auth';
import { User } from '../models/User';
import { UserStore } from '../stores/userStore';
import { unauth } from './unauth';

export enum LOGIN_STATE {
  NEEDS_PERSONALIZATION = 'Needs personalization',
  UNAUTHENTICATED = 'Unauthenticated',
  AUTHENTICATED = 'Authenticated',
  OTHER_ERROR = 'Other error',
}

export const login = async (loginData: LoginDTO): Promise<LOGIN_STATE> => {
  const demoUser = DEMO_USERS.find(
    (credentials) =>
      credentials.email === loginData.email &&
      credentials.password === loginData.password,
  );

  if (!demoUser) return LOGIN_STATE.UNAUTHENTICATED;

  if (!demoUser.sex) {
    await AppStorage.set(STORAGE_KEYS.USER, { email: loginData.email });
    return LOGIN_STATE.NEEDS_PERSONALIZATION;
  }

  UserStore.setUser(demoUser as User);
  await AppStorage.set(STORAGE_KEYS.USER, demoUser);
  return LOGIN_STATE.AUTHENTICATED;
};

export const logout = async () => {
  await unauth();
  return true;
};
