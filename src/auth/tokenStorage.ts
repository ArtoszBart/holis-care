import AppStorage, { STORAGE_KEYS } from '../lib/storage';

export const saveTokens = async (access: string, refresh: string) => {
  await AppStorage.set(STORAGE_KEYS.ACCESS_TOKEN, access);
  await AppStorage.set(STORAGE_KEYS.REFRESH_TOKEN, refresh);
};

export const getAccessToken = async () => {
  const accessToken = await AppStorage.get<string>(STORAGE_KEYS.ACCESS_TOKEN);
  if (!accessToken) {
    // TODO: unauth
  }

  return accessToken;
};

export const getRefreshToken = async () => {
  const refreshToken = await AppStorage.get<string>(STORAGE_KEYS.REFRESH_TOKEN);
  if (!refreshToken) {
    // TODO: unauth
  }

  return refreshToken;
};

export const clearTokens = async () => {
  await AppStorage.remove(STORAGE_KEYS.ACCESS_TOKEN);
  await AppStorage.remove(STORAGE_KEYS.REFRESH_TOKEN);
};
