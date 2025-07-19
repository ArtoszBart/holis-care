import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getAppointmentsRequest } from '../../api/appointment';
import { getTipsRequest } from '../../api/tips';
import { appointments as appointmentsMock } from '../../mocks/appointments';
import { type Appointment, APPOINTMENT_STATUS } from '../../models/Appointment';
import { type Tip } from '../../models/Tip';
import { type MainNavigationProp } from '../../navigation/main';
import { showToast } from '../common/toast';

const useDashboardScreen = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const [isFetching, setIsFetching] = useState(true);
  const [tips, setTips] = useState<Tip[]>();
  const [recommendations, setRecommendations] = useState<Appointment[]>();

  const appointments = appointmentsMock.filter(
    (appointment) => appointment.status !== APPOINTMENT_STATUS.TO_PLAN,
  );

  useEffect(() => {
    const fetchData = async () => {
      const tipsResponse = await getTipsRequest();
      const appointmentsResponse = await getAppointmentsRequest();
      setIsFetching(false);

      if (!tipsResponse.ok || !appointmentsResponse.ok) {
        return showToast('Wystąpił nieoczekiwany błąd');
      }

      setTips(tipsResponse.data.filter((tip) => tip.userLiked));
      setRecommendations(
        appointmentsResponse.data.filter(
          (appointment) => appointment.status === APPOINTMENT_STATUS.TO_PLAN,
        ),
      );
    };

    fetchData();
  }, []);

  return { isFetching, tips, navigation, recommendations, appointments };
};

export default useDashboardScreen;
