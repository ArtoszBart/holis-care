import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getAppointmentsRequest } from '../../api/appointment';
import { getTipsRequest } from '../../api/tips';
import { type Appointment, APPOINTMENT_STATUS } from '../../models/Appointment';
import { type Tip } from '../../models/Tip';
import { type MainNavigationProp } from '../../navigation/main';
import { showToast } from '../common/toast';

const useDashboardScreen = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const [isFetching, setIsFetching] = useState(true);
  const [tips, setTips] = useState<Tip[]>();
  const [recommendations, _setRecommendations] = useState<Appointment[]>();
  const [appointments, _setAppointments] = useState<Appointment[]>();

  useEffect(() => {
    const fetchData = async () => {
      const tipsResponse = await getTipsRequest();
      const appointmentsResponse = await getAppointmentsRequest();
      setIsFetching(false);

      if (!tipsResponse.ok || !appointmentsResponse.ok) {
        return showToast('Wystąpił nieoczekiwany błąd');
      }

      setTips(tipsResponse.data.filter((tip) => tip.userLiked));
      setAppointments(appointmentsResponse.data);
    };

    fetchData();
  }, []);

  const setAppointments = (appointmentsData: Appointment[]): void => {
    const { recommendations, appointments } = appointmentsData.reduce(
      (acc, appointment) => {
        if (appointment.status === APPOINTMENT_STATUS.TO_PLAN) {
          acc.recommendations.push(appointment);
        } else {
          acc.appointments.push(appointment);
        }
        return acc;
      },
      {
        recommendations: [] as Appointment[],
        appointments: [] as Appointment[],
      },
    );

    appointments.sort(
      (a, b) => a.appointmentDate!.getTime() - b.appointmentDate!.getTime(),
    );

    _setRecommendations(recommendations);
    _setAppointments(appointments);
  };

  return { isFetching, tips, navigation, recommendations, appointments };
};

export default useDashboardScreen;
