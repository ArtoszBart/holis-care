import * as SecureStore from 'expo-secure-store';

export const TOKEN_KEYS = Object.freeze({
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
});

export const saveTokens = async (access: string, refresh: string) => {
  await SecureStore.setItemAsync(TOKEN_KEYS.ACCESS_TOKEN, access);
  await SecureStore.setItemAsync(TOKEN_KEYS.REFRESH_TOKEN, refresh);
};

export const getAccessToken = async () => {
  const accessToken = await SecureStore.getItemAsync(TOKEN_KEYS.ACCESS_TOKEN);
  if (!accessToken) {
    // TODO: unauth
  }

  return accessToken;
};

export const getRefreshToken = async () => {
  const refreshToken = await SecureStore.getItemAsync(TOKEN_KEYS.REFRESH_TOKEN);
  if (!refreshToken) {
    // TODO: unauth
  }

  return refreshToken;
};

export const clearTokens = async () => {
  await SecureStore.deleteItemAsync(TOKEN_KEYS.ACCESS_TOKEN);
  await SecureStore.deleteItemAsync(TOKEN_KEYS.REFRESH_TOKEN);
};
