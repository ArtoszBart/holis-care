import { signInRequest } from '../api/auth';
import { type LoginDTO } from '../models/Auth';
import { clearTokens, saveTokens } from './tokenStorage';

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
  await clearTokens();
};
