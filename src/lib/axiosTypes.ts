import { AxiosInstance, type AxiosError as DefaultAxiosError } from 'axios';

export type AxiosSuccess<T = unknown> = { ok: true; status: number; data: T };
export type AxiosCognitoError = { ok: false; error?: { __type: string } };
export type DefaultAxiosCognitoError = DefaultAxiosError & {
  response: { data: { __type: string } };
};

export type AxiosMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';
export type ProxiedAxios = {
  [K in AxiosMethod]: <R = unknown>(
    ...args: Parameters<AxiosInstance[K]>
  ) => Promise<AxiosCognitoError | AxiosSuccess<R>>;
} & Omit<AxiosInstance, AxiosMethod>;
