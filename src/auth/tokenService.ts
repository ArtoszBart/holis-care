import { refreshTokensRequest } from '../api/auth';
import { showToast, TOAST_TYPE } from '../views/common/toast';
import { getRefreshToken, saveTokens } from './tokenStorage';
import { unauth } from './unauth';

export const refreshTokens = async (): Promise<string | undefined> => {
  const refreshToken = await getRefreshToken();

  const cognitoRes = await refreshTokensRequest(refreshToken!);
  if (!cognitoRes.ok) {
    showToast('Zaloguj się ponownie', TOAST_TYPE.WARN);
    await unauth();
    return;
  }

  // TODO: add RefreshToken rotation
  const newAccessToken = cognitoRes.data.AuthenticationResult.AccessToken;
  await saveTokens(newAccessToken, refreshToken!);

  return newAccessToken;
};
