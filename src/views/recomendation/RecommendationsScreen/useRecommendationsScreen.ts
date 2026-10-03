import { useNavigation } from '@react-navigation/native';
import { APPOINTMENT_STATUS } from '../../../models/Appointment';
import { type MainNavigationProp } from '../../../navigation/main';
import { useAppointmentStore } from '../../../stores/appointmentStore';

const useRecommendationsScreen = () => {
  const navigation = useNavigation<MainNavigationProp>();
  const { storedAppointments } = useAppointmentStore();

  const recommendations = storedAppointments.filter(
    (appointment) => appointment.status === APPOINTMENT_STATUS.TO_PLAN,
  );

  return { recommendations, navigation };
};

export default useRecommendationsScreen;
