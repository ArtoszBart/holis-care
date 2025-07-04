import {
  type AxiosError as DefaultAxiosError,
  type AxiosInstance as DefaultAxiosInstance,
  type AxiosResponse as DefaultAxiosResponse,
} from 'axios';

type AxiosSuccess<T = unknown> = { ok: true; status: number; data: T };
type AxiosError = { ok: false; error?: { __type: string } };
export type DefaultAxiosCognitoError = DefaultAxiosError & {
  response: { data: { __type: string } };
};
export type RequestResponse<T = unknown> = Promise<
  AxiosError | AxiosSuccess<T>
>;

export type AxiosMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';
export type ProxiedAxios = {
  [K in AxiosMethod]: <R = unknown>(
    ...args: Parameters<DefaultAxiosInstance[K]>
  ) => Promise<AxiosError | AxiosSuccess<R>>;
} & Omit<DefaultAxiosInstance, AxiosMethod>;

export type { DefaultAxiosInstance, DefaultAxiosResponse };
