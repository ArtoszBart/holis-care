import {
  type AxiosResponse,
  type AxiosError as DefaultAxiosError,
} from 'axios';

export type AxiosSuccess = { ok: true; status: number; data: unknown };
export type AxiosError = { ok: false; status: number; error: unknown };

export const handleRequest = async (
  axiosPromise: Promise<AxiosResponse>,
): Promise<AxiosError | AxiosSuccess> => {
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
