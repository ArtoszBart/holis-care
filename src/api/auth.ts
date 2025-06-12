import { axiosCognitoClient } from '../lib/axiosClient';
import {
  type LoginDTO,
  type LoginResponseDTO,
  type RegisterDTO,
} from '../models/Auth';
import {
  handleRequest,
  type AxiosError,
  type AxiosSuccess,
} from '../utils/requests';

export const signInRequest = async (
  loginData: LoginDTO,
): Promise<AxiosError | AxiosSuccess<LoginResponseDTO>> => {
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

export const signUpRequest = async (
  registerData: RegisterDTO,
): Promise<AxiosError | AxiosSuccess> => {
  const headers = {
    'x-amz-target': 'AWSCognitoIdentityProviderService.SignUp',
  };

  const payload = {
    ClientId: process.env.EXPO_PUBLIC_COGNITO_CLIENT_ID,
    Username: registerData.email,
    Password: registerData.password,
  };

  return await handleRequest(
    axiosCognitoClient.post('/', payload, { headers }),
  );
};

export const emailConfirmationRequest = async (
  email: string,
  confirmationCode: string,
): Promise<AxiosError | AxiosSuccess> => {
  const headers = {
    'x-amz-target': 'AWSCognitoIdentityProviderService.ConfirmSignUp',
  };

  const payload = {
    ClientId: process.env.EXPO_PUBLIC_COGNITO_CLIENT_ID,
    Username: email,
    ConfirmationCode: confirmationCode,
  };

  return await handleRequest(
    axiosCognitoClient.post('/', payload, { headers }),
  );
};
