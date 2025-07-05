import { axiosApiClient } from '../lib/axios';
import { PersonalizationDTO, type User } from '../models/User';

export const getSelfRequest = async () => {
  return await axiosApiClient.get<User>('/users/self');
};

export const createSelfRequest = async (userData: PersonalizationDTO) => {
  return await axiosApiClient.post<User>('/users/self', userData);
};
