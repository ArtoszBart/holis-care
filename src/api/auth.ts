import { axiosCognitoClient } from '../lib/axiosClient';
import { type LoginDTO } from '../models/Auth';
import {
  type AxiosError,
  type AxiosSuccess,
  handleRequest,
} from '../utils/requests';

export const signInRequest = async (
  loginData: LoginDTO,
): Promise<AxiosError | AxiosSuccess> => {
  const headers = {
    'x-amz-target': 'AWSCognitoIdentityProviderService.InitiateAuth',
  };

  const payload = {
    AuthParameters: {
      USERNAME: loginData.email,
      PASSWORD: loginData.password,
    },
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: process.env.EXPO_PUBLIC_COGNITO_CLIENT_ID,
  };

  return await handleRequest(
    axiosCognitoClient.post('/', payload, { headers }),
  );
};
