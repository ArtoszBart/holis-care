import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInRequest, signOutRequest } from '../api/auth';
import { getSelfRequest } from '../api/user';
import { type LoginDTO } from '../models/Auth';
import { clearTokens, getAccessToken, saveTokens } from './tokenStorage';

export const NEEDS_PERSONALIZATION = Symbol('NEEDS_PERSONALIZATION');

export const login = async (
  loginData: LoginDTO,
): Promise<boolean | typeof NEEDS_PERSONALIZATION> => {
  const cognitoRes = await signInRequest(loginData);
  if (!cognitoRes.ok) return false;

  const { AccessToken, RefreshToken } = cognitoRes.data.AuthenticationResult;
  await saveTokens(AccessToken, RefreshToken);

  const apiRes = await getSelfRequest();

  if (!apiRes.ok) return false;

  if (apiRes.status === 204) {
    return NEEDS_PERSONALIZATION;
  }

  await AsyncStorage.setItem('user', JSON.stringify(apiRes.data));
  return true;
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
