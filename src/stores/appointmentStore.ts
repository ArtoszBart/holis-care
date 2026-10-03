import { create } from 'zustand';
import { demoAppointments } from '../mocks/appointments';
import { type Appointment } from '../models/Appointment';

type AppointmentStore = {
  storedAppointments: Appointment[];
  updateAppointment: (newAppointment: Appointment) => Promise<void>;
  setAppointments: (newAppointments: Appointment[]) => void;
};

export const useAppointmentStore = create<AppointmentStore>((set, get) => ({
  storedAppointments: demoAppointments,

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
}));
