import { useEffect, useState } from 'react';
import { getAppointmentsRequest } from '../../../api/appointment';
import {
  type Appointment,
  APPOINTMENT_STATUS,
} from '../../../models/Appointment';
import { showToast } from '../../common/toast';

const useRecommendationsScreen = () => {
  const [recommendations, setRecommendations] = useState<Appointment[]>();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    if (!isFetching) setIsRefreshing(true);
    const response = await getAppointmentsRequest();
    if (!isFetching) setIsRefreshing(false);
    else setIsFetching(false);

    if (!response.ok) {
      return showToast('Wystąpił nieoczekiwany błąd');
    }

    setRecommendations(
      response.data.filter(
        (appointment) => appointment.status === APPOINTMENT_STATUS.TO_PLAN,
      ),
    );
  };

  return { recommendations, fetchRecommendations, isFetching, isRefreshing };
};

export default useRecommendationsScreen;
