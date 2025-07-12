import { axiosApiClient } from '../lib/axios';
import { type Tip } from '../models/Tip';

export const getTipsRequest = async () => {
  return await axiosApiClient.get<Tip[]>('/tips');
};
