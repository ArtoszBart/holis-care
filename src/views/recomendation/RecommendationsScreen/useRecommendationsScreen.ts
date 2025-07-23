import { useState } from 'react';
import { getAppointmentsRequest } from '../../../api/appointment';
import { APPOINTMENT_STATUS } from '../../../models/Appointment';
import { useAppointmentStore } from '../../../stores/appointmentStore';

const useRecommendationsScreen = () => {
  const { storedAppointments, setAppointments } = useAppointmentStore();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const recommendations = storedAppointments.filter(
    (appointment) => appointment.status === APPOINTMENT_STATUS.TO_PLAN,
  );

  const fetchRecommendations = async () => {
    setIsRefreshing(true);
    const response = await getAppointmentsRequest();
    setIsRefreshing(false);

    if (!response.ok) {
      return;
    }

    setAppointments(response.data);
  };

  return { recommendations, fetchRecommendations, isRefreshing };
};

export default useRecommendationsScreen;
