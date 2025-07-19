import { axiosApiClient } from '../lib/axios';
import { type Appointment } from '../models/Appointment';

export const getAppointmentsRequest = async () => {
  return await axiosApiClient.get<Appointment[]>('/appointments');
};
