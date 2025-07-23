import { axiosApiClient } from '../lib/axios';
import {
  type Appointment,
  type SignUpAppointmentDTO,
} from '../models/Appointment';

export const getAppointmentsRequest = async () => {
  const response = await axiosApiClient.get<Appointment[]>('/appointments');

  if (!response.ok) return response;

  const appointments = response.data.map(
    ({ appointmentDate, validityDate, ...rest }) => ({
      ...rest,
      appointmentDate: appointmentDate ? new Date(appointmentDate) : null,
      validityDate: validityDate ? new Date(validityDate) : null,
    }),
  );

  return {
    ...response,
    data: appointments,
  };
};

export const signUpAppointmentRequest = async (
  appointmentId: string,
  appointmentData: SignUpAppointmentDTO,
) => {
  const response = await axiosApiClient.patch<Appointment>(
    `/appointments/${appointmentId}`,
    appointmentData,
  );

  if (!response.ok) return response;

  const { appointmentDate, validityDate, ...rest } = response.data;

  return {
    ...response,
    data: {
      ...rest,
      appointmentDate: appointmentDate ? new Date(appointmentDate) : null,
      validityDate: validityDate ? new Date(validityDate) : null,
    },
  };
};
