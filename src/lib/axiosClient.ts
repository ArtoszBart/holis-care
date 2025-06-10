import axios from 'axios';
import { showToast } from '../views/common/toast/toastHelper';

export const axiosCognitoClient = axios.create({
  baseURL: 'https://cognito-idp.eu-central-1.amazonaws.com',
  headers: {
    'content-type': 'application/x-amz-json-1.1',
  },
});

axiosCognitoClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!axios.isAxiosError(error)) {
      console.error(error);
      return showToast('Wystąpił nieoczekiwany błąd');
    }

    const { code, response } = error;
    if (code === 'ERR_NETWORK') {
      showToast('Błąd połączenia z internetem');
    } else if (code === 'ECONNABORTED') {
      showToast('Błąd podczas połączenia z serwerem');
    } else if (!response) {
      showToast('Wystąpił błąd serwera');
    } else if (response.status === 429) {
      showToast('Zbyt wiele prób. Spróbuj ponownie później.');
    } else {
      console.log(error.response!.data);
    }

    return Promise.reject(error);
  },
);
