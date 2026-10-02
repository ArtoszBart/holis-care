import { create } from 'zustand';
import { getAppointmentsRequest } from '../api/appointment';
import { type Appointment } from '../models/Appointment';
import { showToast, TOAST_TYPE } from '../views/common/toast';

type AppointmentStore = {
  storedAppointments: Appointment[];
  updateAppointment: (newAppointment: Appointment) => Promise<void>;
  setAppointments: (newAppointments: Appointment[]) => void;
  fetchAppointments: () => Promise<void>;
};

export const useAppointmentStore = create<AppointmentStore>((set, get) => ({
  storedAppointments: [],

  setAppointments: (newAppointments: Appointment[]) => {
    set({ storedAppointments: newAppointments });
  },

  updateAppointment: async (newAppointment: Appointment) => {
    const { storedAppointments: appointments } = get();
    const newAppointments = [...(appointments ?? [])];
    const index = newAppointments.findIndex(
      (appointment) => appointment.id === newAppointment.id,
    );

    if (index !== -1) {
      newAppointments[index] = newAppointment;
    }

    set({ storedAppointments: [...newAppointments] });
  },

  fetchAppointments: async () => {
    const appointmentsResponse = await getAppointmentsRequest();
    if (appointmentsResponse.ok) {
      set({ storedAppointments: appointmentsResponse.data });
    } else {
      showToast('Wystąpił błąd podczas pobierania danych', TOAST_TYPE.WARN);
    }
  },
}));
