import {
  type AxiosResponse,
  type AxiosError as DefaultAxiosError,
} from 'axios';

export type AxiosSuccess<T = unknown> = { ok: true; status: number; data: T };
export type AxiosError = { ok: false; status: number; error: unknown };

export const handleRequest = async <T = unknown>(
  axiosPromise: Promise<AxiosResponse<T>>,
): Promise<AxiosError | AxiosSuccess<T>> => {
  try {
    const response = await axiosPromise;
    return { ok: true, status: response.status, data: response.data };
  } catch (error: unknown) {
    const axiosError = error as DefaultAxiosError;

    const { status, data } = axiosError.response!;

    return {
      ok: false,
      status,
      error: data,
    };
  }
};
