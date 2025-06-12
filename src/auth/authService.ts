import { signInRequest, signOutRequest } from '../api/auth';
import { type LoginDTO } from '../models/Auth';
import { clearTokens, getAccessToken, saveTokens } from './tokenStorage';

export const login = async (loginData: LoginDTO) => {
  const response = await signInRequest(loginData);

  if (response.ok) {
    const { AccessToken, RefreshToken } = response.data.AuthenticationResult;
    await saveTokens(AccessToken, RefreshToken);

    return true;
  }

  return false;
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
