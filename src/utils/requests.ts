import { type AxiosInstance, type AxiosResponse } from 'axios';
import {
  type AxiosCognitoError,
  type AxiosMethod,
  type AxiosSuccess,
  type DefaultAxiosCognitoError,
  type ProxiedAxios,
} from '../lib/axiosTypes';
import { showToast } from '../views/common/toast/toastHelper';

const handleError = (message: string): { ok: false } => {
  showToast(message);
  return { ok: false };
};

export const handleResponse = async <T = unknown>(
  axiosPromise: Promise<AxiosResponse<T>>,
): Promise<AxiosCognitoError | AxiosSuccess<T>> => {
  try {
    const response = await axiosPromise;
    return { ok: true, status: response.status, data: response.data };
  } catch (error: unknown) {
    const axiosError = error as DefaultAxiosCognitoError;

    if (axiosError.code === 'ERR_NETWORK')
      return handleError('Błąd połączenia z internetem');
    if (axiosError.code === 'ECONNABORTED')
      return handleError('Błąd podczas połączenia z serwerem');
    if (!axiosError.response) return handleError('Wystąpił błąd serwera');

    switch (axiosError.response.status) {
      case 400:
        return {
          ok: false,
          error: axiosError.response.data,
        };
      case 429:
        return handleError('Zbyt wiele prób. Spróbuj ponownie później.');
      default:
        console.error(axiosError.response.data);
        return handleError('Wystąpił nieoczekiwany błąd');
    }
  }
};

export const createProxiedAxios = (axios: AxiosInstance): ProxiedAxios => {
  const proxiedAxios = new Proxy(axios, {
    get(target, prop) {
      const value = target[prop as keyof AxiosInstance];

      const handlerFunction = async <T = unknown>(
        ...args: Parameters<AxiosInstance[typeof prop & AxiosMethod]>
      ) => await handleResponse<T>((value as Function).apply(target, args));

      return handlerFunction;
    },
  });

  return proxiedAxios;
};
