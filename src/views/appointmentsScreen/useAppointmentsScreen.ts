import { useState } from 'react';
import { appointments } from '../../mocks/appointments';
import { APPOINTMENT_STATUS } from '../../models/Appointment';
import { TabOptions } from './consts';

const useAppointmentsScreen = () => {
  const [activeTab, setActiveTab] = useState<TabOptions>(TabOptions.UPCOMING);

  const upcomingAppointments = appointments.filter(
    (appointment) => appointment.status === APPOINTMENT_STATUS.SCHEDULED,
  );
  const pastAppointments = appointments.filter(
    (appointment) => appointment.status === APPOINTMENT_STATUS.COMPLETED,
  );

  return { activeTab, setActiveTab, upcomingAppointments, pastAppointments };
};

export default useAppointmentsScreen;
