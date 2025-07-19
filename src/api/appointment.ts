import { axiosApiClient } from '../lib/axios';
import {
  type Appointment,
  type SignUpAppointmentDTO,
} from '../models/Appointment';

export const getAppointmentsRequest = async () => {
  const response = await axiosApiClient.get<Appointment[]>('/appointments');

  if (response.ok) {
    const appointments = response.data.map((appointment) => ({
      ...appointment,
      appointmentDate: appointment.appointmentDate
        ? new Date(appointment.appointmentDate)
        : null,
      validityDate: appointment.validityDate
        ? new Date(appointment.validityDate)
        : null,
    }));

    return {
      ...response,
      data: appointments,
    };
  }

  return response;
};

export const signUpAppointmentRequest = async (
  appointmentId: string,
  appointmentData: SignUpAppointmentDTO,
) => {
  return await axiosApiClient.patch<Appointment>(
    `/appointments/${appointmentId}`,
    appointmentData,
  );
};
