import { axiosCognitoClient } from '../lib/axiosClient';
import { type AxiosCognitoError, type AxiosSuccess } from '../lib/axiosTypes';
import {
  type LoginDTO,
  type LoginResponseDTO,
  type RegisterDTO,
} from '../models/Auth';

export const signInRequest = async (
  loginData: LoginDTO,
): Promise<AxiosCognitoError | AxiosSuccess<LoginResponseDTO>> => {
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

  return await axiosCognitoClient.post('/', payload, { headers });
};

export const signUpRequest = async (
  registerData: RegisterDTO,
): Promise<AxiosCognitoError | AxiosSuccess> => {
  const headers = {
    'x-amz-target': 'AWSCognitoIdentityProviderService.SignUp',
  };

  const payload = {
    ClientId: process.env.EXPO_PUBLIC_COGNITO_CLIENT_ID,
    Username: registerData.email,
    Password: registerData.password,
  };

  return await axiosCognitoClient.post('/', payload, { headers });
};

export const emailConfirmationRequest = async (
  email: string,
  confirmationCode: string,
): Promise<AxiosCognitoError | AxiosSuccess> => {
  const headers = {
    'x-amz-target': 'AWSCognitoIdentityProviderService.ConfirmSignUp',
  };

  const payload = {
    ClientId: process.env.EXPO_PUBLIC_COGNITO_CLIENT_ID,
    Username: email,
    ConfirmationCode: confirmationCode,
  };

  return await axiosCognitoClient.post('/', payload, { headers });
};

export const signOutRequest = async (
  accessToken: string,
): Promise<AxiosCognitoError | AxiosSuccess<LoginResponseDTO>> => {
  const headers = {
    'x-amz-target': 'AWSCognitoIdentityProviderService.GlobalSignOut',
  };

  return await axiosCognitoClient.post(
    '/',
    { AccessToken: accessToken },
    { headers },
  );
};
