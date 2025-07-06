import { signInRequest, signOutRequest } from '../api/auth';
import { getSelfRequest } from '../api/user';
import AppStorage, { STORAGE_KEYS } from '../lib/storage';
import { type LoginDTO } from '../models/Auth';
import { clearTokens, getAccessToken, saveTokens } from './tokenStorage';

export enum LOGIN_STATE {
  NEEDS_PERSONALIZATION,
  UNAUTHENTICATED,
  AUTHENTICATED,
  OTHER_ERROR,
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

  await AppStorage.set(STORAGE_KEYS.USER, apiRes.data);
  return LOGIN_STATE.AUTHENTICATED;
};

export const logout = async () => {
  const accessToken = await getAccessToken();
  const response = await signOutRequest(accessToken!);

  if (response.ok) {
    await clearTokens();
    return true;
  }

  return false;
};
