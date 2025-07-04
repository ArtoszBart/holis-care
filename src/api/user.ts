import { axiosApiClient } from '../lib/axios';
import { type User } from '../models/User';

export const getSelfRequest = async () => {
  return await axiosApiClient.get<User>('/users/self');
};
