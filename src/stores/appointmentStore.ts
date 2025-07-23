import { create } from 'zustand';
import { type Appointment } from '../models/Appointment';

type AppointmentStore = {
  storedAppointments: Appointment[];
  signUpAppointment: (newAppointment: Appointment) => Promise<void>;
  setAppointments: (newAppointments: Appointment[]) => Promise<void>;
};

export const useAppointmentStore = create<AppointmentStore>((set, get) => ({
  storedAppointments: [],

  setAppointments: async (newAppointments: Appointment[]) => {
    set({ storedAppointments: newAppointments });
  },

  signUpAppointment: async (newAppointment: Appointment) => {
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
}));
