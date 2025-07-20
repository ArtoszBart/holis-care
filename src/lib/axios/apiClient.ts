import axios from 'axios';
import { refreshTokens } from '../../auth/tokenService';
import { getAccessToken } from '../../auth/tokenStorage';
import { createProxiedAxios } from './requests';

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

let isRefreshing = false;
let failedQueue: {
  resolve: (value?: unknown) => void;
  reject: (error: unknown) => void;
}[] = [];

const processQueue = (error?: unknown) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve();
  });

  failedQueue = [];
};

rawAxiosApiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status !== 401 || originalRequest._retry) {
      return await Promise.reject(error);
    }

    if (isRefreshing) {
      return await new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then(() => rawAxiosApiClient(originalRequest))
        .catch((err) => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    const tokenSucceeded = await refreshTokens();
    if (!tokenSucceeded) {
      processQueue('Token refresh failed');
      isRefreshing = false;
      return await Promise.reject(error);
    }

    processQueue();
    const response = await rawAxiosApiClient(originalRequest);

    isRefreshing = false;
    return response;
  },
);

export const axiosApiClient = createProxiedAxios(rawAxiosApiClient);
