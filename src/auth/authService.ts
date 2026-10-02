import { signInRequest, signOutRequest } from '../api/auth';
import { getSelfRequest } from '../api/user';
import { logError } from '../lib/logger';
import AppStorage, { STORAGE_KEYS } from '../lib/storage';
import { type LoginDTO } from '../models/Auth';
import { UserStore } from '../stores/userStore';
import { getAccessToken, saveTokens } from './tokenStorage';
import { unauth } from './unauth';

export enum LOGIN_STATE {
  NEEDS_PERSONALIZATION = 'Needs personalization',
  UNAUTHENTICATED = 'Unauthenticated',
  AUTHENTICATED = 'Authenticated',
  OTHER_ERROR = 'Other error',
}

export const login = async (loginData: LoginDTO): Promise<LOGIN_STATE> => {
  const cognitoRes = await signInRequest(loginData);
  if (!cognitoRes.ok) return LOGIN_STATE.UNAUTHENTICATED;

  const { AccessToken, RefreshToken } = cognitoRes.data.AuthenticationResult;
  await saveTokens(AccessToken, RefreshToken);

  const apiRes = await getSelfRequest();
  if (!apiRes.ok) return LOGIN_STATE.OTHER_ERROR;
  if (apiRes.status === 204) {
    await AppStorage.set(STORAGE_KEYS.USER, { email: loginData.email });
    return LOGIN_STATE.NEEDS_PERSONALIZATION;
  }

  UserStore.setUser(apiRes.data);
  await AppStorage.set(STORAGE_KEYS.USER, apiRes.data);
  return LOGIN_STATE.AUTHENTICATED;
};

export const logout = async () => {
  const accessToken = await getAccessToken();
  const response = await signOutRequest(accessToken!);

  if (response.ok) {
    await unauth();
    return true;
  }

  logError(response);
  console.error('Error while logging out:', response);
  return false;
};
