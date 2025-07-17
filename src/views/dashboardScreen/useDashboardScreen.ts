import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getTipsRequest } from '../../api/tips';
import { appointments as appointmentsMock } from '../../mocks/appointments';
import { APPOINTMENT_STATUS } from '../../models/Appointment';
import { type Tip } from '../../models/Tip';
import { type MainNavigationProp } from '../../navigation/main';
import { showToast } from '../common/toast';

const useDashboardScreen = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const [isFetching, setIsFetching] = useState(true);
  const [tips, setTips] = useState<Tip[]>();

  const recommendations = appointmentsMock.filter(
    (appointment) => appointment.status === APPOINTMENT_STATUS.TO_PLAN,
  );
  const appointments = appointmentsMock.filter(
    (appointment) => appointment.status !== APPOINTMENT_STATUS.TO_PLAN,
  );

  useEffect(() => {
    const fetchData = async () => {
      const tipsResponse = await getTipsRequest();
      setIsFetching(false);

      if (!tipsResponse.ok) {
        return showToast('Wystąpił nieoczekiwany błąd');
      }

      setTips(tipsResponse.data.filter((tip) => tip.userLiked));
    };

    fetchData();
  }, []);

  return { isFetching, tips, navigation, recommendations, appointments };
};

export default useDashboardScreen;
