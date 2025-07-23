import { useNavigation } from '@react-navigation/native';
import { type Appointment, APPOINTMENT_STATUS } from '../../models/Appointment';
import { type MainNavigationProp } from '../../navigation/main';
import { useAppointmentStore } from '../../stores/appointmentStore';
import { useTipStore } from '../../stores/tipStore';

const useDashboardScreen = () => {
  const navigation = useNavigation<MainNavigationProp>();
  const { tips } = useTipStore();
  const { storedAppointments } = useAppointmentStore();

  const likedTips = tips?.filter((tip) => tip.userLiked);
  const { recommendations, appointments } = storedAppointments.reduce(
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

  return { likedTips, navigation, recommendations, appointments };
};

export default useDashboardScreen;
