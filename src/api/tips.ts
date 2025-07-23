import { axiosApiClient } from '../lib/axios';
import { type Tip } from '../models/Tip';

export const getTipsRequest = async () => {
  return await axiosApiClient.get<Tip[]>('/tips');
};

export const likeTipRequest = async (tipId: string) => {
  return await axiosApiClient.post<Tip>(`/tips/${tipId}/like`);
};

export const unlikeTipRequest = async (tipId: string) => {
  return await axiosApiClient.delete<Tip>(`/tips/${tipId}/like`);
};
