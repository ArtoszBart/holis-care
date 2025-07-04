import axios from 'axios';
import { getAccessToken } from '../auth/tokenStorage';
import { createProxiedAxios } from '../utils/requests';

const rawAxiosApiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 5000,
});

rawAxiosApiClient.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const axiosApiClient = createProxiedAxios(rawAxiosApiClient);
