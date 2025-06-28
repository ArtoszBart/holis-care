import { type AxiosError as DefaultAxiosError } from 'axios';

export type AxiosSuccess<T = unknown> = { ok: true; status: number; data: T };
export type AxiosCognitoError = { ok: false; error?: { __type: string } };
export type DefaultAxiosCognitoError = DefaultAxiosError & {
  response: { data: { __type: string } };
};
