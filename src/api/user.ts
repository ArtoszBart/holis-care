import { axiosApiClient } from '../lib/axios';
import { type PersonalizationDTO, type User } from '../models/User';

export const getSelfRequest = async () => {
  const response = await axiosApiClient.get<User>('/users/self');

  if (response.ok) {
    response.data = {
      ...response.data,
      dateOfBirth: new Date(response.data.dateOfBirth),
    };
  }

  return response;
};

export const createSelfRequest = async (userData: PersonalizationDTO) => {
  return await axiosApiClient.post<User>('/users/self', userData);
};
