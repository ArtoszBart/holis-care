import { unauth } from '../../auth/unauth';
import { showToast, TOAST_TYPE } from '../../views/common/toast';
import { logError } from '../logger';
import {
  type AxiosMethod,
  type DefaultAxiosCognitoError,
  type DefaultAxiosInstance,
  type DefaultAxiosResponse,
  type ProxiedAxios,
  type RequestResponse,
} from './types';

const handleError = (message: string): { ok: false } => {
  showToast(message);
  return { ok: false };
};

const handleResponse = async <T = unknown>(
  axiosPromise: Promise<DefaultAxiosResponse<T>>,
): RequestResponse<T> => {
  try {
    const response = await axiosPromise;
    return { ok: true, status: response.status, data: response.data };
  } catch (error: unknown) {
    const axiosError = error as DefaultAxiosCognitoError;

    if (axiosError.code === 'ECONNABORTED' || axiosError.code === 'ERR_NETWORK')
      return handleError('Błąd podczas łączenia z serwerem');
    if (!axiosError.response) return handleError('Błąd serwera');

    switch (axiosError.response.status) {
      case 400:
        showToast('Formularz zawiera błędy');
        return {
          ok: false,
          error: axiosError.response.data,
        };
      case 401:
      case 403:
        showToast('Sesja wygasła. Zaloguj się ponownie.', TOAST_TYPE.WARN);
        await unauth();
        return { ok: false };
      case 429:
        return handleError('Zbyt wiele prób. Spróbuj ponownie później');
      default:
        logError(error);
        console.error('Default request error:', axiosError.response);
        return handleError('Wystąpił nieoczekiwany błąd');
    }
  }
};

export const createProxiedAxios = (
  axios: DefaultAxiosInstance,
): ProxiedAxios => {
  const proxiedAxios = new Proxy(axios, {
    get(target, prop) {
      const value = target[prop as keyof DefaultAxiosInstance];

      const handlerFunction = async <T = unknown>(
        ...args: Parameters<DefaultAxiosInstance[typeof prop & AxiosMethod]>
      ) => await handleResponse<T>((value as Function).apply(target, args));

      return handlerFunction;
    },
  });

  return proxiedAxios;
};
