import { appointments } from '../../mocks/appointments';
import { Appointment } from '../../models/Appointment';

const now = new Date();
export const { upcomingAppointments, pastAppointments } = appointments.reduce(
  (acc, appointment) => {
    if (appointment.date > now) {
      acc.upcomingAppointments.push(appointment);
    } else {
      acc.pastAppointments.push(appointment);
    }
    return acc;
  },
  {
    upcomingAppointments: [] as Appointment[],
    pastAppointments: [] as Appointment[],
  },
);

export enum TabOptions {
  UPCOMING = 'upcoming',
  PAST = 'past',
}

export const tabOptions = [
  { key: TabOptions.UPCOMING, label: 'Nadchodzące' },
  { key: TabOptions.PAST, label: 'Poprzednie' },
];
