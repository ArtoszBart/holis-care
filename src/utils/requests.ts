import { type AxiosResponse } from 'axios';
import {
  type AxiosCognitoError,
  type AxiosSuccess,
  type DefaultAxiosCognitoError,
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

    if (axiosError.code === 'ERR_NETWORK') {
      return handleError('Błąd połączenia z internetem');
    } else if (axiosError.code === 'ECONNABORTED') {
      return handleError('Błąd podczas połączenia z serwerem');
    } else if (!axiosError.response) {
      return handleError('Wystąpił błąd serwera');
    } else if (axiosError.response.status === 400) {
      return {
        ok: false,
        error: axiosError.response.data,
      };
    } else if (axiosError.response.status === 429) {
      return handleError('Zbyt wiele prób. Spróbuj ponownie później.');
    } else {
      console.log(axiosError.response.data);
      return handleError('Wystąpił nieoczekiwany błąd');
    }
  }
};
