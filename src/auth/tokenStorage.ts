import AppStorage, { STORAGE_KEYS } from '../lib/storage';

export const saveTokens = async (access: string, refresh: string) => {
  await AppStorage.set(STORAGE_KEYS.ACCESS_TOKEN, access);
  await AppStorage.set(STORAGE_KEYS.REFRESH_TOKEN, refresh);
};

export const getAccessToken = async () => {
  return await AppStorage.get<string>(STORAGE_KEYS.ACCESS_TOKEN);
};

export const getRefreshToken = async () => {
  return await AppStorage.get<string>(STORAGE_KEYS.REFRESH_TOKEN);
};

export const clearTokens = async () => {
  await AppStorage.remove(STORAGE_KEYS.ACCESS_TOKEN);
  await AppStorage.remove(STORAGE_KEYS.REFRESH_TOKEN);
};
